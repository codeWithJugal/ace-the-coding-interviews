# Ceiling in a sorted array

## [YouTube Video Explanation](https://youtu.be/S_QI58rQ0qE)

*Write a function that takes a sorted array of numbers in ascending order and a number **"target"**. <Br> The function should return the index of the ceiling of the target. The ceiling of the target is the smallest element equal to or greater than the target. If no such number exists, return -1.*


```
arr: [1, 3, 5, 6]
target: 5

output: 2
Explanation: The Smallest number greater than or equal to 5 is 5 at index 2.

```

```
arr: [1, 3, 5, 6]
target: 2

output: 1
Explanation: The Smallest number greater than 2 is 3 at index 1.
```

```
arr: [1, 3, 5, 6]
target: 7

output: -1
Explanation: There is no number greater than or equal to 7 in the array.
```

```
arr: []
target: 5

output: -1
Explanation: There is no number greater than or equal to 5 in the array.
```


# Search Index Position (Similar Question)
*Write a function that takes a sorted array of numbers in ascending order and a number "target". <Br> The function should return the index of the target if found in the array. <Br> If no such number exists, return the index of where the target should be inserted in array in sorted order.*

```
arr: [1, 3, 5, 6]
target: 5

output: 2
Explanation: The target 5 is found at index 2.

```

```
arr: [1, 3, 5, 6]
target: 2

output: 1
Explanation: The target 2 should be inserted between elements 1 and 3 at index 1.
```

```
arr: [1, 3, 5, 6]
target: 7

output: 4
Explanation: The target 7 should be inserted at the end of the array at index 4.
```

```
arr: []
target: 5

output: -1
Explanation:  The target 5 should be inserted at the end of the array at index 0.
```

### additional information:

1. All the numbers in the array are unique. (No Duplicates)
2. Array is sorted in the ascending order.


### Desired Complexities
1) ***Time***: O(log(n))
2) ***Memory*** O(1)

## Click For [YouTube Video Explanation](https://youtu.be/S_QI58rQ0qE)
