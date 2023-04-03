// function checkMagicSquare(n, matrix) {
//   //check diagonal 1 and 2
//   let diagonalOne = 0;
//   let diagonalTwo = 0;

//   //iterate through diagonals
//   for (let i = 0; i < n; i++) {
//     // [i][i] is the diagonalOne (top left -->> bottom right)
//     diagonalOne = diagonalOne + matrix[i][i];
//     // [i][n-1-i] is the diagonalOne (top left -->> bottom right)
//     diagonalTwo = diagonalTwo + matrix[i][n - 1 - i];
//   }
//   if (diagonalOne !== diagonalTwo) return false;

//   //check row sum  and column sum
//   //iterate through row and column
//   for (let i = 0; i < n; i++) {
//     let rowSum = 0;
//     let columnSum = 0;
//     for (let j = 0; j < n; j++) {
//       rowSum += matrix[i][j];
//       columnSum += matrix[j][i];
//     }
//     if (
//       rowSum !== columnSum ||
//       columnSum !== diagonalOne ||
//       diagonalOne !== diagonalTwo
//     )
//       return false;
//   }
//   return true;
// }
// let result = checkMagicSquare(3, [
//   [4, 9, 2],
//   [3, 5, 7],
//   [8, 1, 6],
// ]);

// if (result === true) {
//   console.log("yes, its a magic square");
// } else {
//   console.log("no, its not a magic square");
// }

function checkMagicSquare(n, matrix) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  let rowSum = 0;
  let colSum = 0;

  for (let i = 0; i < n; i++) {
    primaryDiagonal = primaryDiagonal + matrix[i][i];
    secondaryDiagonal = secondaryDiagonal + matrix[i][n - 1 - i];
  }

  if (primaryDiagonal !== secondaryDiagonal) return false;

  for (let i = 0; i < n; i++) {
    rowSum = 0;
    colSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += matrix[i][j];
      colSum += matrix[j][i];
    }
    if (
      rowSum !== colSum ||
      colSum !== primaryDiagonal ||
      primaryDiagonal !== secondaryDiagonal
    )
      return false;
  }

  return true;
}
let result = checkMagicSquare(3, [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
]);

console.log(
  `${result ? "It's a magic square" : "Nope, it's not a magic square"}`
);
