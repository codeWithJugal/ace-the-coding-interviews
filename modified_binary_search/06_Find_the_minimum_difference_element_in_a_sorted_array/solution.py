def search_minimum_diff(arr: list, target: int):

    # Edge cases
    # 1). if arr is empty
    if len(arr) == 0:
        return -1

    # 2). if target if smaller than first element of the array
    if target < arr[0]:
        return arr[0]

    # 3). if target if greater than last element of the array
    if target > arr[len(arr) - 1]:  # arr[-1]
        return arr[len(arr) - 1]  # arr[-1]

    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start + end) // 2

        if arr[mid] == target:
            return arr[mid]
        if arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1

    # at the end of the while loop
    # start pointer points to the ceil of the target (smallest element that is greater than the target)
    # end pointer points to the floor of the target (largest element that is smaller than the target)

    if (arr[start] - target) < (target - arr[end]):
        return arr[start]
    else:
        return arr[end]


if __name__ == "__main__":

    # --------------------------------- Example 1 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 1 --------------------------------"
    )
    arr = [1, 4, 8, 12, 17]
    target = 3
    expected_output = 4
    received_output = search_minimum_diff(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 2 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 2 --------------------------------"
    )
    arr = [1, 4, 8, 12, 17]
    target = 8
    expected_output = 8
    received_output = search_minimum_diff(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 3 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 3 --------------------------------"
    )
    arr = [1, 4, 8, 12, 17]
    target = 11
    expected_output = 12
    received_output = search_minimum_diff(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 4 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 4 --------------------------------"
    )
    arr = [1, 4, 8, 12, 17]
    target = 20
    expected_output = 17
    received_output = search_minimum_diff(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"
