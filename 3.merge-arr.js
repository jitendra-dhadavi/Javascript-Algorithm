// Merge two sorted arrays

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
};

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

const mergeSortedArrays2 = (arr1, arr2) => {
  const mergedArray = [...arr1, ...arr2];
  return mergedArray.sort((a, b) => a - b);
};

console.log(mergeSortedArrays2([1, 3, 5], [2, 4, 6]));
