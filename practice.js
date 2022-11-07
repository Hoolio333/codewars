// 1. Two Sum

// Leet Code

const twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        if (i !== j) {
          return [i, j];
        }
      }
    }
  }
};

// 2. Add Two Numbers
