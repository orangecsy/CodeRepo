'''
目的：将图片转为base64（便于插入markdown）
输入：图片地址
输出：base64编码
'''

import base64
def img_to_base64(path):
	f = open(path, 'rb')
	base64_f = base64.b64encode(f.read())
	f.close()
	return base64_f


if __name__ == '__main__':
	print(img_to_base64(r'C:\Users\Administrator\Desktop\1.png')) #更改图片地址