enum Color {
  RED = 13,
  PINK = 2,
  BLUE = 3,
}


const pink: Color = Color.PINK;
console.log(pink); // 2


// 设置初始值
enum Color1 {
  RED = 10,
  PINK,
  BLUE,
}
const pink1: Color1 = Color1.PINK;
console.log(pink1); // 11