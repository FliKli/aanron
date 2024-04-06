console.log('hi') 
 
const modal = document.getElementById('content') 
console.log(modal) 
 
const arrGames = ['test' , 'zdfklnmadbvgjkzdfnjkbv', 'test3', 'hjjknjknnj'] 
//.filter((elem) => elem.includes('test')) 
arrGames.forEach((elem) => { 
    console.log(elem) 
    const elemNew = document.createElement('div') 
    elemNew.classList.add('frog') 
    elemNew.textContent = elem 
    modal.appendChild(elemNew) 
})