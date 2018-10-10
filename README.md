css_learn

>
> Chapter 1 引言
>
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

>
> Chapter 2 背景与边框
>
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
#### 6. 复杂背景
- linear-gradient并设置背景位置，实现复杂背景图构建
    - 通过两条渐变配合垂直角度实现方格背景
    - 设置较窄的宽度实现背景网格
    - 通过radial-gradient实现原点背景
    - 通过三角位移拼接实现棋盘式网格
#### 7. 伪随机背景
- linear-gradient通过调整多层背景以及设置背景单元大小不同实现伪随机效果
    - 单元背景大小设置为质数增加重复的单元长度
#### 8. 连续的图像背景
- border-image, linear-gradient设置白底padding-box叠加图片的border-box实现适应图片大小的图片边框
    - 信封边框实现
    - 蚂蚁线实现

>
> Chapter 3 形状
>
#### 9. 自适应椭圆
- border-radius属性
    - border-radius属性值可以设置4个，其顺序是左上角开始顺时针旋转，可以缺省设置，效果是1和3相同、2和4相同
    - 可以通过/的方式分别设置每个角的水平/竖直圆角
#### 10. 平行四边形
- transform: skewX(-45deg)
    - skewX会改变子元素样子，通过设置子元素skewX(45deg)来放正字体
    - 可以通过伪元素的方式实现背景以及变换，则不会影响到内部文字
#### 11. 菱形图片
- rotate、clip-path
    - 通过外包一层div标签实现旋转45deg，图片反向旋转45deg保持正确方向
    - 使用clip-path进行裁剪，此方法兼容性略差
    - 注：两种方法出来大小略有区别，具体可以查看示例
#### 12. 切角效果
- background-size、clip-path
    - 通过设置background为渐变色且设置其大小，得到相关切角效果
    - 使用radial-gradient得到弧形切角效果
    - 通过border-image配合svg实现切角效果
    - 通过clip-path产生切角效果
#### 13. 梯形标签页
- 通过视觉误差产生梯形效果，个人不推荐
    - 使用perspective配合rotateX实现梯形效果
#### 14. 简单饼图
- ::before设置半圆+transform旋转+负延时暂停动画
    - 使用background-image设置为渐变让圆一半为绿色一半为黑色
    - 通过::before形成遮罩层半圆，旋转控制在0-180 (.5turn)度
    - 通过设置动画时间配合负动画延时实现停留在一个状态的饼图

>
> Chapter 4 视觉效果
>
#### 15. 单侧投影
- 使用box-shadow的spread(扩张)属性为负来限制阴影范围
    - 阴影效果可以多个叠加
#### 16. 不规则投影
- 使用filter代替box-shadow产生不贵则投影
    - box-shadow: 2px 2px 10px rgba(0, 0, 0, .5)
    - ==>
    - filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, .5))
#### 17. 染色效果
- 使用background-blend-mode和背景色实现染色效果
    - 设置背景色同时background-blend-mode为luminosity实现染色效果
    - 通过双标签方式，设置外层标签背景色，同时设置内层标签mix-blend-mode为luminosity实现染色
#### 18. 毛玻璃效果
- 使用filter配合相同背景实现毛玻璃模糊效果
#### 19. 折角效果
- 通过设置多重linear-gradient实现折角效果
    - 注意linear-gradient内部是径向距离，不同于background-size的水平垂直距离
    - 非45度角的折角实现需要平移等操作
>
> Chapter 5 字体排版
>
### 20. 文本对齐 （code未实现）
- hyphens: manual | none | auto
    - manual: 现有默认对齐方式
    - auto: 采用合适的对齐方式
### 21. 插入换行
- 通过设置dt和dd为行内元素，::before增加换行符，同时设置white-space使之生效
    - 在元素末尾/最前面插入"\A"即换行含义
    - 默认情况下html会将文档整理在一行中，使用white-space:pre保留代码中空白和回车
    - 通过+选择器快速选择回车插入位置（div+p 即 选择所有紧接着<div>元素之后的<p>元素）
### 22. 文本行的斑马条纹
- line-height配合background-size实现斑马条纹
    - 设置背景为渐变
    - 同时配置背景origin
### 23. 调整tab的宽度（code未实现）
- 通过tab-size实现tab宽度调整
### 24. 连字
- 通过font-variant-ligatures设置连字，默认开启
### 25. 美化&字符 （code没有效果）
- 通过设置多个字体，并限制先设置字体的unicode-range实现部分字符美化
### 26. 自定义下划线
- 通过设置background的条纹背景实现下划线效果
### 27. 现实中的文字效果
- 通过text-shadow模拟多种文字效果
    - 凹/凸印刷：底部深色投影会让人产生物体是凸起的错觉，浅色投影则是凹进去的错觉，因为人们习惯光源在头顶
    - 空心字：使用多个text-shadow叠加产生效果
    - 发光字：浅色字+不指定颜色的text-shadow
    - 3D字：使用多层下阴影叠加效果
