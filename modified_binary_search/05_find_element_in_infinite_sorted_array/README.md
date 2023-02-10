# Find Element in Infinite Sorted Array

## [YouTube Video Explanation](https://youtu.be/S_QI58rQ0qE)

Given a sorted array with infinite numbers in ascending order and a number **"target"**. <Br> Write a function that finds the target in the array. If no such target exists, return -1

#### **NOTE:**
* The Array has infinite numbers. This means that the size of the array is unknow.
* Since it is complicated to simultate an array of infinite size, for the purpose of this example, we will use a `class ValueReader` that has a method `get_value` that accepts an index and returns the element of the array at that index.
 * If the Index is bigger than the array's size then `get_value` returns infinity i.e int.MAX_VALUE
  ```
   e.g) ValueReader.get_value(index)
  ```
  ``` 
    import math
    class ValueReader():

      def __init__(self, arr):
        self.arr = arr
    
      def get_value(self, index):
        if index >= len(arr):
          return math.inf
        else:
          return arr[index]
    
    value_reader = ValueReader([10, 20, 30, 40, 50])

    print(value_reader.get_value(2))
    >> 20
    print(value_reader.get_value(5))
    >> inf

  ```

### Examples

```
arr: [2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56]
 
target: 30
output: 9
Explanation: Target 30 is at index 9.

```

```
arr: [2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56]
 
target: 8
output: 3
Explanation: Target 8 is at index 3.
```

```
arr: [2, 4, 6, 8, 12, 16, 20, 22, 26, 30, 35, 40, 48, 56]
target: 105

output: -1 
Explanation: The target 105 doesn't exist in the array.
```

```
arr: []
target: 5

output: -1 
Explanation: The target 5 doesn't exist in the array.
```


### Additional Information:

1. Array is sorted in the ascending order.


### Desired Complexities
1) ***Time***: O(log(n))
2) ***Memory*** O(1)

## Click For [YouTube Video Explanation](https://youtu.be/S_QI58rQ0qE)
