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
    ctx.strokeStyle = COLOR2;
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
    }, 500);
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

  degits[14].keyCode = 9;
  degits[15].keyCode = 81;
  degits[16].keyCode = 87;
  degits[17].keyCode = 69;
  degits[18].keyCode = 82;
  degits[19].keyCode = 84;
  degits[20].keyCode = 89;
  degits[21].keyCode = 85;
  degits[22].keyCode = 73;
  degits[23].keyCode = 79;
  degits[24].keyCode = 80;
  degits[25].keyCode = 219;
  degits[26].keyCode = 221;
  degits[27].keyCode = 220;
    
  degits[28].keyCode = 17;
  degits[29].keyCode = 65;
  degits[30].keyCode = 83;
  degits[31].keyCode = 68;
  degits[32].keyCode = 70;
  degits[33].keyCode = 71;
  degits[34].keyCode = 72;
  degits[35].keyCode = 74;
  degits[36].keyCode = 75;
  degits[37].keyCode = 76;
  degits[38].keyCode = 186;
  degits[39].keyCode = 222;
  degits[40].keyCode = 13;
  degits[41].keyCode = 13;
  
  degits[42].keyCode = 16;
  degits[43].keyCode = 16;
  degits[44].keyCode = 90;
  degits[45].keyCode = 88;
  degits[46].keyCode = 67;
  degits[47].keyCode = 86;
  degits[48].keyCode = 66;
  degits[49].keyCode = 78;
  degits[50].keyCode = 77;
  degits[51].keyCode = 188;
  degits[52].keyCode = 190;
  degits[53].keyCode = 191;
  degits[54].keyCode = 16;
  
  degits[56].keyCode = 20;
  degits[57].keyCode = 18;
  degits[58].keyCode = 91;
  degits[59].keyCode = 32;
  degits[60].keyCode = 32;
  degits[61].keyCode = 32;
  degits[62].keyCode = 32;
  degits[63].keyCode = 32;
  degits[64].keyCode = 32;
  degits[65].keyCode = 32;
  degits[66].keyCode = 38;

  degits[67].keyCode = 93;
  degits[68].keyCode = 18;
  degits[69].keyCode = 37;


}

function keyIndi(event) {
  console.log(event.keyCode);
  degits.forEach((value, index) => {
    value.keyCode == event.keyCode ? value.wink() : false;
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