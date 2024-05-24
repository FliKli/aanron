var btn = document.getElementById("grop"); 
 
btn.onclick = function() { 
    console.log('hi') 
    
const contentWrapper = document.getElementById('content-wraper') 
    const arrGames = ['../|_/|', '/0w0|', '-???-']
    if (contentWrapper.style.display === 'none') {
        contentWrapper.style.display = 'block'


arrGames.forEach((elem) => { 
    console.log(elem) 
    const elemNew = document.createElement('div') 
    elemNew.classList.add('frog') 
    elemNew.textContent = elem 
    contentWrapper.appendChild(elemNew) 
})

    } 
    
    else {

        const frogs = document.getElementsByClassName('frog')

        //for (let i = 0; i < 3; i++) {
         //   contentWrapper.removeChild(contentWrapper.lastChild)
         //   console.log(i)
         // }
        //  console.log("i")


        console.log(frogs)
        contentWrapper.style.display = 'none'

    }
   
}