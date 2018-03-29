'''
目的：快速排序数组
算法：利用递归的思想，设第一个元素为中间值，从第二个元素开始遍历，
当小于中间值时放到左边，大于中间值时放到右边。然后对左右分别递归，
最后返回合并后的数组。
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(nlogn)
稳定性：不稳定
'''

def fast_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        middle_value = arr[0]
        left = []
        middle = [middle_value]
        right = []
        for i in arr[1:]:
            if i<middle_value:
                left.append(i)
            elif i>middle_value:
                right.append(i)
            else:
                middle.append(i)
        left = fast_sort(left)
        right = fast_sort(right)
        return left+middle+right


if __name__ == '__main__':
    print(fast_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))

