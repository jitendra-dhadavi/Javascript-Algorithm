// Remove duplicate elements from an array

const removeDuplicate = (array) => {
  const uniqueArray = [];
  let uniqueCount = 0;
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueCount; j++) {
      if (uniqueArray[j] === array[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray[uniqueCount] = array[i];
      uniqueCount++;
    }
  }
  return uniqueArray;
};

console.log(removeDuplicate([1, 2, 3, 2, 4, 1, 5]));

const removeDuplicate2 = (array) => {
  const uniqueArray = Array.from(new Set(array));
  return uniqueArray;
};

console.log(removeDuplicate2([1, 2, 3, 2, 4, 1, 5]));
