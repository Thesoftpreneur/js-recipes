// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

export function sumWithRestOpeartor(...args) {
  return args.reduce((a,b) => a + b);
}

export function sumWithDefaultArguments() {
  let total = 0;
  for(let value of arguments) {
    total = total + value;
  }
  return total;
}
