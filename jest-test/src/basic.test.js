import { findMax, twoSum } from './basic'

// 期望findMax([2, 6, 3])执行后结果为6
test('findMax([2, 6, 3])', () => {
    expect(findMax([2, 6, 3])).toBe(6)
})

// 期望twoSum([2, 3, 4, 6], 10)执行后结果为true

// 我们发现并没有通过测试，这是因为，toBe可以判断基本类型数据，但是对于数组，对象这样的引用类型是没办法判断的，这个时候，我们就需要使用toEqual

test('twoSum([2, 3, 4, 6], 10)', () => {
    expect(twoSum([2, 3, 4, 6], 10)).toEqual([2, 3])
})