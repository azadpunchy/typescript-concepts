/**
 *
 * A logger funciton
 * A function which create another function
 * in other term funcitons creating functions
 *
 */

const myLogFunctoin = () => {
  return (str: string) => {
    console.log(str);
  };
};

const logger = myLogFunctoin();
logger("your String\n");

/**
 *
 * lets create a function who return/create🤩 another class
 *
 */

const createLoggerClass = () => {
  return class MyLoggerClass {
    private completeLog: string = "";
    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }
    dumpLog() {
      return this.completeLog;
    }
  };
};

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();

/**
 *
 * uncomment below code for testing createLoggerClass funciton
 * which is returning a class instance (without any type checking)
 *
 */

// logger2.log("foo");
// logger2.log("foo");
// logger2.log("ok");
// logger2.log("foo");
// console.log();
// console.log(logger2.dumpLog());

/**
 *
 * Function creating a generic class
 *
 */

function createSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string | number, T> = {};
    set(id: string | number, value: T): void {
      this.db[id] = value;
    }
    get(id: string | number): T {
      return this.db[id];
    }
    getDb(): Record<string | number, T> {
      return this.db;
    }
  };
}
/**
 *
 * uncomment below code for testing createSimpleMeomoryDatabase funciton
 * returning a class with generic type
 *
 */
// const StringDatabase = createSimpleMemoryDatabase<string>();
// const sdb1 = new StringDatabase();
// sdb1.set("1", "Muhammad");
// sdb1.set("2", "Manan");
// sdb1.set(3, "Bari");
// console.log(sdb1.get("2"));
// console.log(sdb1.getDb());

// generic type of number example
// const NumberDatabase = createSimpleMemoryDatabase<number>();
// const sdb2 = new NumberDatabase();
// sdb2.set("1", 500);
// sdb2.set("2", 600);
// sdb2.set(3, 700);
// console.log(sdb2.get("3"));
// console.log(sdb2.getDb());

/**
 *
 * lets mixin functionality with existing dumpLog method
 *
 */

type Constructor<T> = new (...args: any[]) => T;
const Dumbable = <T extends Constructor<{ getDb(): object }>>(Base: T) => {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getDb());
    }
  };
};

const DumpableStringDatabase = Dumbable(createSimpleMemoryDatabase<string>());
const sdb2 = new DumpableStringDatabase();
sdb2.set("a", "hello");
sdb2.set("sdf", "asdfasf");
console.log(sdb2.get("a"));
sdb2.dump();
