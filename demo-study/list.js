// 链表
/**
 *   链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个
     元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。下图展
    示了一个链表的结构
 * 
 *  相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。然
    而，链表需要使用指针，因此实现链表时需要额外注意。在数组中，我们可以直接访问任何位置
    的任何元素，而要想访问链表中间的一个元素，则需要从起点（表头）开始迭代链表直到找到所
    需的元素。
 * 
 *  优点：
      （1）插入和删除速度快，保留原有的物理顺序，在插入或者删除一个元素的时候，只需要改变指针指向即可。
      （2）没有空间限制,存储元素无上限,只与内存空间大小有关. 
      （3）动态分配内存空间，不用事先开辟内存
      （4)是内存的利用率变高

              
    缺点：
      （1）占用额外的空间以存储指针，比较浪费空间，不连续存储，malloc函数开辟空间碎片比较多)
      （2）查找速度比较慢，因为在查找时，需要循环链表。
          时间复杂度 :查找操作为O(n) ,插入和删除操作为O(1)。
 * 
 * 
 * 
 * */
// 判断元素是否相等
function defaultEquals(a, b) {
  return a === b;
}

// 内部node
class Vnode {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

// 单项链表
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element); // {1}
    let current; // {2}
    if (this.head == null) {
      // {3}
      this.head = node;
    } else {
      current = this.head; // {4}
      while (current.next != null) {
        // {5} 获得最后一项
        current = current.next;
      }
      // 将其 next 赋为新元素，建立链接
      current.next = node; // {6}
    }
    this.count++; // {7}
  }
  appendAt(position,element){
    
  }
  remove(){
    
  }

  indexOf(){

  }
}
