function cityFunction() {
    
  let input = document.getElementById("cityInput");
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("cityUL");
  let li = ul.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      let txtValue = a.textContent || a.innerText;
      
      if (txtValue.toUpperCase().includes(filter)) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}
