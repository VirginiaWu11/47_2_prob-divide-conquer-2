function findFloor(arr, num) {
  let li = 0;
  let ri = arr.length - 1;
  let mid;
  if (arr[0] > num) {
    return -1;
  }
  if (arr[ri] < num) {
    return arr[ri];
  }
  while (li <= ri) {
    mid = Math.floor((li + ri) / 2);
    midVal = arr[mid];
    if (midVal > num) {
      ri = mid - 1;
    } else if (midVal < num && arr[mid + 1] > num) {
      return arr[mid];
    } else {
      li = mid + 1;
    }
  }
}

module.exports = findFloor;
