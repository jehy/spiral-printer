const spiral = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

function getRectangeCoords(step, centerPos) {
  if (step === 0)
    return [centerPos];
  else {
    const coords = [];
    //push left element
    //coords.push([centerPos[0] - step, centerPos[1]]);

    //get starting point
    let currentPoint = [centerPos[0] - step, centerPos[1] - step + 1];

    //go down
    for (let i = 0; i <= ((step - 1) * 2 + 1); i++) {
      coords.push(currentPoint);
      currentPoint[1] += 1;
    }

    //go right

    //
    return coords;
  }
}

function printSpiral(arr) {
  const arrayWidth = arr[0].length;
  if (!isOdd(arrayWidth)) {
    throw new Error('Array width and height must be odd!');
  }
  const arrayHeight = arr.length;//we use it only for check
  if (arrayWidth !== arrayHeight) {
    throw new Error('Array must be square (with equal with and height!)');
  }
  //here we can make a loop to check if every row has arrayWidth elements if neccessary

  //tranponate matrix to make calculations more intuitive
  const arrTranponed = [];
  for (let x = 0; x < arrayWidth; x++) {
    for (let y = 0; y < arrayWidth; y++) {
      if (!arrTranponed[x]) {
        arrTranponed[x] = [];
      }
      arrTranponed[x][y] = arr[y][x];
    }
  }

  //print array

  console.log('Source matrix');
  for (let x = 0; x < arrayWidth; x++) {
    let arrayString = '';
    for (let y = 0; y < arrayWidth; y++) {
      arrayString += arr[x][y] + ' ';
    }
    console.log(arrayString);
  }

  const arrayCenter = (arrayWidth - 1) / 2;
  let step = 0;
  let pos = [arrayCenter, arrayCenter];
  for (let n = 0; n < 2; n++) {
    let iterationCoords = getRectangeCoords(n, pos);
    console.log(iterationCoords);
    for (let i = 0; i < iterationCoords.length; i++) {
      console.log(arr[iterationCoords[i][0]][iterationCoords[i][1]]);
    }
  }
}

printSpiral(spiral);