const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let COLOR1 = "pink";
let COLOR2 = "gray";

let degits = [];
let userWidth = 500;

class Degit {
  constructor(indexX, indexY) {
    this.maxWidth = userWidth;
    this.maxHeight = this.maxWidth / 3;
    this.x = indexX * (this.maxWidth / 15) + 20;
    this.y = indexY * (this.maxHeight / 5) + 20;
    this.size = this.maxWidth / 120;
    this.keyCode = 0;
    this.color = COLOR2;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    for(let i = 0; i < 3; i++) {
      for(let i2 = 0; i2 < 3; i2++) {
        ctx.arc(this.x + (i * (this.maxWidth/45)), this.y + (i2 * (this.maxHeight / 15)), this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      }
    }
  }

  wink() {
    this.color = COLOR1;
    this.draw();
    setTimeout(() => {
      this.color = COLOR2;
      this.draw();
    }, 1000);
  }

}

function drawDegit() {
  for(let i = 0; i < 5; i++) {
    for(let i2 = 0; i2 < 14; i2++) {
      degits.push(new Degit(i2, i));
    }
  }
  degits.forEach(element => element.draw());
}

function declareKeyCode() {
  degits[0].keyCode = 27;
  degits[1].keyCode = 49;
  degits[2].keyCode = 50;
  degits[3].keyCode = 51;
  degits[4].keyCode = 52;
  degits[5].keyCode = 53;
  degits[6].keyCode = 54;
  degits[7].keyCode = 55;
  degits[8].keyCode = 56;
  degits[9].keyCode = 57;
  degits[10].keyCode = 48;
  degits[11].keyCode = 189;
  degits[12].keyCode = 187;
  degits[13].keyCode = 8;
}

function keyIndi(event) {
  degits.forEach((value, index) => {
    if(index != 0 && -1) {
    value.keyCode == event.keyCode ? value.wink() : false;
    }
  });
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function init() {
  resizeCanvas();
  userWidth = prompt("Enter the size", 700);
  COLOR1 = prompt("Enter the color-1", "skyblue");
  COLOR2 = prompt("Enter the color-2", "gray");
  drawDegit();
  declareKeyCode();
}

init();

addEventListener('keydown', keyIndi);