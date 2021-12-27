// js 扁平tree

let tree = [
  {
      "id": 1,
      "name": "1",
      "pid": 0,
      "children": [
          {
              "id": 2,
              "name": "2",
              "pid": 1,
              "children": []
          },
          {
              "id": 3,
              "name": "3",
              "pid": 1,
              "children": [
                 {
                   "id": 4,
                   "name": "4",
                   "pid": 3,
                   "children": []
                 }
              ]
          }
      ]
  }
]


function treeToArray(tree) {
  return tree.reduce((res, item) => {
    const { children, ...i } = item
    console.log(i,"i")
    return res.concat(i, children && children.length ? treeToArray(children) : [])
  }, [])
}
treeToArray(tree)
// console.log(treeToArray(tree))


function arrayToTree(items) {
  let res = [] // 存放结果集
  let map = {}

  // 先转成map存储
  for (const i of items) {
      map[i.id] = { ...i, children: [] }
  }

  for (const i of items) {
      const newItem = map[i.id]
      if (i.pid === 0) {
          res.push(newItem)
      } else {
          if (Object.prototype.hasOwnProperty.call(map, i.pid)) {
              map[i.pid].children.push(newItem)
          }
      }
  }
  return res
}




