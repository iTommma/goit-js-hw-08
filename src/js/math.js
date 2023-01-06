// // Іменований експорт, точково:
// const sqrt = Math.sqrt;
// export const square = x => x * x;
// export const diag = (x, y) => sqrt(square(x) + square(y));

// // Іменований експорт, загалом:
// const sqrt = Math.sqrt;
// const square = x => x * x;
// const diag = (x, y) => sqrt(square(x) + square(y));
// export {square, diag};

// // Дефолтний експорт 1 функція:
// const sqrt = Math.sqrt;
// const square = x => x * x;
// export default function diag (x, y) {return sqrt(square(x) + square(y))};

// Дефолтний експорт декілька функцій:
const sqrt = Math.sqrt;
const square = x => x * x;
const diag = (x, y) => sqrt(square(x) + square(y));

export default {square, diag}
