'''
目的：用最少的比较次数找到数组内的最大最小值
算法：分治法，首末放指针，同时向中间遍历，比较指针处两值大小，再与当前最大值最小值比较
输入：输入
输出：最大值，最小值，比较次数
'''

def find_max_min(arr):
    left = 0
    right = len(arr) - 1
    maxRes = arr[0]
    minRes = arr[0]
    campareCount = 0
    while left <= right:
        if arr[left] < arr[right]:
            maxTemp = arr[right]
            minTemp = arr[left]
        else:
            maxTemp = arr[left]
            minTemp = arr[right]
        campareCount += 1
        if maxTemp > maxRes:
            maxRes = maxTemp
        if minTemp < minRes:
            minRes = minTemp
        campareCount += 2
        left += 1
        right -= 1
    return maxRes, minRes, campareCount


if __name__ == '__main__':
    print(find_max_min([3, 7, 4, 1, 2, 9, 5, 8, 6]))#9, 1, 15
        
