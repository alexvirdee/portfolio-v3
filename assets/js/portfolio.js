(function dateFunc() {
   let today = new Date();
   let year = today.getFullYear();
   document.getElementById('currentYear').innerHTML = year;
})();


function toggle_visibility(id) {
   let e = document.getElementById(id);
   document.getElementById("about").style.display = "none";
   document.getElementById("skills").style.display = "none";
   document.getElementById("projects").style.display = "none";
   e.style.display = "block";
}

