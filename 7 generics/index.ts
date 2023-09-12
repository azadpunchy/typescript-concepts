const simpleState = <T>(initial: T): [() => T, (v: T) => void] => {
  let str: T = initial;
  return [
    //get string method
    () => str,
    // set string method
    (v: T) => {
      str = v;
    },
  ];
};

let [getstr, setStr] = simpleState(1);
console.log(getstr());
setStr(2);
console.log(getstr(), "\n");

// Generic overloading
let [getstr1, setStr1] = simpleState<string | null | undefined>(undefined);
console.log(getstr1());
setStr1("bari");
console.log(getstr1());

interface Rank<RankItem> {
  items: RankItem;
  rank: number;
}
const ranker = <RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] => {
  let ranks = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
};

// lests try ranker method

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Blubasaur",
    hp: 20,
  },
  {
    name: "Megasaur",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
