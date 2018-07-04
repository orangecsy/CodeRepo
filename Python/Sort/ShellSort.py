'''
目的：希尔排序数组
算法：shell_sort中先取数组长度的1/2作为步长gap，遍历gap至结尾的元素，
进行插入排序insert_sort，之后取gap除2，重复遍历，直到gap=0
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(n) 空间复杂度：O(nsqrt(n))
算法不稳定
'''

def insert_sort(arr, i, gap):
    now = arr[i]
    pos = i
    while pos >= gap and arr[pos-gap] > now:
        arr[pos] = arr[pos-gap]
        pos = pos-gap
    arr[pos] = now


def shell_sort(arr):
    gap = len(arr)//2
    while gap > 0:
        for i in range(gap, len(arr)):
            insert_sort(arr, i, gap)
        gap = gap//2
    return arr


if __name__ == '__main__':
    print(shell_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))