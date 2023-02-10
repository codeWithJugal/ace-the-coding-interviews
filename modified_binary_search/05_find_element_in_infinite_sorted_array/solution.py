import math


class ValueReader:
    def __init__(self, arr):
        self.arr = arr

    def get_value(self, index):
        if index >= len(self.arr):
            return math.inf
        else:
            return self.arr[index]


def search(value_reader: ValueReader, target: int):

    # Edge cases
    # if the element at index 0th index is math.inf then, the array is empty. Return -1
    # if the element at index 0th index is equal to the target, return 0th index
    if value_reader.get_value(0) == math.inf:
        return -1
    if value_reader.get_value(0) == target:
        return 0

    start = 0
    end = 1
    # find the upperbound of the range for our target
    while value_reader.get_value(end) < target:
        end = (end + 1) ** 2

    while start <= end:
        mid = (start + end) // 2
        if value_reader.get_value(mid) == target:
            return mid
        elif value_reader.get_value(mid) > target:
            end = mid - 1
        else:
            start = mid + 1
    return -1


if __name__ == "__main__":

    # --------------------------------- Example 1 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 1 --------------------------------"
    )
    arr = ValueReader([2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56])
    target = 30
    expected_output = 9
    received_output = search(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 2 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 2 --------------------------------"
    )
    arr = ValueReader([2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56])
    target = 8
    expected_output = 3
    received_output = search(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 3 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 3 --------------------------------"
    )
    arr = ValueReader([2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56])
    target = 105
    expected_output = -1
    received_output = search(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 4 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 4 --------------------------------"
    )
    arr = ValueReader([])
    target = 5
    expected_output = -1
    received_output = search(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"
