'''
目的：基数排序数组
算法：
输入：待排序数组，如：[3, 7, 4, 8, 6, 1, 5, 2, 9]
输出：已排序好数组，如：[1, 2, 3, 4, 5, 6, 7, 8, 9]
时间复杂度：O(d(r+n)) 空间复杂度：O(rd+n)
算法稳定
'''

def radix_sort(arr):
    if len(arr) == 0:
        return
    if len(arr) == 1:
        return arr
    tempList = arr
    maxNum = max(arr)
    radix = 10
    while maxNum * 10 > radix:
        newArr = [[], [], [], [], [], [], [], [], [], []]
        for n1 in tempList:
            testnum = n1 % radix
            testnum = testnum // (radix / 10)
            for n2 in range(10):
                if testnum == n2:
                    newArr[n2].append(n1)
        tempList = []
        for i in range(len(newArr)):
            for j in range(len(newArr[i])):
                tempList.append(newArr[i][j])
        radix *= 10
    return tempList


if __name__ == '__main__':
    print(radix_sort([3, 7, 4, 8, 6, 1, 5, 2, 9]))