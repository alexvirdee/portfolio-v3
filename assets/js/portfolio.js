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

let titleTextArr = ['Alex Virdee', 'Develop', 'Design', 'Learn'];
let titleTextIndex = 0;
let title = document.getElementById('site-title');

function animateTitleText() {
  title.innerHTML = titleTextArr[titleTextIndex];
  // Opacity to 1
  title.style.opacity = 1;

  // 2 seconds call the next function
  setTimeout(nextTitleWord, 2000);
}

function nextTitleWord() {
  // increase index for next word in array
  titleTextIndex++;

  if (titleTextIndex > titleTextArr.length - 1) {
    // reset to initial text
    title.innerHTML = titleTextArr[0];
    return;
  }

  // Set the opacity to 0
  title.style.opacity = 0;

  // After another second call animate function
  setTimeout(animateTitleText, 1000);
}

animateTitleText();

// Display sections
let sections = ['about', 'skills', 'projects', 'contact', 'location'];
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

      links.forEach((link) => {
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

// Call function when modal closes
function showLinkBtns() {
  let links = document.getElementsByClassName('links');
  for (let i = 0; i < links.length; i++) {
    links[i].style.display = 'block';
  }
}

// When Modal opens hide link buttons
function triggeredModal() {
  let modalTriggers = document.getElementsByClassName('modal-trigger');
  for (let i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', function () {
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

  form.onsubmit = (e) => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map((input) => (data[input.name] = input.value));

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
    xhr.onloadend = (response) => {
      if (response.target.status === 200) {
        // Form submission was successful
        form.reset();
        // M.toast({html: 'I am a toast!'})
        formResponse = M.toast({
          html:
            "Thanks for sending a message over, I'll be in touch shortly 😎.",
        });
      } else {
        // Failed
        formResponse.innerHTML = 'Error sending your message. Try again.';
        console.error(JSON.parse(response.target.response.message));
      }
    };
  };
})();


window.initMap = function() {
  function initMap() {
    let miami = { lat: 25.7617, lng: -80.1918 };
  
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: miami,
      gestureHandling: 'cooperative',
    });
  
    // Marker position at Miami
    let marker = new google.maps.Marker({ position: miami, map: map });
  }
}