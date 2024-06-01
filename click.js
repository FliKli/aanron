var btn = document.getElementById("city"); 
 
btn.onclick = function() { 
    console.log('hi') 
    
const contentWrapper = document.getElementById('content-wraper') 
    const arrGames = ['../|_/|', '/0w0|', '-???-']
    if (contentWrapper.style.display === 'block') {
        contentWrapper.style.display = 'none'


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
        contentWrapper.style.display = 'block'

    }
   
}