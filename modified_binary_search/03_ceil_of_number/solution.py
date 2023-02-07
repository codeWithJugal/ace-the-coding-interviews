def ceil_of_a_number(arr: list, target: int):
    # Write your code here.
    if len(arr) == 0 or target > arr[len(arr) - 1]:  # arr[-1]
        return -1
    # For Search Insert Position Problem, we insert the target at the end of the array
    #   return len(arr)

    start = 0
    end = len(arr) - 1
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return start


if __name__ == "__main__":

    ###########################################################

    print("------------------------------------------------")
    output = ceil_of_a_number([1, 3, 5, 6], 5)
    expected_output = 2
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################

    print("------------------------------------------------")
    output = ceil_of_a_number([1, 3, 5, 6], 2)
    expected_output = 1
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################

    print("------------------------------------------------")
    output = ceil_of_a_number([1, 3, 5, 6], 7)
    expected_output = -1
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################

    print("------------------------------------------------")
    output = ceil_of_a_number([], 5)
    expected_output = -1
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################
