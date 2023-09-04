import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID {
  id: number;
  name: string;
  planets: string | string[];
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(
  houses: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  let a = typeof houses === "string" ? JSON.parse(houses) : houses;
  return (filter ? a.filter(filter) : a).map((house: House) => ({
    id: a.indexOf(house),
    ...house,
  }));

  return [];
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log("");

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
