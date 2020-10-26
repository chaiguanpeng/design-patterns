interface Running {
  run(): void;
}
interface Flying {
  fly(): void;
}
interface Swimming {
  swim(): void;
}
/**
 * 不推荐，原因如下
 * 1、为了复用
 * 2、为了低耦合
 * 3、为了单一职责
 */
interface AutomobileInterface {
  run(): void;
  fly(): void;
  swim(): void;
}

class Automobile implements Running, Flying, Swimming {
  run() {}
  fly() {}
  swim() {}
}
