# table布局合并列宽度设置无效问题

### HTML
```html
<table>
	<tbody>
		<tr>
		    <td colspan="2">合并列(300px)</td>
		    <td class="td3">列3</td>
		    <td class="td4">列4</td>
		</tr>
		<tr>
			<td class="td1">列1(100px)</td>
			<td class="td2">列2(200px)</td>
			<td class="td3">列3</td>
			<td class="td4">列4</td>
		</tr>
	</tbody>
</table>
 ```
### CSS
```css
table { width: 500px; table-layout: fixed; }
td { border: 1px solid #ddccdd; }
.td3, .td4 { width: 100px; }
.td1 { width: 100px; }
.td2 { width: 200px; }
```
### 效果
![效果展示图](https://img-blog.csdnimg.cn/20200611092903190.png)
### 问题
列1 跟 列2的宽度明显就不准确。
### 原因
是因为使用了`CSS`属性 `table-layout: fixed`。固定表格布局，具体该属性的说明请看[CSS table-layout 属性](https://www.w3school.com.cn/cssref/pr_tab_table-layout.asp)。
简单的说就是，当属性值为`fixed`时系统**在接收到第一行后就可以显示表格**。也就是说表格是按第一行设置的宽度来显示的，其他行设置宽度是没有效果的。由于第一行是合并列，所以第二行的列1跟列2就是平均分配的。
### 解决方法
给第一行放一个空的列`<colgroup>`, 然后其他行不需要设置样式，`CSS`文件不需要变。

```html
<table>
  <colgroup>
    <col class="td1"></col>
    <col class="td2"></col>
    <col class="td3"></col>
    <col class="td4"></col>
  </colgroup>
  <tbody>
    <tr>
      <td colspan="2">合并列(300px)</td>
      <td>列3</td>
      <td>列4</td>
    </tr>
    <tr>
      <td>列1(100px)</td>
      <td>列2(200px)</td>
      <td>列3</td>
      <td>列4</td>
    </tr>
  </tbody>
</table>
```
```css
table { width: 500px; table-layout: fixed; }
td { border: 1px solid #ddccdd; }
.td3, .td4 { width: 100px; }
.td1 { width: 100px; }
.td2 { width: 200px; }
```
### 扩展 `<colgroup>`标签
#### 1.`<colgroup>`标签的功能
 - `<colgroup>` 标签用于对表格中的列进行组合，以便对其进行格式化。
 - 通过使用 `<colgroup>` 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。
#### 2.`<colgroup>`标签使用的注意事项
 - 只能在`<table>`标签之内，在任意一个`<caption>`标签之后，在任何一个`<thead>`、`<tbody>`、`<tfoot>`、`<tr>`标签之前使用`colgroup`标签才有效果。
 - 如果想对 `<colgroup>` 标签中的某列定义不同的属性，请在 `<colgroup>` 标签内使用 `<col>` 标签。
 - 如果在`<tr>`、`<td>`标签里设置`css`样式`background-color`背景色,则将会把`<colgroup>`、`<col>`标签内设置的背景色覆盖掉的。也就是说`<colgroup>`、`<col>`设置的背景色权重是比较低的。
#### 3.`<colgroup>`标签兼容性
 - 所有主流浏览器都支持`<colgroup>`标签。

### 扩展 `<col>`标签
#### 1.`<col>`标签的功能
 - `<col>` 标签用于定义表格中一个列或者多个列的属性值。
 - 通过使用 `<col>` 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。
#### 2.`<col>`标签使用的注意事项
 - 只能在 `<table>` 或 `<colgroup>` 元素中使用 `<col>` 标签。
#### 3.`<col>`标签兼容性
 - 所有主流浏览器都支持`<col>`标签。

### 总结

 1. 认识`table-layout` 的相关属性，其中值为`fixed`，有助于提高渲染速度。
 2. 了解`<colgroup>`、`<col>`标签相关知识。
 3. 掌握合并行、合并列的相关用法 。
