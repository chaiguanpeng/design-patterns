/**
 * 继承，主要是实现代码复用
 * 缺点:全部继承，出现耦合，子类会全部继承父类
 */
// export
class Animal{
    name:string;
    eat(){
        console.log('吃东西')
    }
}
let animal = new Animal();
animal.eat();

class Dog extends Animal{

}
let dog = new Dog();
dog.eat();