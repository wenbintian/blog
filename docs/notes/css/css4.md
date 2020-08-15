# CSS垂直居中
 1. 方法1
	```html
	<div class="box">
		<div class="child">垂直居中</div>
	</div>
	```
	```css
	// 父元素伪类
	.box::after{
	    content:"";
	    width: 0;
	    height: 100%;
	    display: inline-block;
	    vertical-align: middle;
	}
	.child {
		display:inline-block;
		vertical-align:center;
	}
	
	```
 2. 方法二
	```html
	<div class="box">
		<div class="child"></div>
	</div>
	```
	```css
	// 加以下两个伪类  .box高就变成20px; 否则只有 6px
	.box:before{
		content:"";
		display:table;
	}
	.box:after{
		content:"";
		display:table;
		clear:both;
	}
	.child{
		height:6px;
		margin: 7px 0;
	}
	```

