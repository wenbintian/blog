# Input标签的line-height属性失效

1. 如下设置，文本会出现字体离上下边框不对齐的情况(有1像素的偏差)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200525201348720.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70)
```css
	background: #FF0000;
    height: 40px;
    line-height: 40px;
```
2. 解决办法，利用设置padding上内边距比下内边距多像素的方法解决 
 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200525202123465.png)

```css
	background: #FF0000;
    height: 40px;
	box-sizing: border-box;
    padding: 2px 0 1px;
```
