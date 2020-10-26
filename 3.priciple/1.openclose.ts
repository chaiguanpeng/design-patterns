/**
 * 开放封闭原则：对扩展开放，对修改关闭
 *
 */

class Customer {
  constructor(public rank: string) {}
}
class Product {
  constructor(public name: string, public price: number) {}
  // 不同的顾客有不同的等级，普通会员、VIP会员、普通顾客，不同的等级打折不一样

  cost(customer: Customer) {
    switch (customer.rank) {
      case "member":
        return this.price * 0.8;
      case "vip":
        return this.price * 0.6;
      case "superVip":
        return this.price * 0.4;
      default:
        return this.price;
    }
  }
}

let product = new Product("笔记本电脑", 1000);
let member = new Customer("member");
let vip = new Customer("vip");
let guest = new Customer("guest");

let superVip = new Customer("superVip");
console.log("member", product.cost(member));
console.log("vip", product.cost(vip));
console.log("guest", product.cost(guest));
