const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

// Enumaration

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const isLoading = (state: string) => state === LoadingState.beforeLoad;

console.log(isLoading("something"));

const rollDice = (dice: number): number => {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    // dice roll
    pip += Math.floor(Math.random() * 5) + 1;
  }

  return pip;
};

// two times random number of the dice
console.log(rollDice(2));

//  literal
function sendEvent(name: "addTocart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addTocart", { productId: 4545 });
sendEvent("checkout", { cartCount: 7 });
