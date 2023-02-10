function search(arr, target, find_first_occurrence = false) {
  if (arr.length === 0) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
  let index_of_interest = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      index_of_interest = mid;
      if (find_first_occurrence) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return index_of_interest;
}

function searchRange(arr, target) {
  let first_occurrence = search(arr, target, true);
  if (first_occurrence === -1) {
    return [-1, -1];
  }
  let last_occurrence = search(arr, target, false);
  return [first_occurrence, last_occurrence];
}


/* -------------------------------- Example 1 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 1 -------------------------------");
let arr = [1, 2, 6, 6, 6, 6, 67, 123, 125]
let target = 6
let expected_output = [2, 5];
let received_output = searchRange(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 2 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 2 -------------------------------");
arr = [1, 2, 6, 6, 6, 6, 67, 123, 125]
target = 67
expected_output = [6, 6];
received_output = searchRange(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 3 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 3 -------------------------------");
arr = [1, 2, 6, 6, 6, 6, 67, 123, 125]
target = 195
expected_output = [-1, -1];
received_output = searchRange(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 4 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 4 -------------------------------");
arr = []
target = 5
expected_output = [-1, -1];
received_output = searchRange(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)
