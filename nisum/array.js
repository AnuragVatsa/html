const numbers = [1, 2, 3, 4, 5, 6];
const squaresOfEven = numbers.filter(n => n % 2 === 0).map(n => n * n);
console.log(squaresOfEven);
