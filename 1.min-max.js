// Find max/min element

const minMax = (array) => {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return { min, max };
};

console.log(minMax([1, 2, 3, 4, 5]));
