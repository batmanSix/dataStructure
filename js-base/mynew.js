function _new(){
  const obj = new Object()
  const Constructor = [].shift.call(arguments);
  console.log(Constructor,"Constructor")
  obj.__proto__ = Constructor.prototype;

  const ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj;
}

function person(name, age) {
  this.name = name
  this.age = age
}

function demo(name,age){
  this.name = name
  this.age = age
}

let p = _new(person, '布兰', 12)

console.log(p)  // { name: '布兰', age: 12 }

let d = new demo('2',18)
console.log(d)