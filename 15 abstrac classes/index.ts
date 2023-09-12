/**
 *
 * abstract class means you can not instantiate
 * it directly from abstract class name
 * it is parent class create child then
 * instantiate it
 *
 */
abstract class StreetFighter {
  constructor() {}
  move() {}
  // here getSpecialAttack method will be overridden by child class
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }
  abstract getSpecialAttack(): string;
  // abstract accessor
  abstract get name(): string;
}
// as we can see here we can't instantiate it directly
// const goku = new StreetFighter()

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadokuen";
  }
  get name(): string {
    return "Ryu";
  }
}
class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightning Kick";
  }
  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
ryu.fight();
const chunLi = new ChunLi();
chunLi.fight();
