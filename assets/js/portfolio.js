(function dateFunc() {
   let today = new Date();
   let year = today.getFullYear();
   document.getElementById('currentYear').innerHTML = year;
})();

let clicked = 1;


function toggle_visibility(id, isOdd) {
   let e = document.getElementById(id);
   document.getElementById("about").style.display = "none";
   document.getElementById("skills").style.display = "none";
   document.getElementById("projects").style.display = "none";
   if (isOdd) {
      e.style.display = "block";
   } else {
      e.style.display = 'none';
   } 
}

