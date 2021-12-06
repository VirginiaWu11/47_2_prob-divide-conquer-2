function findRotationCount(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[midIndex - 1] > array[midIndex]) {
      return midIndex;
    } else if (array[midIndex + 1] < array[midIndex]) {
      return midIndex + 1;
    } else if (array[leftIndex] > array[midIndex]) {
      rightIndex = midIndex - 1;
    } else if (array[rightIndex] < array[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      return 0;
    }
  }
}

module.exports = findRotationCount;

// [15, 18, 2, 3, 6, 12]

//      ^ find this index -1

// l                   r
//          m
//         if m-1v > m return m
//          if lv > mv then r=m-1
//             if rv < mv then l=m+1
