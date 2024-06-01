var btnA = document.getElementById("playList"); 
 
btnA.onclick = function() { 
    console.log('hey') 
    
const contentPlay = document.getElementById('content-play') 
    if (contentPlay.style.display === 'block') {
        contentPlay.style.display = 'none'
    } 
    
    else {
        contentPlay.style.display = 'block'
    }
   
}