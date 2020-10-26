/** 
 * 1、public 自己 自己的子类 其它都可以访问
 * 2、泛化关系，鸟是动物的子类。鸟到动物是泛化的
 * 3、接口实现，
*/
export {}
class Water{

}

class Animal{
    public age: number;
    public name: string;
    // 类的依赖关系在代码中的关系是属性关系，这就是依赖关系。动物依赖于水
    public water: Water;
    public eat(){

    }
    public drink(){

    }
}
// 接口是行为的抽向
interface Eggs{
    giveEggs(): number;
}


class Bird extends Animal implements Eggs{
    public swing: number;
    public fly(){

    }
    giveEggs(){
        return 2;
    }
}
// 唐老鸭继承鸟 关联关系
class TangFather{ }
class TangFriend{ }
class TangWife{ }
class TangChild{ }
class TangHouse{ }
class TangDuck extends Bird{
    public father: TangFather;
    public friends: Array<TangFriend>;
    public wife: TangWife;
    public children: Array<TangChild>;
    public house: Array<TangHouse>
}

/**
 * 1、组合关系，大雁、大雁肾
 * 2、聚合关系，大雁、大雁群
 *  */ 

 class BigBirdKidney{ }

 class BigBird extends Bird{
     public kidney: Array<BigBirdKidney>;
 }
 class BigBirdGroup{
     public birds: Array<BigBird>
 }