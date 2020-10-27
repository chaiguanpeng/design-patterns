/**
 * 工厂方法
 * 就是把创建产品的工作交由具体工厂类来实现
 */
export {};
abstract class Coffee {
  constructor(public name: string) {}
}
class AmericanoCoffee extends Coffee {}
class LatteCoffee extends Coffee {}
class CappuccinoCoffee extends Coffee {}

abstract class CafeFactory {
  abstract createCoffee(): Coffee;
}

class AmericanoCoffeeFactory extends CafeFactory {
  createCoffee() {
    return new AmericanoCoffee("美式咖啡");
  }
}
class LatteCoffeeFactory extends CafeFactory {
  createCoffee() {
    return new LatteCoffee("拿铁咖啡");
  }
}
class CappuccinoCoffeeFactory extends CafeFactory {
  createCoffee() {
    return new CappuccinoCoffee("卡布奇诺咖啡");
  }
}

let americanoCoffeeFactory = new AmericanoCoffeeFactory();
console.log(
  "CappuccinoCoffee -> americanoCoffeeFactory",
  americanoCoffeeFactory.createCoffee()
);
let latteCoffeeFactory = new LatteCoffeeFactory();
console.log(
  "CappuccinoCoffee -> latteCoffeeFactory",
  latteCoffeeFactory.createCoffee()
);
let cappuccinoCoffeeFactory = new CappuccinoCoffeeFactory();
console.log("cappuccinoCoffeeFactory", cappuccinoCoffeeFactory.createCoffee());
