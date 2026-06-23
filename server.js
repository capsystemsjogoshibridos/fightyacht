const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT) || 4175;
const root = __dirname;
const colors = ["blue", "red", "yellow", "green", "pink"];
const specialColors = {
  marjorie: "blue",
  baby: "yellow",
  marcelo: "green",
  bill: "blue",
  lord: "red",
  chris: "red",
  akira: "green",
  chefe: "pink",
};
const actions = {
  soco: { type: "repeat", maxDamage: 5, maxUses: 2 },
  chute: { type: "repeat", maxDamage: 7, maxUses: 2 },
  gancho: { type: "repeat", maxDamage: 10, maxUses: 2 },
  voadora: { type: "repeat", maxDamage: 15, maxUses: 2 },
  magia1: { type: "fullHouse", damage: 20, maxUses: 1 },
  magia2: { type: "threeKind", damage: 23, maxUses: 1 },
  magia3: { type: "multicolor", damage: 25, maxUses: 1 },
  magia4: { type: "fourKind", damage: 27, maxUses: 1 },
  especial: { type: "yacht", damage: 40, maxUses: 1 },
};
const rooms = Array.from({ length: 6 }, (_, index) => newRoom(index + 1));
const roomTimeout = 30000;
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
};

function newRoom(id) {
  return { id, members: [], match: null, events: [], eventId: 0 };
}

function roomStatus(room) {
  if (room.match) return room.match.gameOver ? "playing" : "playing";
  if (room.members.length === 0) return "available";
  return room.members.length === 1 ? "waiting" : "selecting";
}

function roomSummary(room) {
  const status = room.members.length >= 2 ? "playing" : roomStatus(room);
  return { id: room.id, status, players: room.members.length };
}

function findRoom(id) {
  return rooms.find((room) => room.id === Number(id));
}

function findMember(room, clientId) {
  return room.members.find((member) => member.clientId === clientId);
}

function cleanupRooms() {
  const now = Date.now();
  rooms.forEach((room) => {
    if (room.members.length && room.members.every((member) => now - member.lastSeen > roomTimeout)) {
      Object.assign(room, newRoom(room.id));
    }
  });
}

function event(room, type, payload = {}) {
  const next = { id: ++room.eventId, type, ...payload };
  room.events.push(next);
  if (room.events.length > 80) room.events.shift();
  return next;
}

function publicRoom(room, clientId, after = 0) {
  const member = findMember(room, clientId);
  return {
    id: room.id,
    status: roomStatus(room),
    playerIndex: member?.playerIndex ?? null,
    members: room.members.map(({ playerIndex, characterId }) => ({ playerIndex, characterId })),
    match: room.match,
    events: room.events.filter((item) => item.id > Number(after)),
  };
}

function startMatchIfReady(room) {
  if (room.match || room.members.length !== 2 || room.members.some((member) => !member.characterId)) return;
  const ordered = [...room.members].sort((a, b) => a.playerIndex - b.playerIndex);
  const starter = Math.random() < 0.5 ? 0 : 1;
  const start = event(room, "start", { starter });
  room.match = {
    characters: ordered.map((member) => member.characterId),
    starter,
    startEventId: start.id,
    currentPlayer: starter,
    dice: Array(5).fill(null),
    held: Array(5).fill(false),
    rolls: 0,
    players: [{ hp: 100, used: {} }, { hp: 100, used: {} }],
    roundWins: [0, 0],
    roundNumber: 1,
    gameOver: false,
    winnerIndex: null,
    message: "",
  };
}

