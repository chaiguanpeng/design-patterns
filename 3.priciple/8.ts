import { AnyAction, createStore } from "redux";
let store = createStore((state) => state);
interface MyAction extends AnyAction {
  age: number;
}
class My2Action implements AnyAction {
  [extraProps: string]: any;
  type: any;
}
let action: MyAction = {
  type: "increment",
  age: 10,
};
store.dispatch(action);
