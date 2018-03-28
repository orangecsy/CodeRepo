'''
目的：归并排序数组
算法：利用递归的方法，如长度为1则直接返回，否则分为两组left和right，
再将left和right分别归并排序。返回的结果是两组已排好的子列，将两子列
从头遍历，比较头元素大小，进行合并。
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(nlogn)
'''

def merge(left, right):
    res = []
    while len(left)>0 and len(right)>0:
        if left[0]<right[0]:
            res.append(left.pop(0))
        else:
            res.append(right.pop(0))
    if len(left)>0:
        res = res+left
    elif len(right)>0:
        res = res+right
    return res


def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    middle_index = len(arr)//2
    left = merge_sort(arr[:middle_index])
    right = merge_sort(arr[middle_index:])
    return merge(left, right)


if __name__ == '__main__':
    print(merge_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))