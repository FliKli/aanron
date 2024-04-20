


var btn = document.getElementById("grop"); 
 
btn.onclick = function() { 
    console.log('hi') 
    if (contentWrapper.style.display === 'none') {
        contentWrapper.style.display = 'block'
        const arrGames = ['test' , 'zdfklnmadbvgjkzdfnjkbv', 'test3', 'hjjknjknnj'] 

const contentWrapper = document.getElementById('content-wraper') 

arrGames.forEach((elem) => { 
    console.log(elem) 
    const elemNew = document.createElement('div') 
    elemNew.classList.add('frog') 
    elemNew.textContent = elem 
    contentWrapper.appendChild(elemNew) 
})

    } else {
        
        contentWrapper.style.display = 'none'
    }
    

     
  
} 
 
