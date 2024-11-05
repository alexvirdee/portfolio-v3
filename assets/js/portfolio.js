function initMap() {
  let tampa = { lat: 27.9506, lng: -82.4572 };

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: tampa,
    gestureHandling: 'cooperative',
    mapId: "996fb601e16c4b78"
  });

  // Marker position at Tampa
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: tampa,
});
}

function getJaxAge() {
  // (Note about 1970: A JavaScript date is fundamentally specified as the number of miliseconds that have elapsed since the ECMAScript epoch, which is January 1, 1970)
  const epoch = 1970;
  const birthDate = new Date('02/02/2015');
  // Need to get the current month difference
  let monthDiff = Date.now() - birthDate.getTime();

  // Convert the difference in date format
  let ageDt = new Date(monthDiff);

  // Extract the year from the date
  let year = ageDt.getUTCFullYear();

  // Calculate Jax age
  let age = Math.abs(year - epoch);

  document.getElementById('jax-age').innerHTML = age;
}


document.addEventListener('DOMContentLoaded', () => {
  getJaxAge();

  let onModalClose = () => {
    showLinkBtns();
  };
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems, { onCloseEnd: onModalClose });

  let actionBtns = document.querySelectorAll('.fixed-action-btn');
  let actions = M.FloatingActionButton.init(actionBtns);

  // Employment status for navbar - creating for recruiters to check 
  fetch('/assets/js/work-status.json')
  .then(response => response.json())
  .then(data => {
    const employmentStatus = document.querySelector('.nav-employment-status');

    if (data.openToWork) {
      employmentStatus.classList.add('open-to-work');
      employmentStatus.classList.remove('not-open-to-work');
      employmentStatus.textContent = 'Currently Open to Work';
    } else {
      employmentStatus.classList.add('not-open-to-work');
      employmentStatus.classList.remove('open-to-work');
      employmentStatus.textContent = 'Not Open to Work'
    }
  })
  .catch(error => console.error("Error fetching employment status:", error));
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
let sections = ['init', 'about', 'skills', 'projects', 'contact', 'location'];
let sectionDivId = 'init';

let currentPos = (document.getElementById('current-job-title').innerHTML =
  'Software Engineer II');

function sectionVisibility(sectionId) {
  let init = document.getElementById('init');
  if (sectionDivId === sectionId) {
    sectionDivId = 'init';
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
  let formResponse = document.getElementById('js-form-response');
  let contactBtn = document.getElementById('contact-submit-btn');

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

    contactBtn.textContent = 'Sending...';

    // send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = () => {
      contactBtn.textContent = 'Send Message';
    };

    // Callback
    xhr.onloadend = (response) => {
      if (response.target.status === 200) {
        // Form submission was successful
        form.reset();
        // M.toast({html: 'I am a toast!'})
        formResponse = M.toast({
          html: "Thanks for sending a message over, I'll be in touch shortly!",
        });
      } else {
        // Failed
        formResponse.innerHTML = 'Error sending your message. Try again.';
        console.error(JSON.parse(response.target.response.message));
      }
    };
  };
})();
