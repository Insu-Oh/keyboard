class Degit {
  constructor(x, y, keyCode) {
    this.x = x;
    this.y = y;
    this.keyCode = keyCode;
  }

  draw(index) {
    console.log("FUCK!" + index); 
  }
}

let arr = [];
const num = 3;

for(let i = 0; i < 5; i++) {
  arr.push(new Degit(1, 2, i));
}
console.log(arr);

arr.forEach((value, index) => {
  value.keyCode == 3 ? value.draw(index) : console.log(index);
})