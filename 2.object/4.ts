/**
 * 多态是指，子类可以替换父类
 * 保持子类的开放性和灵活性，可以重写父类中的方法
 * 实现面向接口编程
 */
/*
 *可以写成抽象类

 abstract class Animal{
    abstract speak():void;
}
 */

export{}
class Animal{
    speak(){
        throw new Error('此方法必须由子类实现')
    }
}
class Dog extends Animal{
    speak(){
        console.log('汪汪汪');
    }
}
class Cat extends Animal{
    speak(){
        console.log('喵喵喵');
    }
}

function talk(animal:Animal){
    animal.speak();
}
talk(new Dog());
talk(new Cat());