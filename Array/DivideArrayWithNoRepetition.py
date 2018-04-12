'''
目的：划分数组，使得子串中没有重复元素
算法：数组长度n，构建n+1数组dp，dp[0]=1。dp[i]表示截取字符串长度为i时可能的划分数，
dp[i+1]为从i-1向前遍历，至不能满足条件的k，k至i-1的dp值的和。返回dp[-1]即为总的划分数。
输入：第一行数字序列长度，第二行数字序列，数字代表元素类别，如：6\n123321
输出：所有可能的划分数，如：16
'''

if __name__ == '__main__':
    n = int(raw_input())
    nArr = list(map(int, raw_input().split()))
    dp = [1]#直接设为0
    for i in range(1, n+1):#i是dp下标
        col = [0 for j in range(10)]#每类的列表
        d = 0
        for j in range(1, i+1):
            col[nArr[i-j]] = col[nArr[i-j]]+1
            if col[nArr[i-j]]>1:
                break
            d = d+dp[i-j]#满足条件就把当前的dp加上
        dp.append(d)
    print(dp[-1])

