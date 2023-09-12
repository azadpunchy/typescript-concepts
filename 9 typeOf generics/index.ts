const pluck = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map((item) => item[key]);
};

const animals = [
  { name: "cat", age: 12 },
  { name: "rabbit", age: 2 },
];

console.log(pluck(animals, "age"));
console.log(pluck(animals, "name"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

const sendEvent = <Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void => {
  console.log([name, data]);
};

sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 3,
  time: 49,
});
