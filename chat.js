var btnA = document.getElementById("chatList"); 
 
btnA.onclick = function() { 
    console.log('he') 
    
const contentPlay = document.getElementById('content-chat') 
    if (contentPlay.style.display === 'block') {
        contentPlay.style.display = 'none'
    } 
    
    else {
        contentPlay.style.display = 'block'
    }
   
}





const btnB = document.getElementById("btnB");
btnB.addEventListener("click", ()=>{
    const result = confirm("Завершить выполнение программы?");
    if(result===true)
        console.log("Работа программы завершена");
    else
        console.log("Программа продолжает работать");
});







const messageBox = document.chatA.message;
 
// обработчик ввода символа
function onkeypress(dd){
    // получаем элемент printBlock
    const printBlock = document.getElementById("printBlock");
    // получаем введенный символ
    const val = String.fromCharCode(dd.keyCode);
    // добавление символа
    printBlock.textContent += val;
}
 
function onkeydown(dd){
    if(dd.keyCode===8){ // если нажат Backspace
     
        // получаем элемент printBlock
        const printBlock = document.getElementById("printBlock"), 
            length = printBlock.textContent.length;
        // обрезаем строку по последнему символу
        printBlock.textContent = printBlock.textContent.substring(0, length-1);
    }
}
 
messageBox.addEventListener("keypress", onkeypress);
messageBox.addEventListener("keydown", onkeydown);