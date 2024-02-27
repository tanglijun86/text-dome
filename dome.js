window.onload = function(){
    alert("代码开始");
    let box = document.getElementsByClassName('box');
    box.addEventListener('click',()=>{
        alert("这是测试代码");
    });
}