const colors = ["blue", "red", "yellow", "green", "pink"];
const spriteDuration = 2000;
const colorLabels = {
  blue: "Azul",
  red: "Vermelho",
  yellow: "Amarelo",
  green: "Verde",
  pink: "Rosa",
};

const characters = [
  character("marjorie", "Marjorie Bros.", "assets/select-marjorie.png", "blue", {
    idle: "assets/marjorie.png",
    attack: "assets/marjorie-attack.png",
    damage: "assets/marjorie-damage.png",
    win: "assets/marjorie-win.png",
  }),
  character("baby", "Baby Betinho", "assets/select-baby.png", "yellow", {
    idle: "assets/baby.png",
    attack: "assets/baby-attack.png",
    damage: "assets/baby-damage.png",
    win: "assets/baby-win.png",
  }),
  character("marcelo", "Marcelo Kamikaze", "assets/select-marcelo.png", "green", {
    idle: "assets/marcelo.png",
    attack: "assets/marcelo-attack.png",
    damage: "assets/marcelo-damage.png",
    win: "assets/marcelo-win.png",
  }),
  character("bill", "Bill Games", "assets/select-bill.png", "blue", {
    idle: "assets/bill.png",
    attack: "assets/bill-attack.png",
    damage: "assets/bill-damage.png",
    win: "assets/bill-win.png",
  }),
  character("lord", "Lord Mathias", "assets/select-lord.png", "red", {
    idle: "assets/lord.png",
    attack: "assets/lord-attack.png",
    damage: "assets/lord-damage.png",
    win: "assets/lord-win.png",
  }),
  character("chris", "Chris Combo", "assets/select-chris.png", "red", {
    idle: "assets/chris.png",
    attack: "assets/chris-attack.png",
    damage: "assets/chris-damage.png",
    win: "assets/chris-win.png",
  }),
  character("akira", "Akira e Agora", "assets/select-akira.png", "green", {
    idle: "assets/akira.png",
    attack: "assets/akira-attack.png",
    damage: "assets/akira-damage.png",
    win: "assets/akira-win.png",
  }),
  character("chefe", "O Chefe", "assets/select-chefe.png", "pink", {
    idle: "assets/chefe.png",
    attack: "assets/chefe-attack.png",
    damage: "assets/chefe-damage.png",
    win: "assets/chefe-win.png",
  }),
];

const attackEmojis = {
  marjorie: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "❤️",
    magia2: "💋",
    magia3: "🌈",
    magia4: "🪭",
    especial: "🦋",
  },
  akira: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "🈶",
    magia2: "🌀",
    magia3: "🈳",
    magia4: "⚡",
    especial: "👺",
  },
  baby: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "🥊",
    magia2: "🥾",
    magia3: "😎",
    magia4: "🪨",
    especial: "☄️",
  },
  marcelo: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "🗡️",
    magia2: "🛡️",
    magia3: "🍄",
    magia4: "🔮",
    especial: "✨",
  },
  bill: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "💾",
    magia2: "💿",
    magia3: "⌨️",
    magia4: "🖥️",
    especial: "💻",
  },
  lord: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "🏈",
    magia2: "🏐",
    magia3: "⚽",
    magia4: "🏀",
    especial: "🎱",
  },
  chris: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "🪃",
    magia2: "🛼",
    magia3: "⛸️",
    magia4: "🛹",
    especial: "🪀",
  },
  chefe: {
    soco: "👊",
    chute: "🦶",
    gancho: "💪",
    voadora: "🦵",
    magia1: "🕹️",
    magia2: "🎮",
    magia3: "🍔",
    magia4: "🌭",
    especial: "😵‍💫",
  },
};

const actions = {
  soco: { label: "Soco", type: "repeat", maxDamage: 5, maxUses: 2 },
  chute: { label: "Chute", type: "repeat", maxDamage: 7, maxUses: 2 },
  gancho: { label: "Gancho", type: "repeat", maxDamage: 10, maxUses: 2 },
  voadora: { label: "Voadora", type: "repeat", maxDamage: 15, maxUses: 2 },
  magia1: { label: "Magia 1", type: "fullHouse", damage: 20, maxUses: 1 },
  magia2: { label: "Magia 2", type: "threeKind", damage: 23, maxUses: 1 },
  magia3: { label: "Magia 3", type: "multicolor", damage: 25, maxUses: 1 },
  magia4: { label: "Magia 4", type: "fourKind", damage: 27, maxUses: 1 },
  especial: { label: "Poder Especial", type: "yacht", damage: 40, maxUses: 1 },
};

const actionKeys = Object.keys(actions);
const screens = {
  home: document.querySelector("#homeScreen"),
  select: document.querySelector("#selectScreen"),
  soon: document.querySelector("#soonScreen"),
  draw: document.querySelector("#drawScreen"),
  online: document.querySelector("#onlineScreen"),
  map: document.querySelector("#mapScreen"),
  vs: document.querySelector("#vsScreen"),
  game: document.querySelector("#gameScreen"),
};

