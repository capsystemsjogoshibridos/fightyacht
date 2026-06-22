const colors = ["blue", "red", "yellow", "green", "pink"];
const spriteDuration = 2000;
const colorLabels = {
  blue: "Azul",
  red: "Vermelho",
  yellow: "Amarelo",
  green: "Verde",
  pink: "Rosa",
};
const cartridgeByColor = {
  blue: { label: "SNES", src: "assets/cart-snes.png" },
  red: { label: "32X", src: "assets/cart-32x.png" },
  yellow: { label: "N64", src: "assets/cart-n64.png" },
  green: { label: "PCE", src: "assets/cart-pce.png" },
  pink: { label: "ATARI", src: "assets/cart-atari.png" },
};
const battleStages = [
  "assets/cenario-arvores.jpg",
  "assets/cenario-estadio.jpg",
  "assets/cenario-estatua.jpg",
  "assets/cenario-estudios.jpg",
  "assets/cenario-pao-de-acucar.jpg",
  "assets/cenario-parque.jpg",
  "assets/cenario-predios.jpg",
  "assets/cenario-ruas.jpg",
];

const characters = [
  character("marjorie", "Marjorie Bros.", "assets/select-marjorie.png", "blue", {
    idle: "assets/marjorie-idle.webp",
    attack: "assets/marjorie-punch.webp",
    punch: "assets/marjorie-punch.webp",
    kick: "assets/marjorie-kick.webp",
    poder1: "assets/marjorie-poder-1.webp",
    poder2: "assets/marjorie-poder-2.webp",
    poder3: "assets/marjorie-poder-3.webp",
    poder4: "assets/marjorie-poder-4.webp",
    especial: "assets/marjorie-especial.webp",
    damage: "assets/marjorie-pancada.webp",
    win: "assets/marjorie-win.png",
  }),
  character("baby", "Baby Betinho", "assets/select-baby.png", "yellow", {
    idle: "assets/baby-idle.webp",
    attack: "assets/baby-punch.webp",
    punch: "assets/baby-punch.webp",
    kick: "assets/baby-kick.webp",
    poder1: "assets/baby-poder-1.webp",
    poder2: "assets/baby-poder-2.webp",
    poder3: "assets/baby-poder-3.webp",
    poder4: "assets/baby-poder-4.webp",
    especial: "assets/baby-especial.webp",
    damage: "assets/baby-pancada.webp",
    win: "assets/baby-win.png",
  }),
  character("marcelo", "Marcelo Kamikaze", "assets/select-marcelo.png", "green", {
    idle: "assets/marcelo-idle.webp",
    attack: "assets/marcelo-punch.webp",
    punch: "assets/marcelo-punch.webp",
    kick: "assets/marcelo-kick.webp",
    poder1: "assets/marcelo-poder-1.webp",
    poder2: "assets/marcelo-poder-2.webp",
    poder3: "assets/marcelo-poder-3.webp",
    poder4: "assets/marcelo-poder-4.webp",
    especial: "assets/marcelo-especial.webp",
    damage: "assets/marcelo-pancada.webp",
    win: "assets/marcelo-win.png",
  }),
  character("bill", "Bill Games", "assets/select-bill.png", "blue", {
    idle: "assets/bill-idle.webp",
    attack: "assets/bill-punch.webp",
    punch: "assets/bill-punch.webp",
    kick: "assets/bill-kick.webp",
    poder1: "assets/bill-poder-1.webp",
    poder2: "assets/bill-poder-2.webp",
    poder3: "assets/bill-poder-3.webp",
    poder4: "assets/bill-poder-4.webp",
    especial: "assets/bill-especial.webp",
    damage: "assets/bill-pancada.webp",
    win: "assets/bill-win.png",
  }),
  character("lord", "Lord Mathias", "assets/select-lord.png", "red", {
    idle: "assets/lord-idle.webp",
    attack: "assets/lord-punch.webp",
    punch: "assets/lord-punch.webp",
    kick: "assets/lord-kick.webp",
    poder1: "assets/lord-poder-1.webp",
    poder2: "assets/lord-poder-2.webp",
    poder3: "assets/lord-poder-3.webp",
    poder4: "assets/lord-poder-4.webp",
    especial: "assets/lord-especial.webp",
    damage: "assets/lord-pancada.webp",
    win: "assets/lord-win.png",
  }),
  character("chris", "Chris Combo", "assets/select-chris.png", "red", {
    idle: "assets/chris-idle.webp",
    attack: "assets/chris-punch.webp",
    punch: "assets/chris-punch.webp",
    kick: "assets/chris-kick.webp",
    poder1: "assets/chris-poder-1.webp",
    poder2: "assets/chris-poder-2.webp",
    poder3: "assets/chris-poder-3.webp",
    poder4: "assets/chris-poder-4.webp",
    especial: "assets/chris-especial.webp",
    damage: "assets/chris-pancada.webp",
    win: "assets/chris-win.png",
  }),
  character("akira", "Akira e Agora", "assets/select-akira.png", "green", {
    idle: "assets/akira-idle.webp",
    attack: "assets/akira-punch.webp",
    punch: "assets/akira-punch.webp",
    kick: "assets/akira-kick.webp",
    poder1: "assets/akira-poder-1.webp",
    poder2: "assets/akira-poder-2.webp",
    poder3: "assets/akira-poder-3.webp",
    poder4: "assets/akira-poder-4.webp",
    especial: "assets/akira-especial.webp",
    damage: "assets/akira-pancada.webp",
    win: "assets/akira-win.png",
  }),
  character("chefe", "O Chefe", "assets/select-chefe.png", "pink", {
    idle: "assets/chefe-idle.webp",
    attack: "assets/chefe-punch.webp",
    punch: "assets/chefe-punch.webp",
    kick: "assets/chefe-kick.webp",
    poder1: "assets/chefe-poder-1.webp",
    poder2: "assets/chefe-poder-2.webp",
    poder3: "assets/chefe-poder-3.webp",
    poder4: "assets/chefe-poder-4.webp",
    especial: "assets/chefe-especial.webp",
    damage: "assets/chefe-pancada.webp",
    win: "assets/chefe-win.png",
  }),
];

const arcadeEndings = {
  akira: {
    image: "assets/final-akira.jpg",
    text: "Nosso revisor nip\u00f4nico conseguiu sua promo\u00e7\u00e3o e colocou seu novo subordinado para analisar e corrigir todo o conte\u00fado das revistas. Akira viu que o Chefe foi o maior erro que ele j\u00e1 viu na vida.",
  },
  baby: {
    image: "assets/final-baby.jpg",
    text: "O brutamontes da SGP tomou o lugar do Chefe e colocou todo mundo para malhar dentro da reda\u00e7\u00e3o.",
  },
  bill: {
    image: "assets/final-bill.jpg",
    text: "Bill assumiu o cargo de Chefe, e ordenou seu novo lacaio para melhorar todos os computadores da reda\u00e7\u00e3o.",
  },
  chris: {
    image: "assets/final-chris.jpg",
    text: "Novata que tomou o lugar do Chefe, Chris n\u00e3o deixa seu novo empregado em paz com suas manobras radicais dentro da reda\u00e7\u00e3o.",
  },
  lord: {
    image: "assets/final-lord.jpg",
    text: "O novo esporte favorito do Chefe Lord Mathias \u00e9 justamente azucrinar o baixinho de cabelos roxos espetados.",
  },
  marcelo: {
    image: "assets/final-marcelo.jpg",
    text: "Marcelo conseguiu ocupar o lugar do Chefe e instalar um trono dourado dentro da reda\u00e7\u00e3o. Todos os dias ele cobra rever\u00eancias de seu novo servi\u00e7al.",
  },
  marjorie: {
    image: "assets/final-marjorie.jpg",
    text: "Al\u00e9m de musa dos gamers, Marjorie agora \u00e9 da alta c\u00fapula, e tornou a reda\u00e7\u00e3o um lugar muito mais humano e agrad\u00e1vel de se trabalhar. Ela \u00e9 amada por todos.",
  },
};

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
  gancho: { label: "Soc\u00e3o", type: "repeat", maxDamage: 10, maxUses: 2 },
  voadora: { label: "Chut\u00e3o", type: "repeat", maxDamage: 15, maxUses: 2 },
  magia1: { label: "Evoca\u00e7\u00e3o", type: "fullHouse", damage: 20, maxUses: 1 },
  magia2: { label: "Poder", type: "threeKind", damage: 23, maxUses: 1 },
  magia3: { label: "Feiti\u00e7o", type: "multicolor", damage: 25, maxUses: 1 },
  magia4: { label: "Magia", type: "fourKind", damage: 27, maxUses: 1 },
  especial: { label: "Poder Especial", type: "yacht", damage: 40, maxUses: 1 },
};

