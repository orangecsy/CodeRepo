'''
目的：选择排序数组
算法：从头至尾遍历数组，记录i至结尾所有值中的最小值，与i进行交换
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(n^2) 空间复杂度：O(1)
稳定性：不稳定
'''

def select_sort(arr):
    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            if arr[j]<arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

if __name__ == '__main__':
    print(select_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))