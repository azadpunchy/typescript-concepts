export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// method that accept a callback method
export type mutationFunction = (v: number) => number;
export function arrayMutate(
  numbers: number[],
  mutate: mutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunc: mutationFunction = (v: number) => v * 20;

console.log(arrayMutate([1, 2, 3, 4], myNewMutateFunc));

// function that returns a function
// classic javascript closure

export type adderFunction = (v: number) => Number;
const myAdder = (a: number): adderFunction => {
  return (val: number) => {
    return a + val;
  };
};

const addOne = myAdder(1);

console.log(addOne(20));
