// javascript 运行机制

/** JavaScript单线程，同一个时间只能做一件事，线程是最小执行单元，进程是最小的资源管理单位 
 *  线程是从属于进程
 * 
 * 
 * 
 *
 */

/**  队列也是一种受限线性表，fifo（先进先出）
 *   只允许在表的前端进行添加，在表的后端进行增加操作
 *   队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新
 *   元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾
 *    
 *
 *
 *
 *
 */

class queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 入队
  enqueue(element) { 
    this.items[this.count] = element; 
    this.count++; 
    return this.items
  }

  // 出队
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // {1}
    delete this.items[this.lowestCount]; // {2}
    this.lowestCount++; // {3}
    return result; // {4}
  }

  // 查看队列元素
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 查看队尾
  rear() {
    if (this.isEmpty()) { 
      return undefined; 
    } 
    return this.items[this.lowestCount];
  }

  // 是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

let mydemo = new queue()
// console.log(mydemo.enqueue('11'))
// console.log(mydemo.enqueue('33'))

// console.log(mydemo.rear())
// console.log(mydemo.size())
// console.log(mydemo.isEmpty())
// console.log(mydemo.dequeue())
// console.log(mydemo.dequeue())
// console.log(mydemo.size())
console.log(mydemo.isEmpty())