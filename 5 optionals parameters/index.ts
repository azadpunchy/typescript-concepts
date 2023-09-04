const printIngratients = (
  quantity: string,
  ingredient: string,
  extra?: string
) => {
  console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`);
};

printIngratients("1cup", "flour");
printIngratients("1cup", "flour", "something extra\n");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

// here sign of Exclamation means something have to be there
const getEmail = (user: User): string => {
  if (user.info) {
    return user.info.email!;
  }

  return "No email";
};

console.log(getEmail({ id: "hi", info: { email: "email@gmail.com" } }));
console.log(getEmail({ id: "hi" }), "\n");

// another way to implement same logic using Nullish coalescing operator (??)

const getEmailEasily = (user: User): string => {
  return user?.info?.email ?? "No Email Nullish";
};

console.log(getEmailEasily({ id: "hi", info: { email: "nullish@gmail.com" } }));
console.log(getEmailEasily({ id: "hi" }), "\n");

// optionals callbacks

const addWithcallBack = (x: number, y: number, callback?: () => void) => {
  console.log([x, y]);
  callback?.();
};

addWithcallBack(1, 2);
