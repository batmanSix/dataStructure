// 栈，内存区域：栈区
// 内存中的堆栈跟数据结构中的堆栈不是一个东西

// 栈是一种受限制的线性表，它遵循后进先出 lifo

// 栈应用 汉诺塔 平衡圆括号 禁止转换

// 尾调用：一个函数的最后一步调用另外一个函数

// 尾递归：尾调用自身，尾递归， 递归是非常耗费内存的，因为需要同时保存很多个调用帧，尾递归只存在一个调用帧

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
