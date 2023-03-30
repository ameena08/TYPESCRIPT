function findMaxValue(numbers: number[]): number {
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }

  const numbers = [1, 5, 2, 9, 3, 7];

const max = findMaxValue(numbers);
console.log(`The maximum value is: ${max}`);