let players = [];
let currentPlayer = 0;
let dice = Array(5).fill(null);
let held = Array(5).fill(false);
let rolls = 0;
let gameOver = false;
let isRolling = false;
let matchWinnerIndex = null;
let mode = null;
let selectStep = null;
let pendingP1 = null;
let arcade = { heroId: null, opponents: [], index: 0 };
let versusDraw = null;
let pendingVs = null;
let online = {
  clientId: getClientId(),
  roomId: null,
  playerIndex: null,
  revision: -1,
  lastEventId: 0,
  matchStarted: false,
  pollTimer: null,
  characterId: null,
  roomsSignature: "",
  showingVs: false,
};

const characterGrid = document.querySelector("#characterGrid");
const selectTitle = document.querySelector("#selectTitle");
const selectSubtitle = document.querySelector("#selectSubtitle");
const arcadeMap = document.querySelector("#arcadeMap");
const mapCounter = document.querySelector("#mapCounter");
const mapRoute = document.querySelector("#mapRoute");
const battleButton = document.querySelector("#battleButton");
const drawBattleButton = document.querySelector("#drawBattleButton");
const rouletteWheel = document.querySelector("#rouletteWheel");
const rouletteP1 = document.querySelector("#rouletteP1");
const rouletteP2 = document.querySelector("#rouletteP2");
const drawResult = document.querySelector("#drawResult");
const roomList = document.querySelector("#roomList");
const onlineWaiting = document.querySelector("#onlineWaiting");
const onlineWaitingTitle = document.querySelector("#onlineWaitingTitle");
const onlineStatus = document.querySelector("#onlineStatus");
const onlineSubtitle = document.querySelector("#onlineSubtitle");
const onlineBackButton = document.querySelector("#onlineBackButton");
const vsP1Icon = document.querySelector("#vsP1Icon");
const vsP2Icon = document.querySelector("#vsP2Icon");
const vsP1Name = document.querySelector("#vsP1Name");
const vsP2Name = document.querySelector("#vsP2Name");
const vsP1Color = document.querySelector("#vsP1Color");
const vsP2Color = document.querySelector("#vsP2Color");
const vsSubtitle = document.querySelector("#vsSubtitle");
const vsBattleButton = document.querySelector("#vsBattleButton");
const rollButton = document.querySelector("#rollButton");
const diceButtons = [...document.querySelectorAll(".die")];
const actionButtons = [...document.querySelectorAll("[data-action]")];
const turnLabel = document.querySelector("#turnLabel");
const rollsLabel = document.querySelector("#rollsLabel");
const roundMessage = document.querySelector("#roundMessage");
const fighters = [...document.querySelectorAll(".fighter")];
const fighterImages = fighters.map((fighter) => fighter.querySelector("img"));
const fighterNames = fighters.map((fighter) => fighter.querySelector(".health-card span"));
const koOverlay = document.querySelector("#koOverlay");
const winnerSprite = document.querySelector("#winnerSprite");
const winnerText = document.querySelector("#winnerText");
const koButton = document.querySelector("#koButton");

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => chooseMode(button.dataset.mode));
});
document.querySelectorAll("[data-back]").forEach((button) => button.addEventListener("click", showHome));
rollButton.addEventListener("click", () => rollDice());
koButton.addEventListener("click", continueAfterKo);
battleButton.addEventListener("click", startCurrentArcadeBattle);
drawBattleButton.addEventListener("click", startDrawnVersusBattle);
vsBattleButton.addEventListener("click", startPendingVsBattle);
onlineBackButton.addEventListener("click", leaveOnlineRoom);
diceButtons.forEach((button, index) => button.addEventListener("click", () => toggleHold(index)));
actionButtons.forEach((button) => button.addEventListener("click", () => useAction(button.dataset.action)));

preloadSprites();
showScreen("home");

function character(id, name, select, specialColor, sprites) {
  return { id, name, select, specialColor, sprites };
}

function chooseMode(nextMode) {
  mode = nextMode;
  if (mode === "online") {
    showOnlineLobby();
    return;
  }
  if (mode === "newsstand") {
    showScreen("soon");
    return;
  }
  selectStep = mode === "arcade" ? "arcadeHero" : "versusP1";
  renderCharacterSelect();
  showScreen("select");
}

function renderCharacterSelect() {
  const isSecondPlayer = selectStep === "versusP2";
  selectTitle.textContent =
    selectStep === "arcadeHero"
      ? "Arcade: escolha seu lutador"
      : selectStep === "onlinePick"
        ? `Sala ${online.roomId}: escolha seu lutador`
        : isSecondPlayer
          ? "Jogador 2"
          : "Jogador 1";
  selectSubtitle.textContent =
    selectStep === "arcadeHero"
      ? "Voce enfrentara uma sequencia aleatoria. O Chefe fica para o final."
      : selectStep === "onlinePick"
        ? `Voce joga como Jogador ${online.playerIndex + 1}.`
      : isSecondPlayer
        ? "Escolha o adversario local."
        : "Escolha quem joga primeiro no controle 1.";
  characterGrid.innerHTML = "";

  characters.forEach((fighter) => {
    const button = document.createElement("button");
    button.className = "character-card";
    button.type = "button";
    button.innerHTML = `<img src="${fighter.select}" alt="${fighter.name}"><span>${fighter.name}</span><small>COR - ${colorLabels[fighter.specialColor]}</small>`;
    if (selectStep === "arcadeHero" && fighter.id === "chefe") button.disabled = true;
    if (isSecondPlayer && pendingP1?.id === fighter.id) button.disabled = true;
    button.addEventListener("click", () => selectCharacter(fighter.id));
    characterGrid.appendChild(button);
  });
}

