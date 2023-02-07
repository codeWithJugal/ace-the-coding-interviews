function ceil_of_a_number(arr, target) {
  if (arr.length === 0 || target > arr[arr.length - 1]) {
    return -1;
    // For Search Insert Position Problem, we insert the target at the end of the array
    //   return arr.length;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

console.log("------------------------------------------------");
let output = ceil_of_a_number([1, 3, 5, 6], 5);
let expected_output = 2;
console.log(
  `Expected Output = ${expected_output}, Received Output = ${output}`
);
if (output !== expected_output) {
  console.error(
    `Incorrect output. Expected ${expected_output}, received ${output}`
  );
}

console.log("------------------------------------------------");
output = ceil_of_a_number([1, 3, 5, 6], 2);
expected_output = 1;
console.log(
  `Expected Output = ${expected_output}, Received Output = ${output}`
);
if (output !== expected_output) {
  console.error(
    `Incorrect output. Expected ${expected_output}, received ${output}`
  );
}

console.log("------------------------------------------------");
output = ceil_of_a_number([1, 3, 5, 6], 7);
expected_output = -1;
console.log(
  `Expected Output = ${expected_output}, Received Output = ${output}`
);
if (output !== expected_output) {
  console.error(
    `Incorrect output. Expected ${expected_output}, received ${output}`
  );
}

console.log("------------------------------------------------");
output = ceil_of_a_number([], 5);
expected_output = -1;
console.log(
  `Expected Output = ${expected_output}, Received Output = ${output}`
);
if (output !== expected_output) {
  console.error(
    `Incorrect output. Expected ${expected_output}, received ${output}`
  );
}
