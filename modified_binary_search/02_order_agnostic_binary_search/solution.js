function search(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let ascending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      if (ascending) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      // arr[mid] > target
      if (ascending) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

// ###########################################################
console.log("------------------------------------------------");
let output = search([1, 2, 5, 10, 40], 10);
let expected_output = 3;
console.log(`Expected Output ${expected_output}, Received Output = ${output}`);

console.assert(output === expected_output),
  `Incorrect output. Expected ${expected_output}, received ${output}`;

// ###########################################################
console.log("------------------------------------------------");
output = search([40, 10, 5, 2, 1], 10);
expected_output = 1;
console.log(`Expected Output ${expected_output}, Received Output = ${output}`);

console.assert(output === expected_output),
  `Incorrect output. Expected ${expected_output}, received ${output}`;

// ###########################################################
console.log("------------------------------------------------");
output = search([10, 8, 2, -9], -1);
expected_output = -1;
console.log(`Expected Output ${expected_output}, Received Output = ${output}`);
console.assert(output === expected_output),
  `Incorrect output. Expected ${expected_output}, received ${output}`;

// ###########################################################
