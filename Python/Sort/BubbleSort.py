'''
目的：冒泡排序数组
算法：第一次遍历整个数组，两两比较找到最大值，第二次遍历
前n-1个元素，两两比较找到最大值，依次遍历直到排序完成
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(n^2) 空间复杂度：O(1)
算法稳定
'''

def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(1, len(arr)-i):
            if arr[j-1]<arr[j]:
                arr[j], arr[j-1] = arr[j-1], arr[j]
    return arr

if __name__ == '__main__':
    print(bubble_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))