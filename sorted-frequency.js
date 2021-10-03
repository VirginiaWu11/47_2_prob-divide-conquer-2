function sortedFrequency(arr, num) {
  //[1,1,2,2,2,2,3],2
  let leftI = 0; //0
  let rightI = arr.length - 1; //6
  let solidMidI; //undefined
  let mid;
  let lowPointI;
  let upperPointI;

  // [1,1,2,2,2,2,3]
  //  0 1 2 3 4 5 6

  // 0  1 2 3 4 5 6 7 8 9 10 11 12 13
  // [1,1,2,2,2,2,2,2,3,4,4,4,4,5,5],2
  //   L          M                 R
  //            R
  //      M

  //[1,1,2,2,2,2,2,2,2,2,2,3,4,4,4,4],2

  if (arr[rightI] < num || arr[0] > num) {
    return -1;
  }
  while (leftI < rightI) {
    mid = Math.floor((leftI + rightI) / 2);
    if (arr[mid] > num) {
      rightI = mid - 1;
    } else if (arr[mid] < num) {
      leftI = mid + 1;
    } else {
      break;
    }
  }
  if (arr[rightI] >= num) {
    solidMidI = rightI;
  } else {
    solidMidI = leftI;
  }
  lowPointI = leftI - 1;
  upperPointI = rightI + 1;

  //lower half
  if (arr[leftI] < num) {
    while (leftI < rightI) {
      mid = Math.floor((leftI + rightI) / 2);
      if (arr[mid] >= num) {
        rightI = mid - 1;
        if (arr[rightI] < num) {
          lowPointI = rightI;
          break;
        }
      } else if (arr[mid] < num) {
        leftI = mid + 1;
        if (arr[leftI] === num) {
          lowPointI = mid;
          break;
        }
      }
    }
  }
  console.log(leftI, rightI);
  rightI = solidMidI;
  //upper half
  if (arr[rightI] > num) {
    while (leftI < rightI) {
      mid = Math.floor((leftI + rightI) / 2);
      if (arr[mid] <= num) {
        leftI = mid + 1;
        if (arr[leftI] > num) {
          upperPointI = leftI;
          break;
        }
      } else if (arr[mid] > num) {
        rightI = mid - 1;
        if (arr[rightI] === num) {
          upperPointI = mid;
          break;
        }
      }
    }
  }
  return upperPointI - lowPointI - 1;
}

module.exports = sortedFrequency;

// [1,1,2,2,2,2,3,4]  ,4,4,4,5,5,6,6,6],2
//   L               M              R mid =2 need L1 & L2 & M2
//                R
//          M
