function triangle(num) {
  let array = Array(num - 1).fill(" ");
  for (let i = 0; i < num; i += 1) {
    array[(num - 1) - i] = '*';
    console.log(array.join(''));
  }
}