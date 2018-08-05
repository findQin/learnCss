const log = console.log;
console.log('############################');
console.log('这是CSS解密引言部分示例代码');
console.log('############################');
log('');

// 关于本书部分
console.log('@@@@@@@@关于本书@@@@@@@@');
let div = document.getElementsByTagName('div')[0];
console.log('检查color属性是否在div中: ' + ('color' in div.style));
console.log('检查zsh属性是否在div中: ' + ('zsh' in div.style));
log('设置不存在的style属性会自动消失，设置div.style属性zsh为"red"');
log('再次查看div.style.zsh: ' + div.style.zsh);
