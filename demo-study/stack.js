// 栈，内存区域：栈区
// 内存中的堆栈跟数据结构中的堆栈不是一个东西

// 栈是一种受限制的线性表，它遵循后进先出 lifo

// 栈应用 汉诺塔 平衡圆括号 禁止转换

class stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items.push(element);
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const res = this.items[this.count];
    delete this.items[this.count];
    return res;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`; // {1}
    for (let i = 1; i < this.count; i++) {
      // {2}
      objString = `${objString},${this.items[i]}`; // {3}
    }
    return objString;
  }
}
