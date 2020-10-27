function createElement(type: any, config: any) {
    return { type, props: config }
}
function createFactory(type: String) {
    const factory = createElement.bind(null, type);
    return factory
}
let factory = createFactory("h1");
let element = factory({ id: 'h1', className: 'title' });
console.log("element", element)
