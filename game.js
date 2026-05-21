const colors = ["blue", "red", "yellow", "green", "pink"];

const players = [
  {
    name: "Marjorie",
    hp: 100,
    used: new Set(),
  },
  {
    name: "Akira",
    hp: 100,
    used: new Set(),
  },
];

const actions = {
  soco: {
    label: "Soco",
    type: "repeat",
    multiplier: 1,
  },
  chute: {
    label: "Chute",
    type: "repeat",
    multiplier: 2,
  },
  gancho: {
    label: "Gancho",
    type: "repeat",
    multiplier: 3,
  },
  voadora: {
    label: "Voadora",
    type: "repeat",
    multiplier: 4,
  },
  magia1: {
    label: "Magia 1",
    type: "fullHouse",
    damage: 15,
  },
  magia2: {
    label: "Magia 2",
    type: "fourKind",
    damage: 20,
  },
  magia3: {
    label: "Magia 3",
    type: "multicolor",
    damage: 25,
  },
  magia4: {
    label: "Magia 4",
    type: "choice",
    damage: 20,
  },
  especial: {
    label: "Poder Especial",
    type: "yacht",
    damage: 60,
  },
};

const actionKeys = Object.keys(actions);

let currentPlayer = 0;
let dice = Array(5).fill(null);
let held = Array(5).fill(false);
let rolls = 0;
let gameOver = false;

const rollButton = document.querySelector("#rollButton");
const diceButtons = [...document.querySelectorAll(".die")];
const actionButtons = [...document.querySelectorAll("[data-action]")];
const turnLabel = document.querySelector("#turnLabel");
const rollsLabel = document.querySelector("#rollsLabel");
const roundMessage = document.querySelector("#roundMessage");
const fighters = [...document.querySelectorAll(".fighter")];
const koOverlay = document.querySelector("#koOverlay");
const winnerText = document.querySelector("#winnerText");

rollButton.addEventListener("click", rollDice);
diceButtons.forEach((button, index) => {
  button.addEventListener("click", () => toggleHold(index));
});
actionButtons.forEach((button) => {
  button.addEventListener("click", () => useAction(button.dataset.action));
});

render();

function rollDice() {
  if (gameOver || rolls >= 3) return;

  dice = dice.map((value, index) => (held[index] && value ? value : randomColor()));
  rolls += 1;
  roundMessage.textContent =
    rolls === 3
      ? "Ultima rolagem. Escolha um golpe."
      : "Clique nos dados para separar/segurar cores antes de rolar de novo.";
  render();
}

function toggleHold(index) {
  if (!dice[index] || gameOver) return;
  held[index] = !held[index];
  renderDice();
}

function useAction(actionKey) {
  if (gameOver || rolls === 0) {
    roundMessage.textContent = "Role os dados antes de atacar.";
    return;
  }

  const player = players[currentPlayer];
  const opponentIndex = currentPlayer === 0 ? 1 : 0;
  const opponent = players[opponentIndex];

  if (player.used.has(actionKey)) return;

  const result = calculateDamage(actionKey);
  player.used.add(actionKey);
  opponent.hp = Math.max(0, opponent.hp - result.damage);
  playCombatAnimation(actionKey, currentPlayer, opponentIndex, result.damage);

  const hitText =
    result.damage > 0
      ? `${player.name} usou ${actions[actionKey].label} e causou ${result.damage} de dano.`
      : `${player.name} tentou ${actions[actionKey].label}, mas a combinacao nao fechou.`;

  if (opponent.hp <= 0) {
    gameOver = true;
    roundMessage.textContent = `${hitText} ${player.name} venceu!`;
    showKo(player.name);
  } else if (players.every((contestant) => contestant.used.size === actionKeys.length)) {
    gameOver = true;
    const finalResult = getFinalResult();
    roundMessage.textContent = `${hitText} ${finalResult.message}`;
    showKo(finalResult.winnerName);
  } else {
    currentPlayer = opponentIndex;
    dice = Array(5).fill(null);
    held = Array(5).fill(false);
    rolls = 0;
    roundMessage.textContent = `${hitText} Agora e a vez de ${players[currentPlayer].name}.`;
  }

  render();
}

function getFinalResult() {
  if (players[0].hp === players[1].hp) {
    return {
      message: "A luta terminou empatada.",
      winnerName: null,
    };
  }

  const winner = players[0].hp > players[1].hp ? players[0] : players[1];
  return {
    message: `${winner.name} venceu por energia restante.`,
    winnerName: winner.name,
  };
}

function calculateDamage(actionKey) {
  const action = actions[actionKey];
  const counts = getCounts();
  const countValues = Object.values(counts).sort((a, b) => b - a);
  const maxRepeat = countValues[0] || 0;

  if (action.type === "repeat") {
    return {
      damage: maxRepeat * action.multiplier,
    };
  }

  if (action.type === "fullHouse") {
    return {
      damage: countValues[0] === 3 && countValues[1] === 2 ? action.damage : 0,
    };
  }

  if (action.type === "fourKind") {
    return {
      damage: maxRepeat >= 4 ? action.damage : 0,
    };
  }

  if (action.type === "multicolor") {
    return {
      damage: countValues.length === 5 ? action.damage : 0,
    };
  }

  if (action.type === "choice") {
    return {
      damage: action.damage,
    };
  }

  return {
    damage: maxRepeat === 5 ? action.damage : 0,
  };
}

function playCombatAnimation(actionKey, attackerIndex, defenderIndex, damage) {
  const action = actions[actionKey];
  const attackClass =
    action.type === "yacht" ? "attack-special" : action.type === "repeat" ? "attack-strike" : "attack-magic";

  restartAnimation(fighters[attackerIndex], attackClass);

  if (damage > 0) {
    restartAnimation(fighters[defenderIndex], "take-damage");
  }
}

function restartAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), 820);
}

function showKo(winnerName) {
  winnerText.textContent = winnerName ? `${winnerName} venceu!` : "Empate!";
  koOverlay.classList.add("show");
  koOverlay.setAttribute("aria-hidden", "false");
}

function getCounts() {
  return dice.reduce((acc, color) => {
    if (!color) return acc;
    acc[color] = (acc[color] || 0) + 1;
    return acc;
  }, {});
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function render() {
  renderDice();
  renderPlayers();
  renderActions();
  rollButton.disabled = gameOver || rolls >= 3;
  turnLabel.textContent = gameOver ? "Fim de luta" : `Turno de ${players[currentPlayer].name}`;
  rollsLabel.textContent = `Rolagens: ${rolls}/3`;
}

function renderDice() {
  diceButtons.forEach((button, index) => {
    button.className = "die";
    if (!dice[index]) {
      button.classList.add("empty");
      button.setAttribute("aria-label", `Dado ${index + 1} vazio`);
      return;
    }

    button.classList.add(dice[index]);
    button.classList.toggle("held", held[index]);
    button.setAttribute(
      "aria-label",
      `Dado ${index + 1}: ${dice[index]}${held[index] ? ", separado" : ""}`,
    );
  });
}

function renderPlayers() {
  players.forEach((player, index) => {
    document.querySelector(`#p${index + 1}Hp`).textContent = player.hp;
    document.querySelector(`#p${index + 1}Health`).style.width = `${player.hp}%`;
    fighters[index].classList.toggle("active", index === currentPlayer && !gameOver);
  });
}

function renderActions() {
  actionButtons.forEach((button) => {
    const isUsed = players[currentPlayer].used.has(button.dataset.action);
    button.disabled = gameOver || rolls === 0 || isUsed;
    button.classList.toggle("used", isUsed);
  });
}
