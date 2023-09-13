import data from "./module";

interface Animal {
  name: string;
  age: number;
}

class AnimalList {
  protected animals: Animal[] = [];

  static instance: AnimalList = new AnimalList();

  static addAnimals(animal: Animal): void {
    AnimalList.instance.animals.push(animal);
  }

  static getAnimals(): Animal[] {
    return AnimalList.instance.animals;
  }

  private constructor() {}
}

AnimalList.addAnimals({ name: "cat", age: 5 });
AnimalList.addAnimals({ name: "parrot", age: 3 });

console.log(AnimalList.getAnimals());
console.log("\n", data);