const actionKeys = Object.keys(actions);
const turnDuration = 20;
const screens = {
  splash: document.querySelector("#splashScreen"),
  legal: document.querySelector("#legalScreen"),
  home: document.querySelector("#homeScreen"),
  tutorial: document.querySelector("#tutorialScreen"),
  select: document.querySelector("#selectScreen"),
  specialTest: document.querySelector("#specialTestScreen"),
  soon: document.querySelector("#soonScreen"),
  draw: document.querySelector("#drawScreen"),
  online: document.querySelector("#onlineScreen"),
  map: document.querySelector("#mapScreen"),
  ending: document.querySelector("#endingScreen"),
  vs: document.querySelector("#vsScreen"),
  game: document.querySelector("#gameScreen"),
};

let players = [];
let spriteStates = ["idle", "idle"];
let currentPlayer = 0;
let dice = Array(5).fill(null);
let held = Array(5).fill(false);
let rolls = 0;
let gameOver = false;
let isRolling = false;
let isAnimating = false;
let matchWinnerIndex = null;
let turnTimerId = null;
let turnTimerStartedAt = 0;
let turnToken = 0;
let mode = null;
let selectStep = null;
let pendingP1 = null;
let splashTimer = null;
let legalTimer = null;
let tutorialStep = 0;
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
const specialTestGrid = document.querySelector("#specialTestGrid");
const specialTestSubtitle = document.querySelector("#specialTestSubtitle");
const arcadeMap = document.querySelector("#arcadeMap");
const mapCounter = document.querySelector("#mapCounter");
const mapRoute = document.querySelector("#mapRoute");
const battleButton = document.querySelector("#battleButton");
const endingTitle = document.querySelector("#endingTitle");
const endingImage = document.querySelector("#endingImage");
const endingText = document.querySelector("#endingText");
const endingButton = document.querySelector("#endingButton");
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
const diceButtons = [...document.querySelectorAll("#gameScreen .die")];
const actionButtons = [...document.querySelectorAll("#gameScreen [data-action]")];
const turnLabel = document.querySelector("#turnLabel");
const turnTimer = document.querySelector("#turnTimer");
const turnTimerValue = document.querySelector("#turnTimerValue");
const rollsLabel = document.querySelector("#rollsLabel");
const roundMessage = document.querySelector("#roundMessage");
const fighters = [...document.querySelectorAll(".fighter")];
const fighterImages = fighters.map((fighter) => fighter.querySelector(".sprite-stage img"));
const fighterNames = fighters.map((fighter) => fighter.querySelector(".fighter-name"));
const fighterCartridges = fighters.map((fighter) => fighter.querySelector(".fighter-cartridge"));
const arena = document.querySelector(".arena");
const koOverlay = document.querySelector("#koOverlay");
const koText = document.querySelector(".ko-text");
const winnerSprite = document.querySelector("#winnerSprite");
const winnerText = document.querySelector("#winnerText");
const koButton = document.querySelector("#koButton");
const specialOverlay = document.querySelector("#specialOverlay");
const specialChallengeImage = document.querySelector("#specialChallengeImage");
const specialChallengeTitle = document.querySelector("#specialChallengeTitle");
const specialChallengeText = document.querySelector("#specialChallengeText");
const specialMeterFill = document.querySelector("#specialMeterFill");
const specialTimerText = document.querySelector("#specialTimerText");
const specialPowerText = document.querySelector("#specialPowerText");
const specialPowerButton = document.querySelector("#specialPowerButton");
const tutorialStepLabel = document.querySelector("#tutorialStepLabel");
const tutorialText = document.querySelector("#tutorialText");
const tutorialCoachSprite = document.querySelector("#tutorialCoachSprite");
const tutorialRollButton = document.querySelector("#tutorialRollButton");
const tutorialDiceButtons = [...document.querySelectorAll(".tutorial-cart")];
const tutorialActionButtons = [...document.querySelectorAll("[data-tutorial-action]")];
const tutorialPrevButton = document.querySelector("#tutorialPrevButton");
const tutorialNextButton = document.querySelector("#tutorialNextButton");
const tutorialDots = document.querySelector("#tutorialDots");

const tutorialSteps = [
  {
    text: "Primeiro, voce assopra os cartuchos. Cada turno permite ate 3 assopradas, e os cartuchos aparecem um por um.",
    dice: [null, null, null, null, null],
    rollText: "Assoprar Cartuchos 0/3",
    focus: "roll",
    sprite: "idle",
  },
  {
    text: "Depois da primeira assoprada, segure os cartuchos que parecem bons. Aqui, tres rosas foram separados para o exemplo do Chefe.",
    dice: ["pink", "pink", "pink", "blue", "yellow"],
    held: [0, 1, 2],
    rollText: "Assoprar Cartuchos 1/3",
    focus: "dice",
    sprite: "idle",
  },
  {
    text: "SOCO: use quando tiver cores repetidas. Neste exemplo ha 2 cartuchos rosa; o dano vem da maior repeticao.",
    dice: ["pink", "pink", "blue", "green", "yellow"],
    held: [0, 1],
    rollText: "Assoprar Cartuchos 1/3",
    focus: "basic",
    actions: ["soco"],
    sprite: "punch",
  },
  {
    text: "CHUTE: funciona pela mesma regra, mas tem teto de dano maior. Aqui, 3 verdes sao a melhor repeticao.",
    dice: ["green", "green", "green", "red", "yellow"],
    held: [0, 1, 2],
    rollText: "Assoprar Cartuchos 2/3",
    focus: "basic",
    actions: ["chute"],
    sprite: "kick",
  },
  {
    text: "SOCAO: procure 4 cores iguais para bater mais forte. Como O Chefe usa rosa, este exemplo tambem teria bonus de +7.",
    dice: ["pink", "pink", "pink", "pink", "red"],
    held: [0, 1, 2, 3],
    rollText: "Assoprar Cartuchos 2/3",
    focus: "basic",
    actions: ["gancho"],
    sprite: "punch",
    glow: true,
  },
  {
    text: "CHUTAO: com 5 cores iguais, voce chega no melhor resultado dos golpes normais. Cada golpe normal pode ser usado 2 vezes.",
    dice: ["red", "red", "red", "red", "red"],
    held: [0, 1, 2, 3, 4],
    rollText: "Assoprar Cartuchos 3/3",
    focus: "basic",
    actions: ["voadora"],
    sprite: "kick",
    glow: true,
  },
  {
    text: "EVOCAÇÃO: precisa de Full House, ou seja, 3 cartuchos de uma cor e 2 cartuchos de outra cor.",
    dice: ["pink", "pink", "pink", "blue", "blue"],
    held: [0, 1, 2, 3, 4],
    rollText: "Assoprar Cartuchos 2/3",
    focus: "magic",
    actions: ["magia1"],
    sprite: "poder1",
  },
  {
    text: "PODER: precisa de pelo menos 3 cores iguais. Aqui os 3 amarelos ja liberam o botao.",
    dice: ["yellow", "yellow", "yellow", "green", "red"],
    held: [0, 1, 2],
    rollText: "Assoprar Cartuchos 2/3",
    focus: "magic",
    actions: ["magia2"],
    sprite: "poder2",
  },
  {
    text: "FEITIÇO: precisa das 5 cores diferentes. Um cartucho de cada cor fecha a combinacao multicolor.",
    dice: ["blue", "green", "yellow", "pink", "red"],
    held: [0, 1, 2, 3, 4],
    rollText: "Assoprar Cartuchos 3/3",
    focus: "magic",
    actions: ["magia3"],
    sprite: "poder3",
  },
  {
    text: "MAGIA: precisa de pelo menos 4 cores iguais. Neste exemplo, 4 rosas ativam a Magia e ainda combinam com a cor do Chefe.",
    dice: ["pink", "pink", "pink", "pink", "red"],
    held: [0, 1, 2, 3],
    rollText: "Assoprar Cartuchos 2/3",
    focus: "magic",
    actions: ["magia4"],
    sprite: "poder4",
  },
  {
    text: "ESPECIAL: precisa de 5 cores iguais. Se forem da cor especial do lutador, o dano recebe o bonus de +7.",
    dice: ["pink", "pink", "pink", "pink", "pink"],
    held: [0, 1, 2, 3, 4],
    rollText: "Assoprar Cartuchos 3/3",
    focus: "damage",
    actions: ["especial"],
    sprite: "especial",
    glow: true,
  },
  {
    text: "Falha de magia: se voce apertar uma magia sem a combinacao, ela explode no atacante, nao causa dano e mesmo assim gasta o botao.",
    dice: ["blue", "blue", "green", "yellow", "pink"],
    held: [0, 1],
    rollText: "Assoprar Cartuchos 2/3",
    focus: "magic",
    actions: ["magia4", "especial"],
    sprite: "damage",
  },
  {
    text: "Quando o ataque e valido, o sprite muda, o alvo recebe a pancada e a vida desce. Depois o turno passa para o adversario.",
    dice: ["pink", "pink", "pink", "blue", "yellow"],
    held: [0, 1, 2],
    rollText: "Assoprar Cartuchos 3/3",
    focus: "damage",
    actions: ["soco"],
    sprite: "punch",
  },
  {
    text: "Vence quem derrubar o adversario ou quem ainda tiver botoes quando o outro nao puder mais atacar. Agora voce esta pronto para a batalha.",
    dice: ["blue", "green", "yellow", "pink", "red"],
    held: [],
    rollText: "Tutorial completo",
    focus: "finish",
    sprite: "idle",
  },
];

