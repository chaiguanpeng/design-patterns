/**
 * 单一职责原则
 * 拆的过于细，就有可能降低内聚性。
 */
export {};
class Product {
  public name: string;
  public price: number;
  public category: Category;
//   public updateProduct(propName,propPrice) {} 不建议，每个功能要单一，
  public updateName() {}
  public updatePrice() {}
  public updateCategory() {}
}
class Category {
  public name: string;
  public icon: string;
}