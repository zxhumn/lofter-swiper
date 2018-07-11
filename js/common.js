//设置rem的值为屏幕宽度的十分之一，如果屏幕过大（超过414px,  就设为41.4px）
var screenWidth = window.screen.width;
document.querySelector("html").style.fontSize = screenWidth >= 414 ? "41.4px" : screenWidth / 10 + "px";



