/**
 * 里氏替换原则
 * 尽可能用抽象类或父类
 * 任何在能使用父类的地方都要可以使用子类，子类不能重写父类的基本逻辑
 */
export {};
class AbstractDrink {
  getPrice(): any {
    return 1;
  }
  sum(a: number, b: number) {
    return a + b;
  }
}

class CocaCola extends AbstractDrink {
  getPrice() {
    return 3;
  }
  sum(a: number, b: number) {
    return 0;
  }
}
class Sprite extends AbstractDrink {
  getPrice() {
    return 4;
  }
}
class Fanta extends AbstractDrink {
  getPrice() {
    return 5;
  }
}
class Customer {
  drink(abstractDrink: AbstractDrink) {
    console.log("消费" + abstractDrink.getPrice());
  }
}

let c1 = new Customer();
c1.drink(new AbstractDrink());
c1.drink(new CocaCola());
c1.drink(new Sprite());
c1.drink(new Fanta());
