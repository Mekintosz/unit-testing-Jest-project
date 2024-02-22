export default function analyzeArray(array) {
    const sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);

      array.sort()

      const length = array.length

      const average = sum / length

      const min = array[0]

      const max = array[array.length-1]

      return { average, min, max, length }     
}