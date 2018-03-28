'''
目的：冒泡排序数组
算法：从头至尾遍历数组，发现位置i之后的值有比i处值低的就相互交换
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(n^2) 空间复杂度：O(1)
'''

def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[j]<arr[i]:
                arr[i], arr[j] = arr[j], arr[i]
    return arr

if __name__ == '__main__':
    print(bubble_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))