const tutorialStepTexts = [
  "INÍCIO: primeiro, você assopra os cartuchos. Cada turno permite até 3 assopradas, e os cartuchos aparecem um por um.",
  "CONTINUIDADE: depois da primeira assoprada, segure os cartuchos que parecem bons. Aqui, três da cor ROSA (ATARI) foram separados para o exemplo do Chefe.",
  "SOCO: use quando tiver cores repetidas. Neste exemplo há 2 cartuchos ROSAS (ATARI); o dano vem da maior repetição. Esse golpe é normal, e pode ser usado até 2 vezes.",
  "CHUTE: use quando tiver cores repetidas. Neste exemplo há 3 cartuchos VERDES (PC ENGINE); quanto mais cores iguais, mais dano. Esse golpe é normal, e pode ser usado até 2 vezes.",
  "SOCÃO: use quando tiver cores repetidas. Neste exemplo há 4 cartuchos ROSAS (ATARI); quanto mais cores iguais, mais danos. Como o cartucho do Chefe é o ROSA (ATARI), neste exemplo também teria bônus de +7 de dano. Esse golpe é normal, e pode ser usado até 2 vezes.",
  "CHUTÃO: use quando tiver cores repetidas. Neste exemplo há 5 cartuchos VERMELHOS (32X); lembrando que, quanto mais cores iguais, mais danos. Esse golpe é normal, e pode ser usado até 2 vezes.",
  "EVOCAÇÃO: para ativá-lo, precisa de 3 cartuchos de uma cor e 2 cartuchos de outra cor. Este é um golpe de energia, e só pode ser usado uma vez.",
  "PODER: precisa de pelo menos 3 cores iguais. Neste exemplo, os 3 AMARELOS (NINTENDO 64) já liberam o botão. Este é um golpe de energia, e só pode ser usado uma vez.",
  "FEITIÇO: precisa das 5 cores diferentes. Um cartucho de cada cor fecha a combinação multicolor. Este é um golpe de energia, e só pode ser usado uma vez.",
  "MAGIA: precisa de pelo menos 4 cores iguais. Neste exemplo, 4 ROSAS (ATARI) ativam a Magia e ainda combinam com o cartucho especial do Chefe, acrescentando danos extras. Este é um golpe de energia, e só pode ser usado uma vez.",
  "ESPECIAL: precisa de 5 cores iguais. É devastador, basicamente o golpe que mais causa danos. E se forem do cartucho especial do lutador, acrescenta +7 de dano. Ao ativá-lo, aparece um mini game específico para cada personagem, e pode acrescentar mais danos. Você pode testar no botão \"Teste de Especiais\", na tela inicial.",
  "FALHA DE GOLPE: se você apertar um botão sem combinação, ela explode no atacante. Não causa danos mas inutiliza aquele golpe específico.",
  "Quando o ataque e válido, você pode ver na caixa de texto um resumo do que aconteceu. Depois, o turno passa para o adversário.",
  "FIM: O lutador que esgotar sua barra de energia é derrotado, e o rival vence. Agora, você está pronto para a batalha!",
];

tutorialSteps.forEach((step, index) => {
  step.text = tutorialStepTexts[index] || step.text;
});

screens.splash.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  finishSplash();
});
screens.legal.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  finishLegal();
});
document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => chooseMode(button.dataset.mode));
});
document.querySelectorAll("[data-back]").forEach((button) => button.addEventListener("click", showHome));
rollButton.addEventListener("click", () => rollDice());
koButton.addEventListener("click", continueAfterKo);
battleButton.addEventListener("click", startCurrentArcadeBattle);
endingButton.addEventListener("click", showHome);
drawBattleButton.addEventListener("click", startDrawnVersusBattle);
vsBattleButton.addEventListener("click", startPendingVsBattle);
onlineBackButton.addEventListener("click", leaveOnlineRoom);
tutorialPrevButton.addEventListener("click", () => changeTutorialStep(-1));
tutorialNextButton.addEventListener("click", () => changeTutorialStep(1));
tutorialRollButton.addEventListener("click", () => {
  if (tutorialStep === 0) changeTutorialStep(1);
});
diceButtons.forEach((button, index) => button.addEventListener("click", () => toggleHold(index)));
tutorialDiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("empty")) button.classList.toggle("held");
  });
});
actionButtons.forEach((button) => button.addEventListener("click", () => useAction(button.dataset.action)));
tutorialActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("tutorial-tapped");
    window.setTimeout(() => button.classList.remove("tutorial-tapped"), 260);
  });
});

preloadSprites();
showScreen("splash");
splashTimer = window.setTimeout(finishSplash, 5000);

function character(id, name, select, specialColor, sprites) {
  return { id, name, select, specialColor, sprites, specialScreen: `assets/${id}-especial-screen.png` };
}

