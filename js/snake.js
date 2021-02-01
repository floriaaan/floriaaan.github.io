// JavaScript Snake example
// Author Jan Bodnar
// http://zetcode.com/javascript/snake/

let canvas;
let ctx;

let head;
let apple;
let ball;
let divide_img;
let slowmo_img;

let dots;
let apple_x;
let apple_y;

let bonus_x;
let bonus_y;
let bonus_visible;
let bonus_type;

let leftDirection = false;
let rightDirection = true;
let upDirection = false;
let downDirection = false;
let inGame = true;

const DOT_SIZE = 10;
const ALL_DOTS = 900;
const MAX_RAND = 49;
let DELAY = 120;
const C_HEIGHT = 500;
const C_WIDTH = 500;

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

const score = document.getElementById("score");
let scoreValue = 0;

const xp = document.getElementById("xp");
let gainedXP = 0;

const bonusList = {
  divide: {
    type: "divide",
    do: () => {
      if (dots > 3) {
        dots = (dots / 1.5) >> 0;
      }
    },
    image: divide_img,
  },
  slowmo: {
    type: "slowmo",
    do: () => {
      let tmp = DELAY;
      DELAY = 300;
      setTimeout(() => {
        DELAY = tmp;
      }, 3000);
    },
    image: slowmo_img,
  },
};

let x = new Array(ALL_DOTS);
let y = new Array(ALL_DOTS);

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  loadImages();
  createSnake();
  locateApple();
  locateBonus();
  setTimeout("gameCycle()", DELAY);
}

function loadImages() {
  head = new Image();
  head.src = "assets/img/snake/head.png";

  ball = new Image();
  ball.src = "assets/img/snake/dot.png";

  apple = new Image();
  apple.src = "assets/img/snake/apple.png";

  divide_img = new Image();
  divide_img.src = "assets/img/snake/head.png";
  
  slowmo_img = new Image();
  slowmo_img.src = "assets/img/snake/dot.png";
}

function createSnake() {
  dots = 5;

  for (let z = 0; z < dots; z++) {
    x[z] = 50 - z * 10;
    y[z] = 50;
  }
}

function renderHTML() {
  score.innerHTML = scoreValue;
  xp.innerHTML = gainedXP;

}

function checkApple() {
  if (x[0] == apple_x && y[0] == apple_y) {
    gainedXP += 3;
    scoreValue++;
    renderHTML();
    dots++;
    DELAY -= DELAY * 0.001;
    locateApple();
  }
}
function checkBonus() {
  if (x[0] == bonus_x && y[0] == bonus_y && bonus_visible) {
    gainedXP += 2;
    scoreValue++;
    renderHTML();
    bonusList[bonus_type].do();
    DELAY -= DELAY * 0.001;
    locateBonus();
    bonus_visible = false;
  }
}

function bonus() {}

function doDrawing() {
  ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);

  if (inGame) {
    ctx.drawImage(apple, apple_x, apple_y);
    if (bonus_visible) {
      ctx.drawImage(divide_img, bonus_x, bonus_y);
    }

    for (let z = 0; z < dots; z++) {
      if (z == 0) {
        ctx.drawImage(head, x[z], y[z]);
      } else {
        ctx.drawImage(ball, x[z], y[z]);
      }
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  ctx.fillStyle = "white";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.font = "60px Poppins";

  ctx.fillText("Game over", C_WIDTH / 2, C_HEIGHT / 2);

  //   $.ajax({
  //     url: "/scripts/script_snake.php",
  //     dataType: "json",
  //     method: "POST",
  //     data: {
  //       score: scoreValue,
  //       user: "<?= $_SESSION['user']['gardian']['gardianwebsso_cn'][0] ?>",
  //     },
  //   });
}

function move() {
  for (let z = dots; z > 0; z--) {
    x[z] = x[z - 1];
    y[z] = y[z - 1];
  }

  if (leftDirection) {
    x[0] -= DOT_SIZE;
  }

  if (rightDirection) {
    x[0] += DOT_SIZE;
  }

  if (upDirection) {
    y[0] -= DOT_SIZE;
  }

  if (downDirection) {
    y[0] += DOT_SIZE;
  }
}

function checkCollision() {
  for (let z = dots; z > 0; z--) {
    if (z > 4 && x[0] == x[z] && y[0] == y[z]) {
      inGame = false;
    }
  }

  if (y[0] >= C_HEIGHT) {
    inGame = false;
  }

  if (y[0] < 0) {
    inGame = false;
  }

  if (x[0] >= C_WIDTH) {
    inGame = false;
  }

  if (x[0] < 0) {
    inGame = false;
  }
}

function locateApple() {
  let r = Math.floor(Math.random() * MAX_RAND);
  apple_x = r * DOT_SIZE;

  r = Math.floor(Math.random() * MAX_RAND);
  apple_y = r * DOT_SIZE;

  r = Math.floor(Math.random() * 100);

  bonus_visible = bonus_visible || r > 80;
}

function locateBonus() {
  let r = Math.floor(Math.random() * MAX_RAND);
  bonus_x = r * DOT_SIZE;

  r = Math.floor(Math.random() * MAX_RAND);
  bonus_y = r * DOT_SIZE;

  bonus_type = Math.random() > 0.5 ? "slowmo" : "divide";
}

function gameCycle() {
  if (inGame) {
    checkApple();
    checkBonus();
    checkCollision();
    move();
    doDrawing();
    setTimeout("gameCycle()", DELAY);
  }
}

onkeydown = function (e) {
  let key = e.keyCode;

  if (key == LEFT_KEY && !rightDirection) {
    leftDirection = true;
    upDirection = false;
    downDirection = false;
  }

  if (key == RIGHT_KEY && !leftDirection) {
    rightDirection = true;
    upDirection = false;
    downDirection = false;
  }

  if (key == UP_KEY && !downDirection) {
    upDirection = true;
    rightDirection = false;
    leftDirection = false;
  }

  if (key == DOWN_KEY && !upDirection) {
    downDirection = true;
    rightDirection = false;
    leftDirection = false;
  }
};

(function () {
  init();
})();
