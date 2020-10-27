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

// 原来是在简单工厂里，是由Factory来创建产品的
// 在工厂方法里，不再由Factory来创建产品，而是先创建具体的工厂，然后具体的工厂来创建产品
class Factory {
    static order(name: string) {
      switch (name) {
        case "Americano":
          return new AmericanoCoffeeFactory().createCoffee();
        case "LatteCoffee":
          return new LatteCoffeeFactory().createCoffee();
        case "Cappuccino":
          return new CappuccinoCoffeeFactory().createCoffee();
        case "Flower":
        default:
          throw new Error("你点的咖啡我们不支持");
      }
    }
  }
