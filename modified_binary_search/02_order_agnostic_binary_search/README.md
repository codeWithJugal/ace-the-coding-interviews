# Order Agnostic Binary Search

## [YouTube Video Explanation](https://youtu.be/7nGUhmRfw2U)

*Given an array of integers sorted either in ascending order or descending order, and an integer target,<Br>
write a function to search target in the array. If target exists, then return its index. Otherwise, return -1. <Br>*

***Note:<Br>***
*We Don't know if the array is sorted in ascending or descending order before hand.*

##

```
arr: [1, 2, 5, 10, 40]
target: 10
output: 3
Explanation: 10 exists in the array at index 3
```

```
arr: [40, 10, 5, 2, 1]
target: 10
output: 1
Explanation: 10 exists in the array at index 1
```

```
arr: [10, 8, 2, -9]
target: -1
output: -1
Explanation: -1 doesn't exist in the array. So we return -1
```

### Additional information:

1. All the numbers in the array are unique. (No Duplicates)
2. Array is sorted in the ascending or descending order.

### Desired Complexities
1) ***Time***: O(log(n))
2) ***Memory*** O(1)


## Click For [YouTube Video Explanation](https://youtu.be/7nGUhmRfw2U)
