function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  if (arr[right] === 1) {
    return 0;
  }
  while (left < right) {
    // left=3 right=4
    mid = Math.floor((right + left) / 2); //mid=3
    if (arr[mid] === 1) {
      // arr[mid]=1
      if (arr[mid + 1] === 0) {
        //arr[mid+1]=
        return arr.length - 1 - mid; //
      }
      left = mid; //left=3
    } else {
      right = mid;
    } //right =1
    console.log(mid); //
  }
  return arr.length;
}

module.exports = countZeroes;
// [0,0,0]
// L R

// [[1, 0, 0, 0, 0]]
// L           R

// [1,1,1,1,1]
// L        R

// [1,1,1,1,0,0]
// L    M     R
//      L M   R
