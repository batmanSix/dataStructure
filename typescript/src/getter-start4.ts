export { }

// 元祖


const tuple: [number, string] = [12, "s"]

const age = tuple[0]

const sex = tuple[1]

// 使用数组解构 的方式
const [x, y] = tuple


// 枚举类型 在js 中模拟实现枚举


enum poste {
  daft = 1,
  publish = 1,
  unpublish = 2
}
const post = {
  title: '1',
  number: 1,
  status: poste.daft
}
