function addNumbers(a: number, b: number) {
  return a + b;
}
class App {
  test() {
    console.log("hello from test function class fine");
  }
}

let ne = new App();
ne.test();

export const addStrings = (a: string, b: string): string => `${a} ${b}`;

export const format = (title: string, param: string | number) =>
  `${title} ${param}`;

// return type is void means not returning anything
export const printFormat = (title: string, param: string | number) =>
  console.log(format(title, param));

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

function introduce(salutaiton: string, ...names: string[]): string {
  return `${salutaiton} ${names.join(" ")}`;
}

console.log(introduce("hi", "my", "name", "is", "manan"));

// typescript enforce types in runtime not in compile time
// let's prove

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
export default addNumbers;
