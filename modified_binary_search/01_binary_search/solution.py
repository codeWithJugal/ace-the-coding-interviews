def search(arr: list, target: int):
    # Write your code here.
    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:  # case 1
            return mid
        elif arr[mid] > target:  # case 2
            end = mid - 1
        else:  # case 3
            start = mid + 1

    return -1


if __name__ == "__main__":

    ###########################################################
    print("------------------------------------------------")
    output = search([-1, 0, 3, 5, 9, 12], 9)
    expected_output = 4
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################
    print("------------------------------------------------")
    output = search([-1, 0, 3, 5, 9, 12], 2)
    expected_output = -1
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################