function selectCharacter(id) {
  const picked = getCharacter(id);
  if (selectStep === "onlinePick") {
    chooseOnlineCharacter(picked);
    return;
  }
  if (selectStep === "arcadeHero") {
    startArcade(picked);
    return;
  }
  if (selectStep === "versusP1") {
    pendingP1 = picked;
    selectStep = "versusP2";
    renderCharacterSelect();
    return;
  }
  startVersus(pendingP1, picked);
}

function startArcade(hero) {
  const pool = shuffle(characters.filter((fighter) => fighter.id !== hero.id && fighter.id !== "chefe"));
  arcade = { heroId: hero.id, opponents: [...pool, getCharacter("chefe")], index: 0 };
  showArcadeMap();
}

function startCurrentArcadeBattle() {
  const hero = getCharacter(arcade.heroId);
  const opponent = arcade.opponents[arcade.index];
  showVsScreen(hero, opponent, 0, `Arcade ${arcade.index + 1}/${arcade.opponents.length}: ${hero.name} contra ${opponent.name}`);
}

function startVersus(p1, p2) {
  const starter = Math.random() < 0.5 ? 0 : 1;
  versusDraw = { p1, p2, starter };
  rouletteP1.textContent = p1.name;
  rouletteP2.textContent = p2.name;
  rouletteWheel.className = `roulette-wheel winner-p${starter + 1}`;
  drawResult.textContent = "Girando a roleta...";
  drawBattleButton.disabled = true;
  showScreen("draw");
  requestAnimationFrame(() => {
    rouletteWheel.classList.add("spinning");
  });
  window.setTimeout(() => {
    drawResult.textContent = `${playersLabel(starter, p1, p2)} comeca!`;
    drawBattleButton.disabled = false;
  }, 2920);
}

function playersLabel(index, p1, p2) {
  return index === 0 ? p1.name : p2.name;
}

function showVsScreen(p1, p2, starter, message, options = {}) {
  pendingVs = { p1, p2, starter, message };
  vsP1Icon.src = p1.select;
  vsP1Icon.alt = p1.name;
  vsP2Icon.src = p2.select;
  vsP2Icon.alt = p2.name;
  vsP1Name.textContent = p1.name;
  vsP2Name.textContent = p2.name;
  vsP1Color.textContent = `COR - ${colorLabels[p1.specialColor]}`;
  vsP2Color.textContent = `COR - ${colorLabels[p2.specialColor]}`;
  vsSubtitle.textContent = message;
  vsBattleButton.disabled = Boolean(options.autoStart);
  vsBattleButton.textContent = options.autoStart ? "Preparando..." : "Ir pra batalha";
  showScreen("vs");
  if (options.autoStart) {
    window.setTimeout(() => {
      if (pendingVs?.p1.id === p1.id && pendingVs?.p2.id === p2.id) startPendingVsBattle();
    }, options.delay || 1400);
  }
}

function startPendingVsBattle() {
  if (!pendingVs) return;
  const { p1, p2, starter, message } = pendingVs;
  pendingVs = null;
  vsBattleButton.disabled = false;
  vsBattleButton.textContent = "Ir pra batalha";
  startMatch(p1, p2, starter, message);
}

function startDrawnVersusBattle() {
  if (!versusDraw) return;
  const { p1, p2, starter } = versusDraw;
  showVsScreen(p1, p2, starter, `Roleta: ${playersLabel(starter, p1, p2)} comeca!`);
}

async function showOnlineLobby() {
  resetOnlineSession(false);
  onlineSubtitle.textContent = "Escolha uma sala para criar ou entrar em uma partida.";
  onlineWaiting.classList.add("hidden");
  roomList.classList.remove("hidden");
  roomList.innerHTML = '<p class="online-loading">Buscando salas...</p>';
  online.roomsSignature = "";
  showScreen("online");
  await refreshOnlineRooms();
}

