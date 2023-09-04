interface MyUser {
  name: string;
  id: number;
  email?: string;
}

// partial creates all fields optional of any interface/Type
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    { name: "ali", id: 5, email: "test@test.com" },
    { email: "Manan@test.com" }
  )
);

// Required creates all fields Strictly required of any interface/Type
type ReqquiredMyUser = Required<MyUser>;

// Pick any key value pair for refrence type from the interface
// We can also wrap it in Required utility
type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Record utility type is data type which record data e.g array of object and
// use objects id as key and value is as object

type usreWithoutId = Omit<MyUser, "id">;
const mapById = (users: MyUser[]): Record<MyUser["id"], usreWithoutId> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: 1, name: "Muhammad" },
    { id: 2, name: "Bari" },
    { id: 3, name: "Manan" },
  ]),
  "\n\nreadonly section\n"
);

interface Cat {
  name: string;
  breed: string;
}

type ReadOnly = Readonly<Cat>;

const makeCat = (name: string, breed: string): ReadOnly => {
  return {
    name,
    breed,
  };
};
console.log(makeCat("name", "tabby"));

//
const makeCoordinate = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => {
  return [x, y, z];
};
const c1 = makeCoordinate(10, 20, 30);
console.log("\n", c1);

//
const reallyConst = [5, 4, 3] as const;
console.log(reallyConst);
