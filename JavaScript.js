var buttonGroter = document.querySelector(".knopje")
var body = document.querySelector("body")



buttonGroter.addEventListener("click", groter)
  
function groter () {
      body.classList.toggle("groter")
  }


  
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