async function refreshOnlineRooms() {
  if (mode !== "online" || online.roomId) return;
  try {
    const rooms = await onlineApi("/api/rooms");
    const signature = JSON.stringify(rooms);
    if (signature === online.roomsSignature) {
      scheduleOnlinePoll(refreshOnlineRooms, 900);
      return;
    }
    online.roomsSignature = signature;
    roomList.innerHTML = "";
    rooms.forEach((room) => {
      const button = document.createElement("button");
      const labels = {
        available: ["Disponivel", "Criar partida"],
        waiting: ["Aguardando", "Entrar na partida"],
        playing: ["Em jogo", "Sala ocupada"],
      };
      button.type = "button";
      button.className = "room-button";
      button.dataset.status = room.status;
      button.disabled = room.status === "playing";
      button.innerHTML = `<strong>Sala ${room.id}</strong><small>${labels[room.status][1]}</small><span class="room-state">${labels[room.status][0]}</span>`;
      button.addEventListener("click", () => joinOnlineRoom(room.id));
      roomList.appendChild(button);
    });
    scheduleOnlinePoll(refreshOnlineRooms, 900);
  } catch (error) {
    roomList.innerHTML = '<p class="online-error">Servidor online indisponivel. Abra o jogo pelo servidor local.</p>';
  }
}

async function joinOnlineRoom(roomId) {
  try {
    const state = await onlineApi(`/api/rooms/${roomId}/join`, {
      method: "POST",
      body: JSON.stringify({ clientId: online.clientId }),
    });
    online.roomId = roomId;
    online.playerIndex = state.playerIndex;
    online.revision = -1;
    online.lastEventId = 0;
    online.matchStarted = false;
    online.showingVs = false;
    selectStep = "onlinePick";
    renderCharacterSelect();
    showScreen("select");
    pollOnlineRoom();
  } catch (error) {
    onlineSubtitle.textContent = error.message;
  }
}

async function chooseOnlineCharacter(fighter) {
  online.characterId = fighter.id;
  try {
    await sendOnlineCommand("select", { characterId: fighter.id });
    roomList.classList.add("hidden");
    onlineWaiting.classList.remove("hidden");
    onlineWaitingTitle.textContent = `Sala ${online.roomId}`;
    onlineStatus.textContent = "Lutador escolhido. Aguardando o adversario...";
    onlineSubtitle.textContent = `Voce e o Jogador ${online.playerIndex + 1}.`;
    showScreen("online");
  } catch (error) {
    selectSubtitle.textContent = error.message;
  }
}

async function pollOnlineRoom() {
  if (mode !== "online" || !online.roomId) return;
  try {
    const state = await onlineApi(`/api/rooms/${online.roomId}/state?clientId=${encodeURIComponent(online.clientId)}&after=${online.lastEventId}`);
    if (state.status === "selecting" || state.status === "waiting") {
      if (online.characterId && !online.matchStarted) {
        onlineStatus.textContent = state.members.length < 2 ? "Aguardando outro jogador..." : "Aguardando o adversario escolher seu lutador...";
      }
    }
    if (state.status === "playing" || state.status === "finished") {
      await syncOnlineMatch(state);
    }
    scheduleOnlinePoll(pollOnlineRoom, 360);
  } catch (error) {
    onlineStatus.textContent = "Conexao interrompida. Tentando reconectar...";
    scheduleOnlinePoll(pollOnlineRoom, 1200);
  }
}

async function syncOnlineMatch(state) {
  const match = state.match;
  if (!online.matchStarted) {
    const left = getCharacter(match.characters[0]);
    const right = getCharacter(match.characters[1]);
    if (!online.showingVs) {
      online.showingVs = true;
      showVsScreen(left, right, match.starter, `Online: ${playersLabel(match.starter, left, right)} comeca!`, {
        autoStart: true,
      });
    }
    if (pendingVs) return;
    online.matchStarted = true;
    applyOnlineSnapshot(match);
    online.lastEventId = match.startEventId;
  }

  for (const event of state.events) {
    if (event.id <= online.lastEventId) continue;
    online.lastEventId = event.id;
    if (event.type === "roll") {
      currentPlayer = event.playerIndex;
      held = [...event.held];
      rolls = event.rollNumber - 1;
      await rollDice(event.dice);
    } else if (event.type === "hold") {
      held = [...event.held];
      renderDice();
    } else if (event.type === "attack") {
      useAction(event.actionKey, true);
    }
  }
  applyOnlineSnapshot(match);
}

function applyOnlineSnapshot(match) {
  currentPlayer = match.currentPlayer;
  dice = [...match.dice];
  held = [...match.held];
  rolls = match.rolls;
  match.players.forEach((player, index) => {
    players[index].hp = player.hp;
    players[index].used = { ...player.used };
  });
  if (match.gameOver && !gameOver) finishMatch(match.winnerIndex, match.message);
  render();
}

async function sendOnlineCommand(type, payload = {}) {
  if (!online.roomId) return null;
  return onlineApi(`/api/rooms/${online.roomId}/command`, {
    method: "POST",
    body: JSON.stringify({ clientId: online.clientId, type, ...payload }),
  });
}

function requestOnlineCommand(type, payload = {}) {
  sendOnlineCommand(type, payload).catch((error) => {
    roundMessage.textContent = error.message;
  });
}

async function leaveOnlineRoom() {
  if (online.roomId) {
    try {
      await onlineApi(`/api/rooms/${online.roomId}/leave`, {
        method: "POST",
        body: JSON.stringify({ clientId: online.clientId }),
      });
    } catch (error) {
      // Returning to menu is still allowed if the connection has dropped.
    }
  }
  resetOnlineSession(false);
  showHome();
}

