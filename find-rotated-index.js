function findRotatedIndex(arr, num) {
  let li = 0;
  let ri = arr.length - 1;
  let mid, spot;
  while (li < ri) {
    mid = Math.floor((li + ri) / 2);
    if (arr[0] < arr[mid]) {
      li = mid + 1;
      if (arr[li] < arr[mid]) {
        spot = mid;
        break;
      }
    } else {
      ri = mid - 1;
      if (arr[ri] > arr[mid]) {
        spot = mid;
        break;
      }
    }
  }
  if (num > arr[spot] || num < arr[spot + 1]) {
    return -1;
  }
  if (num > arr[0]) {
    li = 0;
    ri = spot;
  }
  if (num < arr[arr.length - 1]) {
    li = spot + 1;
    ri = arr.length - 1;
  }
  while (li <= ri) {
    mid = Math.floor((li + ri) / 2);
    if (num < arr[mid]) {
      ri = mid - 1;
    } else if (num > arr[mid]) {
      li = mid + 1;
    } else {
      return mid;
    }
  }
}

module.exports = findRotatedIndex;

// find the point where the value was rotated
// i will know this as soon as the index right of the current index is less than the current index and the left index is greater than the current index

// [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1, 2, 3, 4], 8) //2
//  L                                M                  ^ FIND THIS
//                                      L
//                   M                                  POINT WHERE first el >num
