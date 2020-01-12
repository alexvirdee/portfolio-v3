(function dateFunc() {
  let today = new Date();
  let year = today.getFullYear();
  document.getElementById('currentYear').innerHTML = year;
})();

let sections = ['about', 'skills', 'projects', 'photography'];
let sectionDivId = null;
let currentPos = (document.getElementById('current-job-title').innerHTML =
  'Web Application Developer');

function sectionVisibility(sectionId) {
  let init = document.getElementById('init');
  if (sectionDivId === sectionId) {
    sectionDivId = null;
    init.style.display = 'block';
  } else {
    sectionDivId = sectionId;
    init.style.display = 'none';
  }
  hideNonVisibleSections();
}

function hideNonVisibleSections() {
  let i, sectionId, div;
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

document.addEventListener('DOMContentLoaded', function() {
  let onModalClose = function() {
    showLinkBtns();
  };
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems, { onCloseEnd: onModalClose });
});

function showLinkBtns() {
  let links = document.getElementsByClassName('links');
  for (let i = 0; i < links.length; i++) {
    links[i].style.display = 'block';
  }
}

function triggeredModal() {
  let modalTriggers = document.getElementsByClassName('modal-trigger');
  for (let i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', function() {
      hideLinkBtns();
    });
  }
}

function hideLinkBtns() {
  let modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    let links = document.getElementsByClassName('links');
    for (let i = 0; i < links.length; i++) {
      if (modals[i].style.display != 'block') {
        links[i].style.display = 'none';
      }
    }
  }
}

triggeredModal();