function resetOnlineSession(notify = true) {
  if (online.pollTimer) window.clearTimeout(online.pollTimer);
  if (notify && online.roomId) {
    onlineApi(`/api/rooms/${online.roomId}/leave`, {
      method: "POST",
      body: JSON.stringify({ clientId: online.clientId }),
    }).catch(() => {});
  }
  online.roomId = null;
  online.playerIndex = null;
  online.revision = -1;
  online.lastEventId = 0;
  online.matchStarted = false;
  online.characterId = null;
  online.showingVs = false;
}

function scheduleOnlinePoll(callback, duration) {
  if (online.pollTimer) window.clearTimeout(online.pollTimer);
  online.pollTimer = window.setTimeout(callback, duration);
}

async function onlineApi(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Nao foi possivel acessar esta sala.");
  return data;
}

function getClientId() {
  const prefix = "fight-yacht-client:";
  if (window.name.startsWith(prefix)) return window.name.slice(prefix.length);
  const generated = window.crypto.randomUUID();
  window.name = `${prefix}${generated}`;
  return generated;
}

function startMatch(leftCharacter, rightCharacter, starter = 0, message = "Role os dados para iniciar o ataque.") {
  players = [makePlayer(leftCharacter), makePlayer(rightCharacter)];
  currentPlayer = starter;
  dice = Array(5).fill(null);
  held = Array(5).fill(false);
  rolls = 0;
  gameOver = false;
  isRolling = false;
  matchWinnerIndex = null;
  koOverlay.classList.remove("show");
  koOverlay.setAttribute("aria-hidden", "true");
  winnerSprite.src = "";
  winnerSprite.alt = "";
  fighterNames[0].textContent = players[0].name;
  fighterNames[1].textContent = players[1].name;
  fighterImages[0].src = players[0].sprites.idle;
  fighterImages[1].src = players[1].sprites.idle;
  roundMessage.textContent = message;
  showScreen("game");
  render();
  maybeCpuTurn();
}

function makePlayer(fighter) {
  return { ...fighter, hp: 100, used: {} };
}

async function rollDice(syncedDice = null) {
  if (mode === "online" && !syncedDice) {
    requestOnlineCommand("roll");
    return;
  }
  if (gameOver || isRolling || rolls >= 3) return;
  isRolling = true;
  rollButton.disabled = true;
  renderActions();

  const nextDice = dice.map((value, index) => (held[index] ? value : null));
  for (let index = 0; index < diceButtons.length; index += 1) {
    if (held[index] && nextDice[index]) continue;
    diceButtons[index].classList.add("rolling");
    await wait(110);
    nextDice[index] = syncedDice ? syncedDice[index] : randomColor();
    dice = [...nextDice];
    renderDice();
    diceButtons[index].classList.add("rolling");
    await wait(210);
    diceButtons[index].classList.remove("rolling");
  }

  rolls += 1;
  isRolling = false;
  roundMessage.textContent =
    rolls === 3 ? "Ultima rolagem. Escolha um golpe." : "Clique nos dados para separar/segurar cores antes de rolar de novo.";
  render();
}

function toggleHold(index) {
  if (!dice[index] || gameOver || isRolling || isCpuTurn() || isOnlineOpponentTurn()) return;
  if (mode === "online") {
    requestOnlineCommand("hold", { index });
    return;
  }
  held[index] = !held[index];
  renderDice();
}

function useAction(actionKey, fromServer = false) {
  if (mode === "online" && !fromServer) {
    requestOnlineCommand("attack", { actionKey });
    return;
  }
  if (gameOver || isRolling || rolls === 0) {
    roundMessage.textContent = "Role os dados antes de atacar.";
    return;
  }
  const player = players[currentPlayer];
  const opponentIndex = currentPlayer === 0 ? 1 : 0;
  const opponent = players[opponentIndex];
  const action = actions[actionKey];
  if (getUseCount(player, actionKey) >= action.maxUses) return;

  const result = calculateDamage(actionKey);
  player.used[actionKey] = getUseCount(player, actionKey) + 1;
  opponent.hp = Math.max(0, opponent.hp - result.damage);
  playCombatAnimation(actionKey, currentPlayer, opponentIndex, result.damage);

  const bonusText = result.bonus ? ` Bonus de cor ${colorLabels[result.bonusColor]}: +${result.bonus}.` : "";
  const hitText =
    result.damage > 0
      ? `${player.name} usou ${action.label} e causou ${result.damage} de dano.${bonusText}`
      : `${player.name} tentou ${action.label}, mas a combinacao nao fechou.`;

  if (opponent.hp <= 0) {
    finishMatch(currentPlayer, `${hitText} ${player.name} venceu!`);
  } else if (players.every((contestant) => !hasActionsLeft(contestant))) {
    const finalResult = getFinalResult();
    finishMatch(finalResult.winnerIndex, `${hitText} ${finalResult.message}`);
  } else {
    currentPlayer = opponentIndex;
    dice = Array(5).fill(null);
    held = Array(5).fill(false);
    rolls = 0;
    roundMessage.textContent = `${hitText} Agora e a vez de ${players[currentPlayer].name}.`;
    render();
    maybeCpuTurn();
  }
}

