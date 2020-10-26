- 以类和对象作为组织代码的基本单位，并实现封装、抽象、继承、多态四个特性
- 软件开发经历分析、设计和编码三个阶段
    - 面向对象分析(OOA) Object Oriented Analysis
    - 面向对象设计(OOD) Object Oriented Design
    - 面向对象编程(OOP)Object Oriented Programming

- code两种写法一致

```
写法1
class UserInfo {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let userInfo = new UserInfo("zhufeng");
console.log(userInfo.name);

写法2

class UserInfo {
  constructor(name: string) {
    this.name = name;
  }
}
let userInfo = new UserInfo("zhufeng");
console.log(userInfo.name);

```