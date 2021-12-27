// 插入排序
function insertSort(arr) {
  var tmp;
  for (var i = 1; i < arr.length; i++) {
    tmp = arr[i];
    for (var j = i; j >= 0; j--) {
      if (arr[j - 1] > tmp) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = tmp;
        break;
      }
    }
  }
  return arr;
}

// 选择排序
function selectSort(array) {
  var length = array.length,
    i,
    j,
    minIndex,
    minValue,
    temp;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    minValue = array[minIndex];
    for (j = i + 1; j < length; j++) {
      //通过循环选出最小的
      if (array[j] < minValue) {
        minIndex = j;
        minValue = array[minIndex];
      }
    }
    // 交换位置
    temp = array[i];
    array[i] = minValue;
    array[minIndex] = temp;
  }
  return array;
}

// 归并排序
function merge(left, right) {
  var tmp = [];

  while (left.length && right.length) {
    if (left[0] < right[0])
      tmp.push(left.shift());
    else
      tmp.push(right.shift());
  }

  return tmp.concat(left, right);
}

function mergeSort(a) {
  if (a.length === 1) 
    return a;

  var mid = Math.floor(a.length / 2)
    , left = a.slice(0, mid)
    , right = a.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// 冒泡排序
function bubbleSort(arr){
  var len=arr.length;
  for(var i=len-1;i>0;i--){
      for(var j=0;j<i;j++){
          if(arr[j]>arr[j+1]){
              var tmp = arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=tmp
          }
      }
  }
  return arr;
}