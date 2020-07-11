document.addEventListener('DOMContentLoaded', () => {
  let onModalClose = () => {
    showLinkBtns();
  };
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems, { onCloseEnd: onModalClose });

  let actionBtns = document.querySelectorAll('.fixed-action-btn');
  let actions = M.FloatingActionButton.init(actionBtns);
});

(function dateFunc() {
  let today = new Date();
  let year = today.getFullYear();
  document.getElementById('currentYear').innerHTML = year;
})();

let sections = ['about', 'skills', 'projects', 'contact'];
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
      let cards = document.querySelectorAll('.card');
      let links = document.querySelectorAll('.links-btn');

      cardsArr = Array.from(cards);


      links.forEach(link => {
        link.addEventListener('mousedown', bgWhite);
      });

      function bgWhite(e) {
        document.body.style.backgroundColor = '#fff';
      }

      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  }
}

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

// Contact form 
(function submitForm() {
  const form = document.getElementById('contact-form');
  const formResponse = document.getElementById('js-form-response');

  form.onsubmit = e => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // Log what lambda function will recieve
    console.log(JSON.stringify(data));

    // Construct an http Request
    let xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // Form submission was successful
        form.reset();
        formResponse.innerHTML = 'Thanks for sending a message over, I\'ll be in touch shortly 😎.';
      } else {
        // Failed
        formResponse.innerHTML = 'Error sending your message. Try again.';
        console.error(JSON.parse(response.target.response.message));
      }
    }
  };
})();
