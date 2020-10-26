/**
 * 封装:可以把类的内部属性隐藏起来，不让外部直接访问
 * 1、可以提供类易用性
 * 2、可以保护类的隐私
 *
 */
export {}
class Animal{
    // 公有属性，可在本类、子类和其它类中访问
    public name:string;
    // 受保护，可在本类、子类。其它类不能访问
    protected age:number;
    // 私有的，在类的内部可以访问，子类和其它类无法访问
    private weight:number;
    constructor(name:string,age:number,weight:number){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}
class Person extends Animal{
    // 我这个人的账户余额 私有的，只有自己能访问
    private balance:number;
    constructor(name:string,age:number,weight:number,balance:number){
        super(name,age,weight);
        this.balance = balance;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight
    }
}
let p1 = new Person('zf',10,100,1000);
p1.name;
p1.age; // 不可以
p1.weight;