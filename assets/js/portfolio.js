(function dateFunc() {
   let today = new Date();
   let year = today.getFullYear();
   document.getElementById('currentYear').innerHTML = year;
})();

let clicked = 1;


function toggle_visibility(id, isOdd) {
   let e = document.getElementById(id);
   e.style.display = 'none';
   if (isOdd) {
      e.style.display = "block";
   }
}