function chooseMode(nextMode) {
  mode = nextMode;
  if (mode === "tutorial") {
    startTutorial();
    return;
  }
  if (mode === "specialTest") {
    showSpecialTest();
    return;
  }
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

function startTutorial() {
  tutorialStep = 0;
  renderTutorial();
  showScreen("tutorial");
}

function changeTutorialStep(delta) {
  if (tutorialStep === tutorialSteps.length - 1 && delta > 0) {
    showHome();
    return;
  }
  tutorialStep = Math.max(0, Math.min(tutorialSteps.length - 1, tutorialStep + delta));
  renderTutorial();
}

function renderTutorial() {
  const step = tutorialSteps[tutorialStep];
  const chefe = getCharacter("chefe");
  tutorialStepLabel.textContent = `Passo ${tutorialStep + 1} de ${tutorialSteps.length}`;
  tutorialText.textContent = step.text;
  tutorialRollButton.textContent = step.rollText;
  tutorialCoachSprite.src = chefe.sprites[step.sprite] || chefe.sprites.idle;
  tutorialCoachSprite.alt = chefe.name;
  tutorialCoachSprite.classList.toggle("tutorial-sprite-glow", Boolean(step.glow));
  screens.tutorial.dataset.focus = step.focus;

  tutorialDiceButtons.forEach((button, index) => {
    const color = step.dice[index];
    button.className = "tutorial-cart";
    if (!color) {
      button.classList.add("empty");
    } else {
      button.classList.add(color);
    }
    button.classList.toggle("held", (step.held || []).includes(index));
    button.setAttribute("aria-label", color ? `Cartucho ${colorLabels[color]}` : `Cartucho vazio`);
  });

  tutorialActionButtons.forEach((button) => {
    const isActive = (step.actions || []).includes(button.dataset.tutorialAction);
    button.classList.toggle("tutorial-highlight", isActive);
  });

  tutorialPrevButton.disabled = tutorialStep === 0;
  tutorialNextButton.textContent = tutorialStep === tutorialSteps.length - 1 ? "Concluir" : "Proximo";
  tutorialDots.innerHTML = "";
  tutorialSteps.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = index === tutorialStep ? "active" : "";
    tutorialDots.appendChild(dot);
  });

}

function showSpecialTest() {
  renderSpecialTestGrid();
  showScreen("specialTest");
}

function renderSpecialTestGrid() {
  specialTestSubtitle.textContent = "Escolha um lutador para abrir o minigame do Especial.";
  specialTestGrid.innerHTML = "";

  characters.forEach((fighter) => {
    const cartridge = cartridgeByColor[fighter.specialColor];
    const button = document.createElement("button");
    button.className = "character-card";
    button.type = "button";
    button.innerHTML = `
      <img class="character-portrait" src="${fighter.select}" alt="${fighter.name}">
      <span>${fighter.name}</span>
      <small class="character-cartridge">CARTUCHO: <img src="${cartridge.src}" alt="${cartridge.label}"></small>
      <small>${["baby", "lord", "marjorie", "bill", "chefe", "marcelo", "akira", "chris"].includes(fighter.id) ? "TESTAR ESPECIAL" : "EM BREVE"}</small>
    `;
    if (!["baby", "lord", "marjorie", "bill", "chefe", "marcelo", "akira", "chris"].includes(fighter.id)) button.disabled = true;
    button.addEventListener("click", () => runSpecialTest(fighter));
    specialTestGrid.appendChild(button);
  });
}

async function runSpecialTest(fighter) {
  specialTestSubtitle.textContent = `${fighter.name}: teste em andamento...`;
  const bonus = await runSpecialMiniGame(fighter);
  specialTestSubtitle.textContent = bonus
    ? `${fighter.name}: bônus conquistado! +${bonus} de dano.`
    : `${fighter.name}: sem bônus de especial. Clique no lutador para testar novamente.`;
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
    const cartridge = cartridgeByColor[fighter.specialColor];
    const button = document.createElement("button");
    button.className = "character-card";
    button.type = "button";
    button.innerHTML = `
      <img class="character-portrait" src="${fighter.select}" alt="${fighter.name}">
      <span>${fighter.name}</span>
      <small class="character-cartridge">CARTUCHO: <img src="${cartridge.src}" alt="${cartridge.label}"></small>
    `;
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
      await useAction(event.actionKey, true, event);
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

function startMatch(leftCharacter, rightCharacter, starter = 0, message = "Assopre os cartuchos para iniciar o ataque.") {
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
  updateFighterCartridge(0);
  updateFighterCartridge(1);
  setRandomBattleStage();
  fighterImages[0].src = players[0].sprites.idle;
  fighterImages[1].src = players[1].sprites.idle;
  spriteStates = ["idle", "idle"];
  roundMessage.textContent = message;
  showScreen("game");
  render();
  beginTurn();
  maybeCpuTurn();
}

function makePlayer(fighter) {
  return { ...fighter, hp: 100, used: {} };
}

function setRandomBattleStage() {
  const stage = battleStages[Math.floor(Math.random() * battleStages.length)];
  arena.style.setProperty("--battle-stage", `url("${stage}")`);
}

function shouldUseTurnTimer() {
  return mode !== "online" && players.length === 2 && !gameOver;
}

function beginTurn() {
  turnToken += 1;
  startTurnTimer();
}

function startTurnTimer() {
  stopTurnTimer();
  if (!shouldUseTurnTimer()) {
    turnTimer.classList.add("hidden");
    return;
  }

  turnTimerStartedAt = performance.now();
  turnTimer.classList.remove("hidden");
  updateTurnTimer();
  turnTimerId = window.setInterval(updateTurnTimer, 120);
}

function stopTurnTimer() {
  if (turnTimerId) {
    window.clearInterval(turnTimerId);
    turnTimerId = null;
  }
}

function hideTurnTimer() {
  stopTurnTimer();
  turnTimer.classList.add("hidden");
}

function updateTurnTimer() {
  if (!shouldUseTurnTimer()) {
    hideTurnTimer();
    return;
  }

  const elapsed = (performance.now() - turnTimerStartedAt) / 1000;
  const remaining = Math.max(0, turnDuration - elapsed);
  const progress = (remaining / turnDuration) * 100;
  turnTimer.style.setProperty("--timer-progress", `${progress}%`);
  turnTimerValue.textContent = Math.ceil(remaining).toString();
  turnTimer.classList.toggle("timer-green", remaining > 10);
  turnTimer.classList.toggle("timer-yellow", remaining <= 10 && remaining > 5);
  turnTimer.classList.toggle("timer-red", remaining <= 5);

  if (remaining <= 0) passTurnByTimeout();
}

function clearRollingState() {
  isRolling = false;
  diceButtons.forEach((button) => button.classList.remove("rolling"));
}

function passTurnByTimeout() {
  if (!shouldUseTurnTimer() || isAnimating) return;
  stopTurnTimer();

  const timedOutPlayer = players[currentPlayer];
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  dice = Array(5).fill(null);
  held = Array(5).fill(false);
  rolls = 0;
  clearRollingState();
  roundMessage.textContent = `${timedOutPlayer.name} ficou sem tempo. Agora e a vez de ${players[currentPlayer].name}.`;
  render();
  beginTurn();
  maybeCpuTurn();
}

async function rollDice(syncedDice = null) {
  if (mode === "online" && !syncedDice) {
    requestOnlineCommand("roll");
    return;
  }
  if (gameOver || isRolling || rolls >= 3) return;
  const rollingToken = turnToken;
  isRolling = true;
  rollButton.disabled = true;
  renderActions();

  const nextDice = dice.map((value, index) => (held[index] ? value : null));
  for (let index = 0; index < diceButtons.length; index += 1) {
    if (held[index] && nextDice[index]) continue;
    diceButtons[index].classList.add("rolling");
    await wait(110);
    if (rollingToken !== turnToken || gameOver) {
      clearRollingState();
      render();
      return;
    }
    nextDice[index] = syncedDice ? syncedDice[index] : randomColor();
    dice = [...nextDice];
    renderDice();
    diceButtons[index].classList.add("rolling");
    await wait(210);
    if (rollingToken !== turnToken || gameOver) {
      clearRollingState();
      render();
      return;
    }
    diceButtons[index].classList.remove("rolling");
  }

  rolls += 1;
  clearRollingState();
  roundMessage.textContent =
    rolls === 3 ? "Ultima assoprada. Escolha um golpe." : "Clique nos cartuchos para separar/segurar cores antes de assoprar de novo.";
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

function runSpecialMiniGame(player, isTutorial = false) {
  if (player?.id === "marjorie") return runPickCartridgeSpecialMiniGame(player, isTutorial);
  if (player?.id === "bill") return runAimSpecialMiniGame(player, isTutorial);
  if (player?.id === "chefe") return runNameCartridgeSpecialMiniGame(player, isTutorial);
  if (player?.id === "lord") return runTimingSpecialMiniGame(player, isTutorial);
  if (player?.id === "marcelo") return runRouletteSpecialMiniGame(player, isTutorial);
  if (player?.id === "akira") return runCleanCartridgeSpecialMiniGame(player, isTutorial);
  if (player?.id === "chris") return runColorHeroSpecialMiniGame(player, isTutorial);
  return runMashSpecialMiniGame(player, isTutorial);
}

function runMashSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const duration = 5000;
    const step = isTutorial ? 9 : 8;
    const drainPerSecond = isTutorial ? 18 : 22;
    let power = 0;
    let finished = false;
    const startedAt = performance.now();
    let lastTickAt = startedAt;
    const titleName = player?.name || "Especial";

    specialChallengeImage.src = player?.specialScreen || "assets/chefe-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = "Aperte POWER o mais rapido possivel!";
    specialPowerButton.textContent = "POWER";
    specialPowerButton.disabled = false;
    resetSpecialMeterMode();
    updateSpecialChallenge(0, duration);
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(timerId);
      specialPowerButton.removeEventListener("pointerdown", pressPower);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Bonus de especial: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resolve(bonus);
      }, 720);
    };

    const pressPower = (event) => {
      event.preventDefault();
      power = Math.min(100, power + step);
      updateSpecialChallenge(power, Math.max(0, duration - (performance.now() - startedAt)));
      if (power >= 100) finish(3);
    };

    const timerId = window.setInterval(() => {
      const now = performance.now();
      const elapsed = Math.max(0, now - lastTickAt);
      lastTickAt = now;
      power = Math.max(0, power - (drainPerSecond * elapsed) / 1000);
      const remaining = Math.max(0, duration - (performance.now() - startedAt));
      updateSpecialChallenge(power, remaining);
      if (remaining <= 0) finish(0);
    }, 60);

    specialPowerButton.addEventListener("pointerdown", pressPower);
  });
}

function runTimingSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const duration = 5000;
    const zoneStart = isTutorial ? 39 : 42;
    const zoneEnd = isTutorial ? 61 : 58;
    const cycleMs = isTutorial ? 1050 : 880;
    let markerPosition = 0;
    let finished = false;
    const startedAt = performance.now();
    const titleName = player?.name || "Lord Mathias";
    const meter = specialMeterFill.parentElement;
    const marker = document.createElement("span");

    resetSpecialMeterMode();
    meter.classList.add("timing-mode");
    marker.className = "timing-marker";
    meter.appendChild(marker);
    specialMeterFill.style.left = `${zoneStart}%`;
    specialMeterFill.style.width = `${zoneEnd - zoneStart}%`;
    specialChallengeImage.src = player?.specialScreen || "assets/lord-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = "Aperte POWER quando o marcador passar na zona verde!";
    specialPowerButton.textContent = "POWER";
    specialPowerButton.disabled = false;
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(timerId);
      specialPowerButton.removeEventListener("pointerdown", pressPower);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Timing perfeito: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resetSpecialMeterMode();
        resolve(bonus);
      }, 720);
    };

    const pressPower = (event) => {
      event.preventDefault();
      finish(markerPosition >= zoneStart && markerPosition <= zoneEnd ? 3 : 0);
    };

    const timerId = window.setInterval(() => {
      const now = performance.now();
      const elapsed = now - startedAt;
      const remaining = Math.max(0, duration - elapsed);
      const phase = (elapsed % cycleMs) / cycleMs;
      markerPosition = phase <= 0.5 ? phase * 200 : (1 - phase) * 200;
      marker.style.left = `${markerPosition}%`;
      specialTimerText.textContent = `${(remaining / 1000).toFixed(1)}s`;
      specialPowerText.textContent = `${Math.round(markerPosition)}%`;
      if (remaining <= 0) finish(0);
    }, 30);

    specialPowerButton.addEventListener("pointerdown", pressPower);
  });
}

function runPickCartridgeSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const duration = 5000;
    const targetColor = player?.specialColor || "blue";
    const targetHits = 1;
    const spawnMs = isTutorial ? 540 : 450;
    let hits = 0;
    let finished = false;
    const startedAt = performance.now();
    const titleName = player?.name || "Marjorie Bros.";
    const panel = specialPowerButton.parentElement;
    const hunt = document.createElement("div");
    const target = cartridgeByColor[targetColor];

    resetSpecialMeterMode();
    hunt.className = "special-cartridge-hunt";
    panel.insertBefore(hunt, specialPowerButton);
    specialPowerButton.textContent = "ACHE O AZUL";
    specialPowerButton.disabled = true;
    specialPowerButton.classList.add("special-power-muted");
    specialChallengeImage.src = player?.specialScreen || "assets/marjorie-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = `Toque apenas nos cartuchos ${colorLabels[targetColor].toUpperCase()} (${target.label})!`;
    updateSpecialChallenge(0, duration);
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(spawnTimerId);
      window.clearInterval(timerId);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Cartucho certo: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resetSpecialMeterMode();
        resolve(bonus);
      }, 720);
    };

    const spawnCartridge = () => {
      if (finished) return;
      hunt.innerHTML = "";
      const color = Math.random() < 0.38 ? targetColor : colors.filter((item) => item !== targetColor)[Math.floor(Math.random() * (colors.length - 1))];
      const cartridge = cartridgeByColor[color];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hunt-cartridge";
      button.style.setProperty("--hunt-column", Math.floor(Math.random() * 3) + 1);
      button.style.setProperty("--hunt-row", Math.floor(Math.random() * 3) + 1);
      button.innerHTML = `<img src="${cartridge.src}" alt="${cartridge.label}">`;
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        if (color !== targetColor) {
          finish(0);
          return;
        }
        hits += 1;
        specialPowerButton.textContent = "AZUL!";
        updateSpecialChallenge((hits / targetHits) * 100, Math.max(0, duration - (performance.now() - startedAt)));
        if (hits >= targetHits) finish(3);
        else spawnCartridge();
      });
      hunt.appendChild(button);
    };

    const timerId = window.setInterval(() => {
      const remaining = Math.max(0, duration - (performance.now() - startedAt));
      specialTimerText.textContent = `${(remaining / 1000).toFixed(1)}s`;
      if (remaining <= 0) finish(0);
    }, 60);
    const spawnTimerId = window.setInterval(spawnCartridge, spawnMs);
    spawnCartridge();
  });
}

function runCleanCartridgeSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const totalCartridges = 15;
    const duration = isTutorial ? 8500 : 7000;
    const options = Array.from(
      { length: totalCartridges },
      () => colors[Math.floor(Math.random() * colors.length)],
    );
    let cleared = 0;
    let finished = false;
    const startedAt = performance.now();
    const titleName = player?.name || "Akira e Agora";
    const panel = specialPowerButton.parentElement;
    const grid = document.createElement("div");

    resetSpecialMeterMode();
    grid.className = "special-clean-grid";
    panel.insertBefore(grid, specialPowerButton);
    specialChallengeImage.src = player?.specialScreen || "assets/akira-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = "SUPER LIMPA: elimine todos os cartuchos antes do tempo acabar!";
    specialPowerButton.textContent = "LIMPE A TELA";
    specialPowerButton.disabled = true;
    specialPowerButton.classList.add("special-power-muted");
    updateSpecialChallenge(0, duration);
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(timerId);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Tela limpa: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resetSpecialMeterMode();
        resolve(bonus);
      }, 720);
    };

    options.forEach((color) => {
      const cartridge = cartridgeByColor[color];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "clean-cartridge";
      button.innerHTML = `<img src="${cartridge.src}" alt="${cartridge.label}">`;
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        if (finished || button.disabled) return;
        button.disabled = true;
        button.classList.add("is-cleared");
        cleared += 1;
        updateSpecialChallenge((cleared / totalCartridges) * 100, Math.max(0, duration - (performance.now() - startedAt)));
        window.setTimeout(() => button.remove(), 120);
        if (cleared === totalCartridges) finish(3);
      });
      grid.appendChild(button);
    });

    const timerId = window.setInterval(() => {
      const remaining = Math.max(0, duration - (performance.now() - startedAt));
      specialTimerText.textContent = `${(remaining / 1000).toFixed(1)}s`;
      if (remaining <= 0) finish(0);
    }, 60);
  });
}

function runAimSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const duration = 5000;
    const centerX = 50;
    const centerY = 47;
    const hitRadius = isTutorial ? 11 : 9;
    const cycleMs = isTutorial ? 1600 : 1350;
    let aimX = centerX;
    let aimY = centerY;
    let finished = false;
    const startedAt = performance.now();
    const titleName = player?.name || "Bill Games";
    const challenge = specialChallengeImage.parentElement;
    const target = document.createElement("span");
    const centerZone = document.createElement("span");

    resetSpecialMeterMode();
    challenge.classList.add("aim-mode");
    target.className = "aim-target";
    centerZone.className = "aim-center-zone";
    challenge.appendChild(centerZone);
    challenge.appendChild(target);
    specialChallengeImage.src = player?.specialScreen || "assets/bill-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = "Aperte POWER quando a mira estiver no centro!";
    specialPowerButton.textContent = "POWER";
    specialPowerButton.disabled = false;
    updateSpecialChallenge(0, duration);
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(timerId);
      specialPowerButton.removeEventListener("pointerdown", pressPower);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Mira certeira: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resetSpecialMeterMode();
        resolve(bonus);
      }, 720);
    };

    const pressPower = (event) => {
      event.preventDefault();
      const distance = Math.hypot(aimX - centerX, aimY - centerY);
      finish(distance <= hitRadius ? 3 : 0);
    };

    const timerId = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, duration - elapsed);
      const angle = ((elapsed % cycleMs) / cycleMs) * Math.PI * 2;
      aimX = centerX + Math.sin(angle) * 34;
      aimY = centerY + Math.sin(angle * 2) * 22;
      target.style.left = `${aimX}%`;
      target.style.top = `${aimY}%`;
      const distance = Math.hypot(aimX - centerX, aimY - centerY);
      const accuracy = Math.max(0, 100 - (distance / hitRadius) * 100);
      specialPowerText.textContent = `${Math.round(accuracy)}%`;
      specialTimerText.textContent = `${(remaining / 1000).toFixed(1)}s`;
      if (remaining <= 0) finish(0);
    }, 30);

    specialPowerButton.addEventListener("pointerdown", pressPower);
  });
}

function runNameCartridgeSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const duration = 5000;
    const cartridgeNames = {
      blue: "SNES",
      red: "32X",
      yellow: "Nintendo 64",
      green: "PC Engine",
      pink: "Atari",
    };
    const targetColor = colors[Math.floor(Math.random() * colors.length)];
    const targetName = cartridgeNames[targetColor];
    const options = shuffle([
      targetColor,
      ...Array.from({ length: 14 }, () => {
        const misses = colors.filter((color) => color !== targetColor);
        return misses[Math.floor(Math.random() * misses.length)];
      }),
    ]);
    let finished = false;
    const startedAt = performance.now();
    const titleName = player?.name || "O Chefe";
    const panel = specialPowerButton.parentElement;
    const grid = document.createElement("div");

    resetSpecialMeterMode();
    grid.className = "special-name-grid";
    panel.insertBefore(grid, specialPowerButton);
    specialChallengeImage.src = player?.specialScreen || "assets/chefe-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = `NOME CERTO: encontre ${targetName}!`;
    specialPowerButton.textContent = targetName.toUpperCase();
    specialPowerButton.disabled = true;
    specialPowerButton.classList.add("special-power-muted");
    updateSpecialChallenge(0, duration);
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(timerId);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Nome certo: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resetSpecialMeterMode();
        resolve(bonus);
      }, 720);
    };

    options.forEach((color) => {
      const cartridge = cartridgeByColor[color];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "name-cartridge";
      button.innerHTML = `<img src="${cartridge.src}" alt="${cartridgeNames[color]}">`;
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        finish(color === targetColor ? 3 : 0);
      });
      grid.appendChild(button);
    });

    const timerId = window.setInterval(() => {
      const remaining = Math.max(0, duration - (performance.now() - startedAt));
      specialTimerText.textContent = `${(remaining / 1000).toFixed(1)}s`;
      if (remaining <= 0) finish(0);
    }, 60);
  });
}

function runRouletteSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const duration = 6000;
    const spinMs = isTutorial ? 650 : 500;
    const targetColor = player?.specialColor || "green";
    let currentColor = targetColor;
    let finished = false;
    const startedAt = performance.now();
    const titleName = player?.name || "Marcelo Kamikaze";
    const panel = specialPowerButton.parentElement;
    const roulette = document.createElement("div");
    const cartridgeImage = document.createElement("img");
    const target = cartridgeByColor[targetColor];

    resetSpecialMeterMode();
    roulette.className = "special-roulette";
    cartridgeImage.alt = "Cartucho da roleta";
    roulette.appendChild(cartridgeImage);
    panel.insertBefore(roulette, specialPowerButton);
    specialChallengeImage.src = player?.specialScreen || "assets/marcelo-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = `ROLETA: aperte POWER quando aparecer ${colorLabels[targetColor].toUpperCase()} (${target.label})!`;
    specialPowerButton.textContent = "POWER";
    specialPowerButton.disabled = false;
    updateSpecialChallenge(0, duration);
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    const showNextCartridge = () => {
      currentColor = colors[Math.floor(Math.random() * colors.length)];
      const cartridge = cartridgeByColor[currentColor];
      cartridgeImage.src = cartridge.src;
      cartridgeImage.alt = cartridge.label;
      roulette.dataset.color = currentColor;
    };

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(spinTimerId);
      window.clearInterval(timerId);
      specialPowerButton.removeEventListener("pointerdown", pressPower);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Roleta certeira: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resetSpecialMeterMode();
        resolve(bonus);
      }, 720);
    };

    const pressPower = (event) => {
      event.preventDefault();
      finish(currentColor === targetColor ? 3 : 0);
    };

    showNextCartridge();
    const spinTimerId = window.setInterval(showNextCartridge, spinMs);
    const timerId = window.setInterval(() => {
      const remaining = Math.max(0, duration - (performance.now() - startedAt));
      specialTimerText.textContent = `${(remaining / 1000).toFixed(1)}s`;
      if (remaining <= 0) finish(0);
    }, 60);

    specialPowerButton.addEventListener("pointerdown", pressPower);
  });
}

