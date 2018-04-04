'''
目的：堆排序数组
算法：将堆中所有数据重新排序，使其成为最大堆。移除第一个元素的根节点，利用递归调整堆
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(nlogn) 空间复杂度：O(1)
算法不稳定
'''

def max_heap(arr, first, end):
    root = first
    while True:
        child = root*2 + 1
        if child > end:
            break
        if child + 1 <= end and arr[child]<arr[child+1]:
            child = child + 1
        if arr[root] < arr[child]:
            arr[root], arr[child] = arr[child], arr[root]
            root = child
        else:
            break


def heap_sort(arr):
    arr_len = len(arr)
    first = int(len(arr)/2-1)
    for i in range(first, -1, -1):
        max_heap(arr, i, arr_len-1)
    for i in range(arr_len-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        max_heap(arr, 0, i-1)
    return arr


if __name__ == '__main__':
    print(heap_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))