type ThreeDCoordinate = [x: number, y: number, z: number];

const add3DCoordinate = (
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate => {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
};
console.log(add3DCoordinate([1, 1, 1], [10, 20, 30]), "\n");

// custom string state method

type TwoClosureMethods = [() => string, (v: string) => void];
const simpleStringState = (initial: string): TwoClosureMethods => {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
};

let [getstr, setStr] = simpleStringState("hi");
console.log(getstr());
setStr("changed");
console.log(getstr(), "\n");

let [getstr1, setStr1] = simpleStringState("manan");
console.log(getstr1());
setStr1("bari");
console.log(getstr1());
