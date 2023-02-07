def search(arr: list, target: int):
    # Write your code here.
    start = 0
    end = len(arr) - 1
    ascending = arr[start] < arr[end]
    while start <= end:
        mid = (start + end) // 2

        if arr[mid] == target:
            return mid

        elif arr[mid] < target:
            if ascending:
                start = mid + 1
            else:
                end = mid - 1
        else:  # arr[mid] > target
            if ascending:
                end = mid - 1
            else:
                start = mid + 1

    return -1


if __name__ == "__main__":

    ###########################################################

    print("------------------------------------------------")
    output = search([1, 2, 5, 10, 40], 10)
    expected_output = 3
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################

    print("------------------------------------------------")
    output = search([40, 10, 5, 2, 1], 10)
    expected_output = 1
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################

    print("------------------------------------------------")
    output = search([10, 8, 2, -9], -1)
    expected_output = -1
    print(f"Expected Output = {expected_output}, Received Output = {output}")
    assert (
        output == expected_output
    ), f"Incorrect output. Expected {expected_output}, received {output}"

    ###########################################################
