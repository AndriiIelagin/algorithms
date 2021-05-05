// Bubble sort
const data = [5, 1, 4, 2, 8, 9]

const bubbleSort = array => {
  let sortedArray = [...array]
  const n = array.length
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let a = array[j]
      let b = array[j + 1]
      if(a > b) {
        let transitionalValue = sortedArray[i]
        sortedArray[i] = sortedArray[i + 1]
        sortedArray[i + 1] = transitionalValue
      }
    }
  }

  return sortedArray
}

const sorted = bubbleSort(data)
console.log(sorted)
