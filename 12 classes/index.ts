// create a no sql style in memory database

interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

// directly using Generic K in Record utility is not acceptable By Record
// Record only accepts string | number | boolean
// so let's create a new type for K
type DBKeyType = string | number | symbol;
class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  // private means only class can access it in which
  // it is declared
  // Protected means class and class members can access it
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
  getDB(): Record<K, T> {
    return this.db;
  }
}

const myDb = new InMemoryDatabase();
myDb.set(45, "A value");
// can also directly set value using db if it is not private
// myDb.db["4"] = "Manan";
// console.log(myDb.get("4"));
console.log(myDb.get(45));
console.log(myDb.getDB(), "\nmyDB ends\n");

// let's create persistent database
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class PersistableDatabase<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

// first instace of PersistableDatabase
const persistentDB = new PersistableDatabase();
persistentDB.set(1, "Foo");
const savedState = persistentDB.saveToString();
persistentDB.set(2, "Bar");
console.log(persistentDB.getDB());
console.log(savedState, "\npersistentDB ends \n");

// 2nd instace of PersistableDatabase
// both instances are independent from each other
// restored database value form first instance
const persistentDB2 = new PersistableDatabase();
persistentDB2.restoreFromString(savedState);
console.log(persistentDB2.saveToString());
