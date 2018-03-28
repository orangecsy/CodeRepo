'''
目的：插入排序数组
算法：从头至尾遍历数组，遍历至位置i时，将i处的值与1至i-1的值
进行比较，找到第一个大于它的元素，将i处的值插入到该处并删除i位置元素
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(n^2) 空间复杂度：O(1)
'''

def arr_sort(arr):
    for i in range(1, len(arr)):
        for j in range(i):
            if arr[i]<arr[j]:
                arr.insert(j, arr.pop(i))
                break
    return arr

if __name__ == '__main__':
    print(arr_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))