function calculateDamage(actionKey, dice, characterId) {
  const action = actions[actionKey];
  const countMap = dice.reduce((counts, color) => {
    if (color) counts[color] = (counts[color] || 0) + 1;
    return counts;
  }, {});
  const counts = Object.values(countMap).sort((a, b) => b - a);
  const maxRepeat = counts[0] || 0;
  let baseDamage = 0;
  if (action.type === "repeat") baseDamage = Math.max(1, Math.round((maxRepeat / 5) * action.maxDamage));
  if (action.type === "fullHouse") baseDamage = counts[0] === 3 && counts[1] === 2 ? action.damage : 0;
  if (action.type === "threeKind") baseDamage = maxRepeat >= 3 ? action.damage : 0;
  if (action.type === "fourKind") baseDamage = maxRepeat >= 4 ? action.damage : 0;
  if (action.type === "multicolor") baseDamage = counts.length === 5 ? action.damage : 0;
  if (action.type === "yacht") baseDamage = maxRepeat === 5 ? action.damage : 0;

  const bonusColor = specialColors[characterId];
  const bonus = baseDamage > 0 && hasSpecialColorBonus(action.type, countMap, bonusColor) ? 7 : 0;
  return { damage: baseDamage + bonus, baseDamage, bonus, bonusColor };
}

function hasSpecialColorBonus(actionType, countMap, specialColor) {
  if (!specialColor) return false;
  const specialCount = countMap[specialColor] || 0;
  if (actionType === "repeat") {
    const maxRepeat = Math.max(...Object.values(countMap), 0);
    return specialCount > 0 && specialCount === maxRepeat;
  }
  if (actionType === "fullHouse") return specialCount === 2 || specialCount === 3;
  if (actionType === "threeKind") return specialCount >= 3;
  if (actionType === "fourKind") return specialCount >= 4;
  if (actionType === "multicolor") return false;
  return specialCount === 5;
}

function command(room, member, body) {
  if (body.type === "select") {
    if (room.match) throw new Error("Esta partida ja comecou.");
    if (room.members.some((other) => other !== member && other.characterId === body.characterId)) {
      throw new Error("O adversario ja escolheu esse lutador.");
    }
    member.characterId = body.characterId;
    startMatchIfReady(room);
    return;
  }

  const match = room.match;
  if (!match || match.gameOver) throw new Error("A partida nao esta disponivel.");
  if (match.currentPlayer !== member.playerIndex) throw new Error("Aguarde o seu turno.");

  if (body.type === "roll") {
    if (match.rolls >= 3) throw new Error("Escolha um ataque.");
    match.dice = match.dice.map((color, index) => (match.held[index] ? color : colors[Math.floor(Math.random() * colors.length)]));
    match.rolls += 1;
    event(room, "roll", {
      playerIndex: member.playerIndex,
      dice: [...match.dice],
      held: [...match.held],
      rollNumber: match.rolls,
    });
    return;
  }

  if (body.type === "hold") {
    const index = Number(body.index);
    if (!match.dice[index] || match.rolls >= 3) throw new Error("Esse dado nao pode ser separado agora.");
    match.held[index] = !match.held[index];
    event(room, "hold", { playerIndex: member.playerIndex, held: [...match.held] });
    return;
  }

  if (body.type === "attack") {
    const action = actions[body.actionKey];
    if (!action || match.rolls === 0) throw new Error("Role os dados antes de atacar.");
    const attacker = match.players[member.playerIndex];
    if ((attacker.used[body.actionKey] || 0) >= action.maxUses) throw new Error("Esse poder ja foi utilizado.");
    const defenderIndex = member.playerIndex === 0 ? 1 : 0;
    const result = calculateDamage(body.actionKey, match.dice, match.characters[member.playerIndex]);
    const specialBonus = body.actionKey === "especial" && result.damage > 0 ? Math.max(0, Math.min(3, Number(body.specialBonus) || 0)) : 0;
    result.damage += specialBonus;
    attacker.used[body.actionKey] = (attacker.used[body.actionKey] || 0) + 1;
    match.players[defenderIndex].hp = Math.max(0, match.players[defenderIndex].hp - result.damage);
    const exhausted = match.players.every((player) =>
      Object.keys(actions).every((key) => (player.used[key] || 0) >= actions[key].maxUses),
    );
    let roundOver = false;
    let roundWinnerIndex = null;
    if (match.players[defenderIndex].hp <= 0 || exhausted) {
      roundOver = true;
      roundWinnerIndex =
        match.players[0].hp === match.players[1].hp ? null : match.players[0].hp > match.players[1].hp ? 0 : 1;
      if (roundWinnerIndex !== null) match.roundWins[roundWinnerIndex] += 1;
      if (roundWinnerIndex !== null && match.roundWins[roundWinnerIndex] >= 2) {
        match.gameOver = true;
        match.winnerIndex = roundWinnerIndex;
      } else {
        match.roundNumber += 1;
        match.currentPlayer = roundWinnerIndex ?? member.playerIndex;
        match.dice = Array(5).fill(null);
        match.held = Array(5).fill(false);
        match.rolls = 0;
        match.players.forEach((player) => {
          player.hp = 100;
          player.used = {};
        });
      }
    } else {
      match.currentPlayer = defenderIndex;
      match.dice = Array(5).fill(null);
      match.held = Array(5).fill(false);
      match.rolls = 0;
    }
    event(room, "attack", {
      playerIndex: member.playerIndex,
      actionKey: body.actionKey,
      damage: result.damage,
      baseDamage: result.baseDamage,
      bonus: result.bonus,
      bonusColor: result.bonusColor,
      specialBonus,
      roundOver,
      roundWinnerIndex,
      roundWins: [...match.roundWins],
      roundNumber: match.roundNumber,
      gameOver: match.gameOver,
      winnerIndex: match.winnerIndex,
    });
    return;
  }
  throw new Error("Comando desconhecido.");
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 10000) reject(new Error("Requisicao grande demais."));
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(new Error("JSON invalido."));
      }
    });
  });
}

