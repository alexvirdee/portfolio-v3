(function dateFunc() {
   let today = new Date();
   let year = today.getFullYear();
   document.getElementById('currentYear').innerHTML = year;
})();

var sections = ['about', 'skills', 'projects'];
var sectionDivId = null;
let currentPos = document.getElementById('current-job-title').innerHTML = 'Web Application Developer';


function sectionVisibility(sectionId) {
   let init = document.getElementById('init');
   if (sectionDivId === sectionId) {
      sectionDivId = null;
      init.style.display='block';
   } else {
      sectionDivId = sectionId;
      init.style.display='none';
   }
   hideNonVisibleSections();
}


function hideNonVisibleSections() {
   var i, sectionId, div;
   for (i = 0; i < sections.length; i++) {
      sectionId = sections[i];
      div = document.getElementById(sectionId);
      if (sectionDivId === sectionId) {
         div.style.display = 'block';
      } else {
         div.style.display = 'none';
      }
   }
}