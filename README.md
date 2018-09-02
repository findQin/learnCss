css_learn

### 1. 引言
##### CSS 编程技巧
- 尽量减少代码重复
    - 1.减少改动时需要编辑的地方（固定px->跟随字体大小变动的rem、em）
    - 2.表达相互依赖关系
    ```
    font-size: 20px;
    line-height: 1.5; // 设置行高是字体的1.5倍
    ```
    - 3.减少代码量
    ```
    border-width: 10px 10px 10px 0;
    /*===========================*/
    border-width: 10px;
    border-left-width: 0;
    ```
    - 4.currentColor(即当前color的颜色值)
    - 5.使用inherit
- 相信眼睛而非数字
    - 视觉误差造成真实居中看起来偏下
    - 圆形字体看起来要比其他字体大一些
- 关于响应式布局
    - 以弹性布局为主
    - 辅以媒体查询
- 合理使用简写、CSS预处理器

### 2. 背景与边框
#### 1. 半透明边框
- background-clip属性
    - 默认按照元素的border box裁剪掉背景
    - 参数值 border-box | padding-box | content-box
#### 2. 多重边框
- 方案1 - boxShadow方案
    - boxShadow层层叠加，第一圈10px，第二圈需要5px时要设置15px
    - 不影响布局、不受box-sizing影响
    - “边框”出现在元素外圈，不影响鼠标点击
- 方案2 - outline方案
#### 3. 灵活的背景定位
- background属性
    - background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
- background-postion
    - background-postion允许在偏移量前面加指定关键字（background-position: right 20px bottom 10px）
- background-origin
    - background-origin允许设置对齐的模型位置
    - border-box | padding-box | content-box （默认padding-box）
#### 4. 边框内圆角
- 实现效果：内层边框圆角、外层边框直角
    - 内层使用border-radius、外层直角使用outline、中间使用box-shadow填充
    - box-shadow: x-shadow y-shadow blur spread color inset;
#### 5. 条纹背景
- linear-gradient设置上下两种颜色的色位相同，实现条纹背景的效果
    - 使用background-size控制一次循环的大小
    - 在方向存在一定角度时，并且需要控制循环大小时，使用repeating-linear-gradient
    - 通过设置background颜色并配合background-image的方式可以减少直接颜色量的写入，方便修改代码


- 

### X. 其他
#### 1. margin折叠
> 所有毗邻的两个或更多盒元素的margin将会合并为一个margin共享之;
> 毗邻的定义为：同级或者嵌套的盒元素，并且它们之间没有非空内容、Padding或Border分隔;
- 解决办法
    - 1.在父层盒子添加：overflow：hidden (比较暴力，如果有悬浮窗可能导致无法看到)- 2.不用margin-top，改用padding-top （如果子盒子有border,那这个方法就不适合了）
    - 3.给父元素添加1px的padding或者添加一个style不为none的border，可以使用透明border（如果设计师不能容忍1px的差异，那这个就不适用了）
    - 4.给父元素加上浮动（如果要占满一行那就要加上width:100%）
    - 5.设置父元素dispaly:inline-block或者display:table-cell;（如果要占满一行那就要加上width:100%）
    - 6.给父元素添加绝对定位(不推荐)
