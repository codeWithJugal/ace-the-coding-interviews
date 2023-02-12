function searchMinimumDiff(arr, target) {

  // Edge cases
  // 1). if arr is empty
  if (arr.length === 0) {
    return -1;
  }

  // 2). if target is smaller than first element of the array
  if (target < arr[0]) {
    return arr[0];
  }

  // 3). if target is greater than last element of the array
  if (target > arr[arr.length - 1]) {
    return arr[arr.length - 1];
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return arr[mid];
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop
  // start pointer points to the ceil of the target (smallest element that is greater than the target)
  // end pointer points to the floor of the target (largest element that is smaller than the target)
  if ((arr[start] - target) < (target - arr[end])) {
    return arr[start]
  }
  else {
    return arr[end]
  }
}


/* -------------------------------- Example 1 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 1 -------------------------------");

let arr = [1, 4, 8, 12, 17]
let target = 3
let expected_output = 4;
let received_output = searchMinimumDiff(arr, target);

console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 2 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 2 -------------------------------");

arr = [1, 4, 8, 12, 17]
target = 8
expected_output = 8;
received_output = searchMinimumDiff(arr, target);

console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 3 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 3 -------------------------------");

arr = [1, 4, 8, 12, 17]
target = 11
expected_output = 12;
received_output = searchMinimumDiff(arr, target);

console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 4 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 4 -------------------------------");

arr = [1, 4, 8, 12, 17]
target = 20
expected_output = 17;
received_output = searchMinimumDiff(arr, target);

console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)