function runColorHeroSpecialMiniGame(player, isTutorial = false) {
  return new Promise((resolve) => {
    const sequenceLength = 4;
    const duration = isTutorial ? 8500 : 7000;
    const sequence = Array.from(
      { length: sequenceLength },
      () => colors[Math.floor(Math.random() * colors.length)],
    );
    const options = shuffle([
      ...sequence,
      ...Array.from(
        { length: 11 },
        () => colors[Math.floor(Math.random() * colors.length)],
      ),
    ]);
    let selected = 0;
    let finished = false;
    const startedAt = performance.now();
    const titleName = player?.name || "Chris Combo";
    const panel = specialPowerButton.parentElement;
    const challenge = document.createElement("div");
    const sequenceRow = document.createElement("div");
    const grid = document.createElement("div");

    resetSpecialMeterMode();
    challenge.className = "special-color-hero";
    sequenceRow.className = "color-hero-sequence";
    grid.className = "color-hero-grid";
    challenge.append(sequenceRow, grid);
    panel.insertBefore(challenge, specialPowerButton);
    specialChallengeImage.src = player?.specialScreen || "assets/chris-especial-screen.png";
    specialChallengeImage.alt = `${titleName} especial`;
    specialChallengeTitle.textContent = `${titleName} Especial`;
    specialChallengeText.textContent = "COLOR HERO: repita a sequência de cartuchos na ordem certa!";
    specialPowerButton.textContent = "SEQUÊNCIA";
    specialPowerButton.disabled = true;
    specialPowerButton.classList.add("special-power-muted");
    updateSpecialChallenge(0, duration);
    specialOverlay.classList.add("show");
    specialOverlay.setAttribute("aria-hidden", "false");

    sequence.forEach((color, index) => {
      const cartridge = cartridgeByColor[color];
      const item = document.createElement("span");
      item.className = "color-hero-step";
      item.dataset.step = String(index);
      item.innerHTML = `<img src="${cartridge.src}" alt="${colorLabels[color]} ${index + 1}">`;
      sequenceRow.appendChild(item);
    });

    const finish = (bonus) => {
      if (finished) return;
      finished = true;
      window.clearInterval(timerId);
      specialPowerButton.disabled = true;
      specialChallengeText.textContent = bonus ? "Sequência perfeita: +3!" : "Sem bonus de especial.";
      window.setTimeout(() => {
        specialOverlay.classList.remove("show");
        specialOverlay.setAttribute("aria-hidden", "true");
        resetSpecialMeterMode();
        resolve(bonus);
      }, 720);
    };

    options.forEach((color) => {
      const cartridge = cartridgeByColor[color];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "color-hero-cartridge";
      button.innerHTML = `<img src="${cartridge.src}" alt="${cartridge.label}">`;
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        if (finished || button.disabled) return;
        if (color !== sequence[selected]) {
          finish(0);
          return;
        }

        button.disabled = true;
        button.classList.add("is-selected");
        sequenceRow.children[selected].classList.add("is-complete");
        selected += 1;
        updateSpecialChallenge((selected / sequenceLength) * 100, Math.max(0, duration - (performance.now() - startedAt)));
        if (selected === sequenceLength) finish(3);
      });
      grid.appendChild(button);
    });

    const timerId = window.setInterval(() => {
      const remaining = Math.max(0, duration - (performance.now() - startedAt));
      specialTimerText.textContent = `${(remaining / 1000).toFixed(1)}s`;
      if (remaining <= 0) finish(0);
    }, 60);
  });
}

function resetSpecialMeterMode() {
  const meter = specialMeterFill.parentElement;
  meter.classList.remove("timing-mode");
  meter.querySelectorAll(".timing-marker").forEach((node) => node.remove());
  document.querySelectorAll(".special-cartridge-hunt").forEach((node) => node.remove());
  document.querySelectorAll(".special-name-grid").forEach((node) => node.remove());
  document.querySelectorAll(".special-clean-grid").forEach((node) => node.remove());
  document.querySelectorAll(".special-roulette").forEach((node) => node.remove());
  document.querySelectorAll(".special-color-hero").forEach((node) => node.remove());
  document.querySelectorAll(".aim-target, .aim-center-zone").forEach((node) => node.remove());
  specialChallengeImage.parentElement.classList.remove("aim-mode");
  specialMeterFill.style.left = "";
  specialPowerButton.classList.remove("special-power-muted");
}

function updateSpecialChallenge(power, remainingMs) {
  specialMeterFill.style.width = `${Math.round(power)}%`;
  specialPowerText.textContent = `${Math.round(power)}%`;
  specialTimerText.textContent = `${(remainingMs / 1000).toFixed(1)}s`;
}

async function useAction(actionKey, fromServer = false, serverEvent = null) {
  if (mode === "online" && !fromServer) {
    let specialBonus = 0;
    const player = players[currentPlayer];
    const action = actions[actionKey];
    const canTryAction = action && getUseCount(player, actionKey) < action.maxUses;
    if (actionKey === "especial" && canTryAction && rolls > 0 && !gameOver && !isRolling && !isAnimating) {
      const preview = calculateDamage(actionKey);
      if (preview.damage > 0) specialBonus = await runSpecialMiniGame(players[currentPlayer]);
    }
    requestOnlineCommand("attack", { actionKey, specialBonus });
    return;
  }
  if (gameOver || isRolling || isAnimating || rolls === 0) {
    roundMessage.textContent = "Assopre os cartuchos antes de atacar.";
    return;
  }
  const player = players[currentPlayer];
  const opponentIndex = currentPlayer === 0 ? 1 : 0;
  const opponent = players[opponentIndex];
  const action = actions[actionKey];
  if (getUseCount(player, actionKey) >= action.maxUses) return;

  stopTurnTimer();
  const result = calculateDamage(actionKey);
  if (fromServer && serverEvent) {
    result.damage = serverEvent.damage;
    result.baseDamage = serverEvent.baseDamage;
    result.bonus = serverEvent.bonus;
    result.bonusColor = serverEvent.bonusColor;
    result.specialBonus = serverEvent.specialBonus || 0;
  }
  if (actionKey === "especial" && result.damage > 0 && !fromServer && !isCpuTurn()) {
    result.specialBonus = await runSpecialMiniGame(player);
    result.damage += result.specialBonus;
  }
  player.used[actionKey] = getUseCount(player, actionKey) + 1;
  opponent.hp = Math.max(0, opponent.hp - result.damage);
  isAnimating = true;
  renderActions();
  renderRollButton();

  const bonusText = result.bonus ? ` Bonus de cor ${colorLabels[result.bonusColor]}: +${result.bonus}.` : "";
  const specialBonusText = result.specialBonus ? ` Bonus POWER: +${result.specialBonus}.` : actionKey === "especial" && result.damage > 0 ? " Sem bonus de especial." : "";
  const hitText =
    result.damage > 0
      ? `${player.name} usou ${action.label} e causou ${result.damage} de dano.${bonusText}${specialBonusText}`
      : `${player.name} tentou ${action.label}, mas a combinacao nao fechou.`;

  await playCombatAnimation(actionKey, currentPlayer, opponentIndex, result.damage);
  isAnimating = false;

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
    beginTurn();
    maybeCpuTurn();
  }
}

function finishMatch(winnerIndex, message) {
  hideTurnTimer();
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
    showArcadeEnding(getCharacter(arcade.heroId));
    return;
  }
  showHome();
}

async function maybeCpuTurn() {
  if (!isCpuTurn()) return;
  await wait(650);
  if (!isCpuTurn()) return;
  for (let index = 0; index < 3 && isCpuTurn(); index += 1) {
    await rollDice();
    if (!isCpuTurn()) return;
    if (index < 2) {
      const strategy = chooseCpuStrategy();
      held = dice.map((_, dieIndex) => strategy.held.includes(dieIndex));
      roundMessage.textContent = `${players[currentPlayer].name} separou cartuchos para buscar ${actions[strategy.action].label}.`;
      renderDice();
      await wait(820);
      if (!isCpuTurn()) return;
    } else {
      await wait(320);
      if (!isCpuTurn()) return;
    }
  }
  if (isCpuTurn()) {
    const actionKey = pickCpuAction();
    roundMessage.textContent = `${players[currentPlayer].name} escolheu ${actions[actionKey].label}.`;
    await wait(420);
    if (!isCpuTurn()) return;
    await useAction(actionKey);
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

async function playCombatAnimation(actionKey, attackerIndex, defenderIndex, damage) {
  const action = actions[actionKey];
  const failedPower = action.type !== "repeat" && damage === 0;
  arena.classList.add("attack-dim");
  if (failedPower) {
    setTemporarySprite(attackerIndex, "damage", false);
    restartAnimation(fighters[attackerIndex], "fx-fail", spriteDuration);
    await wait(spriteDuration);
    restoreIdleSprite(attackerIndex);
    arena.classList.remove("attack-dim");
    return;
  }

  setTemporarySprite(attackerIndex, getActionSpriteState(actionKey), false);
  if (actionKey === "gancho" || actionKey === "voadora") restartAnimation(fighters[attackerIndex], "attack-glow", spriteDuration);
  if (damage > 0) {
    await wait(spriteDuration / 2);
    setTemporarySprite(defenderIndex, "damage", false);
    restartAnimation(fighters[defenderIndex], "fx-hit", spriteDuration);
    await wait(spriteDuration / 2);
    restoreIdleSprite(attackerIndex);
    await wait(spriteDuration / 2);
    restoreIdleSprite(defenderIndex);
    arena.classList.remove("attack-dim");
    return;
  }
  await wait(spriteDuration);
  restoreIdleSprite(attackerIndex);
  arena.classList.remove("attack-dim");
}

function getActionSpriteState(actionKey) {
  return (
    {
      soco: "punch",
      gancho: "punch",
      chute: "kick",
      voadora: "kick",
      magia1: "poder1",
      magia2: "poder2",
      magia3: "poder3",
      magia4: "poder4",
      especial: "especial",
    }[actionKey] || "attack"
  );
}

function restartAnimation(element, className, duration = 820) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), duration);
}