function finishMatch(winnerIndex, message) {
  gameOver = true;
  matchWinnerIndex = winnerIndex;
  if (winnerIndex !== null) setTemporarySprite(winnerIndex, "win", false);
  roundMessage.textContent = message;
  showKo(winnerIndex);
  render();
}

function continueAfterKo() {
  if (mode === "arcade" && matchWinnerIndex === 0 && players[0].id === arcade.heroId) {
    arcade.index += 1;
    if (arcade.index < arcade.opponents.length) {
      koOverlay.classList.remove("show");
      koOverlay.setAttribute("aria-hidden", "true");
      showArcadeMap();
      return;
    }
  }
  showHome();
}

async function maybeCpuTurn() {
  if (!isCpuTurn()) return;
  await wait(650);
  for (let index = 0; index < 3 && !gameOver; index += 1) {
    await rollDice();
    if (index < 2) {
      const strategy = chooseCpuStrategy();
      held = dice.map((_, dieIndex) => strategy.held.includes(dieIndex));
      roundMessage.textContent = `${players[currentPlayer].name} separou dados para buscar ${actions[strategy.action].label}.`;
      renderDice();
      await wait(820);
    } else {
      await wait(320);
    }
  }
  if (!gameOver) {
    const actionKey = pickCpuAction();
    roundMessage.textContent = `${players[currentPlayer].name} escolheu ${actions[actionKey].label}.`;
    await wait(420);
    useAction(actionKey);
  }
}

function isCpuTurn() {
  return mode === "arcade" && currentPlayer === 1 && !gameOver;
}

function isOnlineOpponentTurn() {
  return mode === "online" && online.matchStarted && currentPlayer !== online.playerIndex && !gameOver;
}

function pickCpuAction() {
  const player = players[currentPlayer];
  const available = actionKeys.filter((key) => getUseCount(player, key) < actions[key].maxUses);
  const magicHits = available
    .filter((key) => actions[key].type !== "repeat" && calculateDamage(key).damage > 0)
    .map((key) => ({ key, damage: calculateDamage(key).damage }))
    .sort((a, b) => b.damage - a.damage);
  if (magicHits.length) return magicHits[0].key;

  const physicalHits = available
    .filter((key) => actions[key].type === "repeat")
    .map((key) => ({ key, used: getUseCount(player, key), damage: calculateDamage(key).damage }))
    .sort((a, b) => a.used - b.used || b.damage - a.damage);
  if (physicalHits.length) return physicalHits[0].key;

  return available
    .map((key) => ({ key, damage: calculateDamage(key).damage }))
    .sort((a, b) => b.damage - a.damage)[0].key;
}

function chooseCpuStrategy() {
  const player = players[currentPlayer];
  const availableMagic = actionKeys.filter(
    (key) => actions[key].type !== "repeat" && getUseCount(player, key) < actions[key].maxUses,
  );
  const completed = availableMagic
    .filter((key) => calculateDamage(key).damage > 0)
    .sort((a, b) => actions[b].damage - actions[a].damage);
  const action = completed[0] || availableMagic.sort((a, b) => cpuProgress(b) - cpuProgress(a))[0] || "voadora";
  return { action, held: getCpuHeldDice(action) };
}

function cpuProgress(actionKey) {
  const counts = Object.values(getCounts()).sort((a, b) => b - a);
  const maxRepeat = counts[0] || 0;
  if (actionKey === "magia3") return counts.length / 5 + (counts.length === 4 ? 0.45 : 0);
  if (actionKey === "magia1") {
    const hasTriple = maxRepeat >= 3 ? 0.6 : maxRepeat / 5;
    const hasPair = counts[1] >= 2 ? 0.45 : (counts[1] || 0) / 5;
    return hasTriple + hasPair;
  }
  if (actionKey === "magia2") return maxRepeat / 3 + (maxRepeat >= 2 ? 0.18 : 0);
  if (actionKey === "magia4") return maxRepeat / 4 - 0.08;
  return maxRepeat / 5 - 0.22;
}

function getCpuHeldDice(actionKey) {
  if (actionKey === "magia3") {
    const kept = new Set();
    return dice.reduce((indices, color, index) => {
      if (!kept.has(color)) {
        kept.add(color);
        indices.push(index);
      }
      return indices;
    }, []);
  }

  const specialColor = players[currentPlayer]?.specialColor;
  const entries = Object.entries(getCounts()).sort(
    (a, b) => b[1] - a[1] || Number(b[0] === specialColor) - Number(a[0] === specialColor),
  );
  if (actionKey === "magia1") {
    const targets = entries.slice(0, 2).map(([color]) => color);
    return dice.reduce((indices, color, index) => {
      const targetIndex = targets.indexOf(color);
      const limit = targetIndex === 0 ? 3 : 2;
      if (targetIndex !== -1 && indices.filter((heldIndex) => dice[heldIndex] === color).length < limit) indices.push(index);
      return indices;
    }, []);
  }

  const targetColor = entries[0]?.[0];
  return dice.reduce((indices, color, index) => {
    if (color === targetColor) indices.push(index);
    return indices;
  }, []);
}

