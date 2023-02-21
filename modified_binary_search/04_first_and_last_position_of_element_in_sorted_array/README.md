# First And Last Position of the Sorted Array (Search Range)

## [YouTube Video Explanation](https://youtu.be/i-B6PEg-qF4)

*Given a sorted array of numbers in ascending order with possible duplicate and a number **"target"**. <Br> Write a function that finds the first and the last occurences of the target in the array. If no such target exists, return [-1, -1]*


```
arr: [1, 2, 6, 6, 6, 6, 67, 123, 125]
target: 6

output: [2, 5]
Explanation: The first occurence of target 6 is at index 2 and the last occurence is at index 5.

```

```
arr: [1, 2, 6, 6, 6, 6, 67, 123, 125]
target: 67

output: [6, 6]
Explanation: The target 67 appears only once in the array at index 6.
```

```
arr: [1, 2, 6, 6, 6, 6, 67, 123, 125]
target: 195

output: [-1, -1]
Explanation: The target 195 doesn't exist in the array.
```

```
arr: []
target: 5

output: [-1, -1]
Explanation: The target 5 doesn't exist in the array.
```


### Additional Information:

1. The array might have duplicates
2. Array is sorted in the ascending order.


### Desired Complexities
1) ***Time***: O(log(n))
2) ***Memory*** O(1)

## Click For [YouTube Video Explanation](https://youtu.be/i-B6PEg-qF4)
