function getSpiral(arr) {
  const arrayWidth  = arr[0].length,
        arrayHeight = arrayWidth;
  // yup, pretty useless for square matrix
  // but the algoritm should also work with non square matrixes.

  let minX = 0,
      minY = 0,
      maxX = arrayWidth - 1,
      maxY = arrayHeight - 1;
  const answer = [];
  while (minX !== maxX) {
    for (let i = minX; i <= maxX; i++) {
      answer.push(arr[minY][i]);
    }
    for (let i = minY + 1; i <= maxY; i++) {
      answer.push(arr[i][maxX]);
    }
    for (let i = maxX - 1; i >= minX; i--) {
      answer.push(arr[maxY][i]);
    }
    for (let i = maxY - 1; i > minY; i--) {
      answer.push(arr[i][minX]);
    }
    minX++;
    maxX--;
    minY++;
    maxY--;
  }
  answer.push(arr[minX][minY]);
  return answer;
}

module.exports = getSpiral;