function calculateDamage(actionKey, source = dice, player = players[currentPlayer]) {
  const action = actions[actionKey];
  const countMap = getCounts(source);
  const countValues = Object.values(countMap).sort((a, b) => b - a);
  const maxRepeat = countValues[0] || 0;
  let baseDamage = 0;
  if (action.type === "repeat") baseDamage = Math.max(1, Math.round((maxRepeat / 5) * action.maxDamage));
  if (action.type === "fullHouse") baseDamage = countValues[0] === 3 && countValues[1] === 2 ? action.damage : 0;
  if (action.type === "threeKind") baseDamage = maxRepeat >= 3 ? action.damage : 0;
  if (action.type === "fourKind") baseDamage = maxRepeat >= 4 ? action.damage : 0;
  if (action.type === "multicolor") baseDamage = countValues.length === 5 ? action.damage : 0;
  if (action.type === "yacht") baseDamage = maxRepeat === 5 ? action.damage : 0;

  const bonus = baseDamage > 0 && hasSpecialColorBonus(action.type, countMap, player?.specialColor) ? 7 : 0;
  return { damage: baseDamage + bonus, baseDamage, bonus, bonusColor: player?.specialColor };
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
  if (actionType === "multicolor") return specialCount === 1 && Object.keys(countMap).length === 5;
  return specialCount === 5;
}

function playCombatAnimation(actionKey, attackerIndex, defenderIndex, damage) {
  const action = actions[actionKey];
  const failedPower = action.type !== "repeat" && damage === 0;
  if (failedPower) {
    setTemporarySprite(attackerIndex, "damage");
    restartAnimation(fighters[attackerIndex], "magic-fail", spriteDuration);
    restartAnimation(fighters[attackerIndex], "fx-fail", spriteDuration);
    return;
  }

  const attackClass = action.type === "yacht" ? "attack-special" : action.type === "repeat" ? "attack-strike" : "attack-magic";
  const emojiSet = attackEmojis[players[attackerIndex].id] || attackEmojis.akira;
  setTemporarySprite(attackerIndex, "attack");
  restartAnimation(fighters[attackerIndex], attackClass, spriteDuration);
  launchAttackEmojis(emojiSet[actionKey], attackerIndex, defenderIndex);
  if (damage > 0) {
    setTemporarySprite(defenderIndex, "damage");
    restartAnimation(fighters[defenderIndex], "take-damage", spriteDuration);
    restartAnimation(fighters[defenderIndex], "fx-hit", spriteDuration);
  }
}

function restartAnimation(element, className, duration = 820) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), duration);
}

function setTemporarySprite(playerIndex, state, shouldRestore = true) {
  fighterImages[playerIndex].src = players[playerIndex].sprites[state];
  if (state === "win") restartAnimation(fighters[playerIndex], "fx-confetti", spriteDuration * 2);
  if (shouldRestore) {
    window.setTimeout(() => {
      if (!gameOver) fighterImages[playerIndex].src = players[playerIndex].sprites.idle;
    }, spriteDuration);
  }
}

function showKo(winnerIndex) {
  const winner = winnerIndex === null ? null : players[winnerIndex];
  winnerText.textContent = winner ? `${winner.name} venceu!` : "Empate!";
  winnerSprite.classList.toggle("hidden", !winner);
  if (winner) {
    winnerSprite.src = winner.sprites.win;
    winnerSprite.alt = `${winner.name} venceu`;
    winnerSprite.classList.toggle("mirror", shouldMirror(winnerIndex));
  }
  koOverlay.classList.add("show");
  koOverlay.setAttribute("aria-hidden", "false");
  koButton.textContent = mode === "arcade" && winnerIndex === 0 && arcade.index < arcade.opponents.length - 1 ? "Proxima luta" : "Voltar ao menu";
}

function getFinalResult() {
  if (players[0].hp === players[1].hp) return { message: "A luta terminou empatada.", winnerName: null, winnerIndex: null };
  const winnerIndex = players[0].hp > players[1].hp ? 0 : 1;
  return { message: `${players[winnerIndex].name} venceu por energia restante.`, winnerName: players[winnerIndex].name, winnerIndex };
}

