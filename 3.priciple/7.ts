/**
 * 依赖倒置原则
 * 依赖抽象而不依赖具体实现
 */

interface Girlfriend {
  age: number;
  height: number;
  cook(): void;
}
class LinZhiLing implements Girlfriend {
  age: number = 35;
  height: number = 178;
  cook() {
    console.log("泡面");
  }
}

class HanMeiMei implements Girlfriend {
  age: number = 35;
  height: number = 178;
  cook() {
    console.log("泡面");
  }
}
class SingleDog {
  constructor(public girlfriend: Girlfriend) {}
}

let dog1 = new SingleDog(new LinZhiLing());
let dog2 = new SingleDog(new HanMeiMei());
