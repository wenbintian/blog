# 自定义滚动条样式
## 对于滚动条美化效果
```css
//滚动条样式
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-track-piece {
  background-color: transparent; // 滚动槽
  -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 12px;
  background-color: #BDBDBD;
  -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 12px;
  background-color: #BDBDBD;
  -webkit-border-radius: 6px;
}
// 滚动条鼠标移上去的样式
::-webkit-scrollbar-thumb:vertical:hover,::-webkit-scrollbar-thumb:horizontal:hover
{
  background-color: #808080;
}
```
