function search(arr, target) {
  // Write your code here.
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}


// ###########################################################
console.log("------------------------------------------------")
let output = search([-1, 0, 3, 5, 9, 12], 9)
let expected_output = 4
console.log(`Expected Output ${expected_output}, Received Output = ${output}`)

console.assert (
    output === expected_output
), `Incorrect output. Expected ${expected_output}, received ${output}`

// ###########################################################
console.log("------------------------------------------------")
output = search([-1, 0, 3, 5, 9, 12], 2)
expected_output = -1
console.log(`Expected Output ${expected_output}, Received Output = ${output}`)
console.assert (
    output === expected_output
), `Incorrect output. Expected ${expected_output}, received ${output}`

// ###########################################################
