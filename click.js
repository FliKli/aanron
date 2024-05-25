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

        const frogs = document.querySelectorAll('.frog')

        frogs.forEach(frog => {
            frog.replaceWith();
        });

        console.log(frogs)
        contentWrapper.style.display = 'none'

    }
   
}