function restoreIdleSprite(playerIndex) {
  if (gameOver || !players[playerIndex]) return;
  spriteStates[playerIndex] = "idle";
  fighterImages[playerIndex].src = players[playerIndex].sprites.idle;
  updateFighterMirror(playerIndex);
}

function setTemporarySprite(playerIndex, state, shouldRestore = true) {
  spriteStates[playerIndex] = state;
  fighterImages[playerIndex].src = players[playerIndex].sprites[state] || players[playerIndex].sprites.attack || players[playerIndex].sprites.idle;
  updateFighterMirror(playerIndex);
  if (state === "win") restartAnimation(fighters[playerIndex], "fx-confetti", spriteDuration * 2);
  if (shouldRestore) {
    window.setTimeout(() => {
      restoreIdleSprite(playerIndex);
    }, spriteDuration);
  }
}

function showKo(winnerIndex) {
  const winner = winnerIndex === null ? null : players[winnerIndex];
  const isArcadeGameOver = mode === "arcade" && winnerIndex === 1;
  koOverlay.classList.toggle("game-over", isArcadeGameOver);
  koText.textContent = isArcadeGameOver ? "GAME OVER" : "K.O";
  winnerText.textContent = winner ? `${winner.name} venceu!` : "Empate!";
  winnerSprite.classList.toggle("hidden", !winner);
  if (winner) {
    winnerSprite.src = winner.sprites.win;
    winnerSprite.alt = `${winner.name} venceu`;
    winnerSprite.classList.remove("mirror");
  }
  koOverlay.classList.add("show");
  koOverlay.setAttribute("aria-hidden", "false");
  const isArcadeWin = mode === "arcade" && winnerIndex === 0;
  const isArcadeFinalWin = isArcadeWin && arcade.index === arcade.opponents.length - 1;
  koButton.textContent = isArcadeFinalWin ? "Ver final" : isArcadeWin ? "Proxima luta" : "Voltar ao menu";
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

function render() {
  renderDice();
  renderPlayers();
  renderActions();
  renderRollButton();
  turnLabel.textContent = gameOver ? "Fim de luta" : `Turno de ${players[currentPlayer].name}`;
  rollsLabel.textContent = `Assopradas: ${rolls}/3`;
}

function renderDice() {
  diceButtons.forEach((button, index) => {
    const isRollingDie = button.classList.contains("rolling");
    button.className = "die";
    if (!dice[index]) {
      button.classList.add("empty");
      if (isRollingDie) button.classList.add("rolling");
      button.setAttribute("aria-label", `Cartucho ${index + 1} vazio`);
      return;
    }
    button.classList.add(dice[index]);
    button.classList.toggle("held", held[index]);
    button.classList.toggle("rolling", isRollingDie);
    button.setAttribute("aria-label", `Cartucho ${index + 1}: ${dice[index]}${held[index] ? ", separado" : ""}`);
  });
}

function renderPlayers() {
  players.forEach((player, index) => {
    document.querySelector(`#p${index + 1}Hp`).textContent = player.hp;
    document.querySelector(`#p${index + 1}Health`).style.width = `${player.hp}%`;
    fighters[index].classList.toggle("active", index === currentPlayer && !gameOver);
    updateFighterMirror(index);
  });
}

function updateFighterCartridge(playerIndex) {
  const cartridge = cartridgeByColor[players[playerIndex].specialColor];
  fighterCartridges[playerIndex].src = cartridge.src;
  fighterCartridges[playerIndex].alt = cartridge.label;
}

function shouldMirror(playerIndex) {
  return playerIndex === 1;
}

function updateFighterMirror(playerIndex) {
  fighters[playerIndex].classList.toggle("mirror", spriteStates[playerIndex] !== "win" && shouldMirror(playerIndex));
}

function renderActions() {
  actionButtons.forEach((button) => {
    const actionKey = button.dataset.action;
    const action = actions[actionKey];
    const usedCount = players[currentPlayer] ? getUseCount(players[currentPlayer], actionKey) : 0;
    const isUsed = usedCount >= action.maxUses;
    const counter = button.querySelector(".use-counter");
    if (counter) counter.textContent = `${usedCount}/${action.maxUses}`;
    button.disabled = gameOver || rolls === 0 || isRolling || isAnimating || isUsed || isCpuTurn() || isOnlineOpponentTurn();
    button.classList.toggle("used", isUsed);
  });
}

function renderRollButton() {
  rollButton.disabled = gameOver || isRolling || isAnimating || rolls >= 3 || isCpuTurn() || isOnlineOpponentTurn();
  rollButton.classList.remove("roll-1", "roll-2", "roll-3");
  if (rolls > 0) rollButton.classList.add(`roll-${rolls}`);
  rollButton.textContent = isRolling ? "Assoprando..." : `Assoprar Cartuchos ${rolls}/3`;
}

function showArcadeMap() {
  mapCounter.textContent = `Luta ${arcade.index + 1} de ${arcade.opponents.length}`;
  mapRoute.innerHTML = "";
  arcade.opponents.forEach((opponent, index) => {
    const passed = index < arcade.index;
    const current = index === arcade.index && !passed;
    const node = document.createElement("div");
    node.className = `route-fight${passed ? " done" : ""}${current ? " current" : ""}${opponent.id === "chefe" ? " boss" : ""}`;
    node.innerHTML = `<img src="assets/arcade-${opponent.id}.jpg" alt="${opponent.name}"><span>${opponent.name}</span>`;
    mapRoute.appendChild(node);
  });
  showScreen("map");
}

function showArcadeEnding(hero) {
  const ending = arcadeEndings[hero?.id];
  if (!hero || !ending) {
    showHome();
    return;
  }

  koOverlay.classList.remove("show");
  koOverlay.setAttribute("aria-hidden", "true");
  endingTitle.textContent = `${hero.name} venceu!`;
  endingImage.src = ending.image;
  endingImage.alt = `Final de ${hero.name}`;
  endingText.textContent = ending.text;
  showScreen("ending");
}

function showHome() {
  hideTurnTimer();
  if (legalTimer) {
    window.clearTimeout(legalTimer);
    legalTimer = null;
  }
  if (mode === "online") resetOnlineSession();
  mode = null;
  pendingP1 = null;
  versusDraw = null;
  pendingVs = null;
  showScreen("home");
}

function finishSplash() {
  if (splashTimer) {
    window.clearTimeout(splashTimer);
    splashTimer = null;
  }
  if (!screens.splash.classList.contains("hidden")) {
    showScreen("legal");
    legalTimer = window.setTimeout(finishLegal, 5000);
  }
}

function finishLegal() {
  if (legalTimer) {
    window.clearTimeout(legalTimer);
    legalTimer = null;
  }
  if (!screens.legal.classList.contains("hidden")) showHome();
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
    [fighter.select, fighter.specialScreen, ...Object.values(fighter.sprites)].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  });
  battleStages.forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}
