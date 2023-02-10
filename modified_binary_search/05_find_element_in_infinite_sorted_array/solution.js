class ValueReader {
  constructor(arr) {
    this.arr = arr;
  }

  get_value(index) {
    if (index >= this.arr.length) {
      return Infinity;
    }
    else { return this.arr[index]; }
  }
}


function search(value_reader, target) {
  if (value_reader.get_value(0) === Infinity) {
    return -1;
  }
  if (value_reader.get_value(0) === target) {
    return 0;
  }

  let start = 0;
  let end = 1;
  while (value_reader.get_value(end) < target) {
    end = (end + 1) ** 2;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (value_reader.get_value(mid) === target) {
      return mid;
    } else if (value_reader.get_value(mid) > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}


/* -------------------------------- Example 1 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 1 -------------------------------");
let arr = new ValueReader([2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56])
let target = 30
let expected_output = 9;
let received_output = search(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 2 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 2 -------------------------------");
arr = new ValueReader([2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56])
target = 8
expected_output = 3
received_output = search(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 3 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 3 -------------------------------");
arr = new ValueReader([2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56])
target = 105
expected_output = -1
received_output = search(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)

/* -------------------------------- Example 4 ------------------------------- */
console.log("\n")
console.log("-------------------------------- Example 4 -------------------------------");
arr = new ValueReader([])
target = 5
expected_output = -1
received_output = search(arr, target);
console.log(
  `expected output = ${expected_output.toString()} received output = ${received_output.toString()}`
);
console.assert(expected_output.toString() === received_output.toString(), `incorrect output. expected ${expected_output}, received ${received_output}`)
