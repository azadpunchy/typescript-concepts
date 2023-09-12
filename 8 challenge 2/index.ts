const myForEach = <T>(items: T[], forEachFunc: (v: T) => void): void => {
  items.reduce((accumulator, current) => {
    forEachFunc(current);
    return undefined;
  }, undefined);
};
let arr = ["a", "b", "c", "d", "e", "f"];
myForEach(arr, (a) => console.log(`For Each ${a}`));

// filter

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce<T[]>((a, v) => (filterFunc(v) ? [...a, v] : a), []);
}

console.log(myFilter([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));

const myMap = <T, K>(items: T[], mapFunc: (v: T) => K): K[] => {
  return items.reduce<K[]>((a, v) => [...a, mapFunc(v)], []);
};

console.log(myMap([1, 2, 3, 4], (e) => `${e * 10}`));