### 28. 环形文字
- 借助svg-path实现文本的环形显示
    - svg-path实现环状
    - textPath跟随svg形状实现环形文字
>
> Chapter 6 用户体验
>
### 29. 选用合适的鼠标光标
- 设置cursor实现光标变化
    - not-allowed禁用、none不显示
### 30. 扩大可点击区域
- border: transparent + background-clip:padding-box   
### 31. 自定义复选框
- 通过input[type="checkbox"]+label::before的方式通过伪元素模拟复选框
    - 默认情况下conten为\a0即不换行空格，选中情况下为\2713即✔️号
    - 通过阴影效果的变化来实现开关按钮的两种状态
### 32. 通过阴影弱化背景
- 多种不同实现方式
    - 额外元素方案：增加额外元素用于遮挡背景
    - 伪元素方案：设置body.dimmed::before实现(
        1. 移植性不好，body::before可能已经占用，需要增加.dimmed
        2. 设置before在对话框元素之前可以解决移植性问题，但无法对遮罩层Z轴进行细颗粒度控制
        3. 伪元素无法绑定独立的JS事件处理
    )
    - box-shadow方案(
        position: fixed;
        boxshadow: 0 0 0 50vmax rgba(0,0,0,.8);
        box-shadow不能捕获事件，防止与底层元素交互
    )
    - backdrop方案(
        dialog::backdrop {
            background: rgba(0,0,0,.8);
        }
        使用dialog标签配合原生的backdrop伪元素实现
        浏览器对其的兼容性有限
    )
### 33. 通过模糊弱化背景
- 通过给背景元素增加filter:blur的方式实现背景弱化效果
    - 背景和当前元素分为两个元素，否则会全部模糊
### 34. 滚动提示
- 双层渐变背景设置来实现
    - 双层渐变背景设置不同的background-attach值
### 35. 交互式图片的对比控件
- 通过设置双层image配合resize属性实现前后图片对比效果
    - 设置resize:horizontal实现横向拉伸
    - 设置max-width方式图片过度拉伸
    - 通过增加伪元素的方式增强交互体验
### 36. 自适应内部元素
- max-width: min-content
    - 根据内容大小自动调整元素宽度
### 37. 精确控制表格列宽
- table-layout:fixed实现表格列宽的调整
### 38. 根据兄弟元素的数量来设置样式
- li:first-child:nth-last-child(4)
    - li:first-child:nth-last-child(4)选择总数为4的list首个li
    - li:first-child:nth-last-child(4)~li选择除了首个外剩余li
    - li:first-child:nth-last-child(4)选择了总是为n+4的list首个li（5、6、7...）
    - li:first-child:nth-last-child(n+4)~li选择剩余的li
### 39. 满幅背景，定宽的内容
- 使用calc实现定宽居中，代替多余标签
```
<footer>
    <div class="wrapper"> <!--脚本内容--> </div>
</footer>
footer { background: #333;}
.wrapper {
    max-width: 900px;
    margin: 1em auto;
}
//-----------------
footer {
    padding: 1em;
    padding: 1em calc(50% - 450px);
    background: #333;
}
```
### 40. 垂直居中
- 基于绝对定位的方案
```
main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
- 基于视口单位的方案
```
main {
    width: 18em;
    padding: 1em 1.5em;
    margin: 50vh auto 0;
    transform: translateY(-50%);
}
```
- 基于flex的解决方案
```
main {
    display: flex;
    align-item: center;
    justify-content: center;
    width: 18em;
    height: 10em;
}
```
### 41. 紧贴底部的脚本
- 固定高度解决方案
```
#wrapper {
    min-height: calc(100vh - 7em)
}
```
- flex:1方案
### 42. 缓动效果
- 通过设置动画曲线来实现
    - 设置ease-in ease-out
    - 设置赛贝尔曲线cubic-bezier

### 43. 逐帧动画
- 通过step调速函数实现跳跃变化
    - 使用拼接将图片拼成一张图片
```
@keyframe loader {
    to {background-position: -800px 0;}
}
.loader {
    width: 100px; height: 100px;
    background: url(img/loader.png) 0 0;
    animation: loader 1s infinite steps(8);
}
```
### 44. 闪烁效果
- 实现文字闪烁效果
    - 通过动画to transparent实现文字从黑色渐变到透明
    - 通过alternate反转偶数帧实现平滑变化
    - 通过步进函数配合keyframes 50%实现闪烁跳动
### 45. 打字动画
- 通过设置文本宽度加上步进动画实现
    - 设置文本white-space:nowrap; overflow:hidden;
    - 设置有边框实现光标效果
### 46. 状态平滑的动画
- 通过控制animation-play-state来控制动画的进程
    - 通过paused使动画暂停
    - 通过running使动画继续播放
### 47. 环形路线平移动画
- 通过设置双层动画实现头像不跟随转动而产生旋转
    - 可以将内层代码设置animation-direction为reverse来使代码DRY

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
