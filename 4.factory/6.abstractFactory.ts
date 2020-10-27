/**
 * 抽象工厂模式
 * 就是把创建产品的工作交由具体工厂类来实现
 */
export {};
abstract class AmericanoCoffee {}
abstract class LatteCoffee {}
abstract class CappuccinoCoffee {}

class StarBuckAmericanoCoffee extends AmericanoCoffee {}
class LuckinAmericanoCoffee extends AmericanoCoffee {}
class StarBuckLatteCoffee extends AmericanoCoffee {}
class LuckinLatteCoffee extends AmericanoCoffee {}
class StarBuckCappuccinoCoffee extends AmericanoCoffee {}
class LuckinCappuccinoCoffee extends AmericanoCoffee {}

// 抽象工厂里需要三方法
abstract class CafeFactory {
  abstract createAmericanoCoffee(): AmericanoCoffee;
  abstract createLatteCoffee(): AmericanoCoffee;
  abstract createCappuccinoCoffee(): AmericanoCoffee;
}

class StarBucksCafeFactory extends CafeFactory {
  createAmericanoCoffee() {
    return new StarBuckAmericanoCoffee();
  }
  createLatteCoffee() {
    return new StarBuckLatteCoffee();
  }
  createCappuccinoCoffee() {
    return new StarBuckCappuccinoCoffee();
  }
}

class LuckinCafeFactory extends CafeFactory {
  createAmericanoCoffee() {
    return new LuckinAmericanoCoffee();
  }
  createLatteCoffee() {
    return new LuckinLatteCoffee();
  }
  createCappuccinoCoffee() {
    return new LuckinCappuccinoCoffee();
  }
}
let luckinCafeFactory = new LuckinCafeFactory();
console.log(luckinCafeFactory.createAmericanoCoffee())
