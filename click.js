var btn = document.getElementById("grop"); 
 
btn.onclick = function() { 
    console.log('hi') 
    
const contentWrapper = document.getElementById('content-wraper') 
    if (contentWrapper.style.display === 'none') {
        contentWrapper.style.display = 'block'
        const arrGames = ['../|_/|', '/0w0|', '-???-'] 


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
        
        console.log(frogs)
        contentWrapper.style.display = 'none'

    }
   
}