function getCounts(source = dice) {
  return source.reduce((acc, color) => {
    if (color) acc[color] = (acc[color] || 0) + 1;
    return acc;
  }, {});
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function launchAttackEmojis(emoji, attackerIndex, defenderIndex) {
  const arena = document.querySelector(".arena");
  const arenaRect = arena.getBoundingClientRect();
  const attackerRect = fighterImages[attackerIndex].getBoundingClientRect();
  const defenderRect = fighterImages[defenderIndex].getBoundingClientRect();
  const startX = attackerRect.left + attackerRect.width / 2 - arenaRect.left;
  const startY = attackerRect.top + attackerRect.height * 0.32 - arenaRect.top;
  const endX = defenderRect.left + defenderRect.width / 2 - arenaRect.left;
  const endY = defenderRect.top + defenderRect.height * 0.32 - arenaRect.top;
  for (let index = 0; index < 10; index += 1) {
    const projectile = document.createElement("span");
    const spreadX = (Math.random() - 0.5) * 110;
    const spreadY = (Math.random() - 0.5) * 150;
    projectile.className = "attack-emoji";
    projectile.textContent = emoji;
    projectile.style.left = `${startX}px`;
    projectile.style.top = `${startY}px`;
    projectile.style.setProperty("--tx", `${endX - startX + spreadX}px`);
    projectile.style.setProperty("--ty", `${endY - startY + spreadY}px`);
    projectile.style.setProperty("--delay", `${index * 45}ms`);
    projectile.style.setProperty("--spin", `${attackerIndex === 0 ? 1 : -1}`);
    arena.appendChild(projectile);
    window.setTimeout(() => projectile.remove(), 1500);
  }
}

function render() {
  renderDice();
  renderPlayers();
  renderActions();
  renderRollButton();
  turnLabel.textContent = gameOver ? "Fim de luta" : `Turno de ${players[currentPlayer].name}`;
  rollsLabel.textContent = `Rolagens: ${rolls}/3`;
}

function renderDice() {
  diceButtons.forEach((button, index) => {
    const isRollingDie = button.classList.contains("rolling");
    button.className = "die";
    if (!dice[index]) {
      button.classList.add("empty");
      if (isRollingDie) button.classList.add("rolling");
      button.setAttribute("aria-label", `Dado ${index + 1} vazio`);
      return;
    }
    button.classList.add(dice[index]);
    button.classList.toggle("held", held[index]);
    button.classList.toggle("rolling", isRollingDie);
    button.setAttribute("aria-label", `Dado ${index + 1}: ${dice[index]}${held[index] ? ", separado" : ""}`);
  });
}

function renderPlayers() {
  players.forEach((player, index) => {
    document.querySelector(`#p${index + 1}Hp`).textContent = player.hp;
    document.querySelector(`#p${index + 1}Health`).style.width = `${player.hp}%`;
    fighters[index].classList.toggle("active", index === currentPlayer && !gameOver);
    fighters[index].classList.toggle("mirror", shouldMirror(index));
  });
}

function shouldMirror(playerIndex) {
  return playerIndex === 0;
}

function renderActions() {
  actionButtons.forEach((button) => {
    const actionKey = button.dataset.action;
    const action = actions[actionKey];
    const usedCount = players[currentPlayer] ? getUseCount(players[currentPlayer], actionKey) : 0;
    const isUsed = usedCount >= action.maxUses;
    const counter = button.querySelector(".use-counter");
    if (counter) counter.textContent = `${usedCount}/${action.maxUses}`;
    button.disabled = gameOver || rolls === 0 || isRolling || isUsed || isCpuTurn() || isOnlineOpponentTurn();
    button.classList.toggle("used", isUsed);
  });
}

function renderRollButton() {
  rollButton.disabled = gameOver || isRolling || rolls >= 3 || isCpuTurn() || isOnlineOpponentTurn();
  rollButton.classList.remove("roll-1", "roll-2", "roll-3");
  if (rolls > 0) rollButton.classList.add(`roll-${rolls}`);
  rollButton.textContent = isRolling ? "Rolando..." : `Rolar Dados ${rolls}/3`;
}

function showArcadeMap() {
  mapCounter.textContent = `Luta ${arcade.index + 1} de ${arcade.opponents.length}`;
  mapRoute.innerHTML = "";
  arcade.opponents.forEach((opponent, index) => {
    const passed = index < arcade.index || (gameOver && matchWinnerIndex === 0 && index === arcade.index);
    const current = index === arcade.index && !passed;
    const node = document.createElement("div");
    node.className = `route-fight${passed ? " done" : ""}${current ? " current" : ""}${opponent.id === "chefe" ? " boss" : ""}`;
    node.innerHTML = `<img src="${opponent.select}" alt=""><span>${opponent.name}</span>`;
    mapRoute.appendChild(node);
  });
  showScreen("map");
}

function showHome() {
  if (mode === "online") resetOnlineSession();
  mode = null;
  pendingP1 = null;
  versusDraw = null;
  pendingVs = null;
  showScreen("home");
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.add("hidden"));
  screens[name].classList.remove("hidden");
}

function getCharacter(id) {
  return characters.find((fighter) => fighter.id === id);
}

function getUseCount(player, actionKey) {
  return player.used[actionKey] || 0;
}

function hasActionsLeft(player) {
  return actionKeys.some((actionKey) => getUseCount(player, actionKey) < actions[actionKey].maxUses);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function preloadSprites() {
  characters.forEach((fighter) => {
    [fighter.select, ...Object.values(fighter.sprites)].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  });
}
