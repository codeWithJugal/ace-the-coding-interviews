def search(arr: list, target: int, find_first_occurence=False):
    if len(arr) == 0:
        return -1

    start = 0
    end = len(arr) - 1
    index_of_interest = -1
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] == target:
            index_of_interest = mid
            if find_first_occurence:
                end = mid - 1
            else:
                start = mid + 1
        elif arr[mid] > target:
            end = mid - 1
        else:
            start = mid + 1
    return index_of_interest


def search_range(arr: list, target: int):
    # Write your code here.
    first_occurence = search(arr, target, find_first_occurence=True)
    if first_occurence == -1:
        return [-1, -1]
    last_occurence = search(arr, target, find_first_occurence=False)
    return [first_occurence, last_occurence]


if __name__ == "__main__":

    # --------------------------------- Example 1 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 1 --------------------------------"
    )
    arr = [1, 2, 6, 6, 6, 6, 67, 123, 125]
    target = 6
    expected_output = [2, 5]
    received_output = search_range(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 2 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 2 --------------------------------"
    )
    arr = [1, 2, 6, 6, 6, 6, 67, 123, 125]
    target = 67
    expected_output = [6, 6]
    received_output = search_range(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 3 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 3 --------------------------------"
    )
    arr = [1, 2, 6, 6, 6, 6, 67, 123, 125]
    target = 195
    expected_output = [-1, -1]
    received_output = search_range(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"

    # --------------------------------- Example 4 -------------------------------- #
    print("\n")
    print(
        "--------------------------------- Example 4 --------------------------------"
    )
    arr = []
    target = 5
    expected_output = [-1, -1]
    received_output = search_range(arr, target)
    print(f"Expected Output = {expected_output}, Received Output = {received_output}")
    assert (
        expected_output == received_output
    ), f"Incorrect output. Expected {expected_output}, received {received_output}"
