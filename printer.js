/* eslint-disable no-console*/

const getSpiral = require('./spiral');

const spiral = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function isOdd(n) {
  return Math.abs(n % 2) === 1;
}

function printSpiral(arr) {
  const arrayWidth = arr[0].length;
  if (!isOdd(arrayWidth)) {
    throw new Error('Array width and height must be odd!');
  }
  const arrayHeight = arr.length;// we use it only for check
  if (arrayWidth !== arrayHeight) {
    throw new Error('Array must be square (with equal with and height!)');
  }

  // here we can make a loop to check if every row has arrayWidth elements if neccessary

  console.log('\nSource matrix:');
  for (let x = 0; x < arrayWidth; x++) {
    let arrayString = '';
    for (let y = 0; y < arrayWidth; y++) {
      let printable = arr[x][y];
      if (printable.toString().length < 2) {
        printable = ` ${printable}`;
      }
      arrayString += `${printable} `;
    }
    console.log(arrayString);
  }
  console.log('\n');
  const answer = getSpiral(arr);
  // console.log(`Spiral direct: ${answer}`);
  console.log(`Spiral sequence: ${answer.reverse()}`);
}

printSpiral(spiral);