function sendJson(response, status, data) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(data));
}

async function handleApi(request, response, url) {
  const parts = url.pathname.split("/").filter(Boolean);
  if (request.method === "GET" && url.pathname === "/api/rooms") {
    sendJson(response, 200, rooms.map(roomSummary));
    return true;
  }
  if (parts[0] !== "api" || parts[1] !== "rooms" || !parts[2]) return false;
  const room = findRoom(parts[2]);
  if (!room) {
    sendJson(response, 404, { error: "Sala nao encontrada." });
    return true;
  }
  try {
    if (request.method === "POST" && parts[3] === "join") {
      const body = await readBody(request);
      let member = findMember(room, body.clientId);
      if (!member) {
        if (room.members.length >= 2 || room.match) throw new Error("Esta sala ja esta ocupada.");
        member = { clientId: body.clientId, playerIndex: room.members.length, characterId: null, lastSeen: Date.now() };
        room.members.push(member);
      }
      member.lastSeen = Date.now();
      sendJson(response, 200, publicRoom(room, body.clientId));
      return true;
    }
    if (request.method === "POST" && parts[3] === "leave") {
      const body = await readBody(request);
      room.members = room.members.filter((member) => member.clientId !== body.clientId);
      if (room.members.length === 0 || room.match) {
        const cleared = newRoom(room.id);
        Object.assign(room, cleared);
      }
      sendJson(response, 200, { ok: true });
      return true;
    }
    if (request.method === "GET" && parts[3] === "state") {
      const member = findMember(room, url.searchParams.get("clientId"));
      if (!member) throw new Error("Voce nao esta nesta sala.");
      member.lastSeen = Date.now();
      sendJson(response, 200, publicRoom(room, member.clientId, url.searchParams.get("after") || 0));
      return true;
    }
    if (request.method === "POST" && parts[3] === "command") {
      const body = await readBody(request);
      const member = findMember(room, body.clientId);
      if (!member) throw new Error("Voce nao esta nesta sala.");
      member.lastSeen = Date.now();
      command(room, member, body);
      sendJson(response, 200, publicRoom(room, body.clientId));
      return true;
    }
  } catch (error) {
    sendJson(response, 409, { error: error.message });
    return true;
  }
  return false;
}

function serveStatic(response, url) {
  const requested = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const filePath = path.resolve(root, requested);
  if (!filePath.startsWith(root + path.sep) && filePath !== path.join(root, "index.html")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    const type = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    response.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
    response.end(data);
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  cleanupRooms();
  if (url.pathname.startsWith("/api/") && (await handleApi(request, response, url))) return;
  serveStatic(response, url);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Fight Yacht online em http://localhost:${port}`);
});
