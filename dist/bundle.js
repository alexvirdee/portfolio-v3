/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/portfolio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/portfolio.js":
/*!********************************!*\
  !*** ./assets/js/portfolio.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  let formResponse = document.getElementById('js-form-response');
  let contactBtn = document.getElementById('contact-submit-btn');

  let spinner = document.createElement('img');
  spinner.setAttribute('src', '../images/spinner.gif');

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

    contactBtn.textContent = '';

    contactBtn.appendChild(spinner);

    // send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = () => {
      contactBtn.textContent = 'Send Message';
    }

    // Callback
    xhr.onloadend = (response) => {
      if (response.target.status === 200) {
        // Form submission was successful
        form.reset();
        // M.toast({html: 'I am a toast!'})
        formResponse = M.toast({
          html:
            "Thanks for sending a message over, I'll be in touch shortly!",
        });
      } else {
        // Failed
        formResponse.innerHTML = 'Error sending your message. Try again.';
        console.error(JSON.parse(response.target.response.message));
      }
    };
  };
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BvcnRmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHVDQUF1Qyw0QkFBNEI7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywyQkFBMkI7O0FBRWxFO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCwyREFBMkQ7O0FBRTNEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9wb3J0Zm9saW8uanNcIik7XG4iLCJmdW5jdGlvbiBpbml0TWFwKCkge1xuICBsZXQgbWlhbWkgPSB7IGxhdDogMjUuNzYxNywgbG5nOiAtODAuMTkxOCB9O1xuXG4gIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgIHpvb206IDE0LFxuICAgIGNlbnRlcjogbWlhbWksXG4gICAgZ2VzdHVyZUhhbmRsaW5nOiAnY29vcGVyYXRpdmUnLFxuICB9KTtcblxuICAvLyBNYXJrZXIgcG9zaXRpb24gYXQgTWlhbWlcbiAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogbWlhbWksIG1hcDogbWFwIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsZXQgb25Nb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNob3dMaW5rQnRucygpO1xuICB9O1xuICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKTtcbiAgbGV0IGluc3RhbmNlcyA9IE0uTW9kYWwuaW5pdChlbGVtcywgeyBvbkNsb3NlRW5kOiBvbk1vZGFsQ2xvc2UgfSk7XG5cbiAgbGV0IGFjdGlvbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZml4ZWQtYWN0aW9uLWJ0bicpO1xuICBsZXQgYWN0aW9ucyA9IE0uRmxvYXRpbmdBY3Rpb25CdXR0b24uaW5pdChhY3Rpb25CdG5zKTtcbn0pO1xuXG4oZnVuY3Rpb24gZGF0ZUZ1bmMoKSB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRZZWFyJykuaW5uZXJIVE1MID0geWVhcjtcbn0pKCk7XG5cbmxldCB0aXRsZVRleHRBcnIgPSBbJ0FsZXggVmlyZGVlJywgJ0RldmVsb3AnLCAnRGVzaWduJywgJ0xlYXJuJ107XG5sZXQgdGl0bGVUZXh0SW5kZXggPSAwO1xubGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtdGl0bGUnKTtcblxuZnVuY3Rpb24gYW5pbWF0ZVRpdGxlVGV4dCgpIHtcbiAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVUZXh0QXJyW3RpdGxlVGV4dEluZGV4XTtcbiAgLy8gT3BhY2l0eSB0byAxXG4gIHRpdGxlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gIC8vIDIgc2Vjb25kcyBjYWxsIHRoZSBuZXh0IGZ1bmN0aW9uXG4gIHNldFRpbWVvdXQobmV4dFRpdGxlV29yZCwgMjAwMCk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaXRsZVdvcmQoKSB7XG4gIC8vIGluY3JlYXNlIGluZGV4IGZvciBuZXh0IHdvcmQgaW4gYXJyYXlcbiAgdGl0bGVUZXh0SW5kZXgrKztcblxuICBpZiAodGl0bGVUZXh0SW5kZXggPiB0aXRsZVRleHRBcnIubGVuZ3RoIC0gMSkge1xuICAgIC8vIHJlc2V0IHRvIGluaXRpYWwgdGV4dFxuICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlVGV4dEFyclswXTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTZXQgdGhlIG9wYWNpdHkgdG8gMFxuICB0aXRsZS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAvLyBBZnRlciBhbm90aGVyIHNlY29uZCBjYWxsIGFuaW1hdGUgZnVuY3Rpb25cbiAgc2V0VGltZW91dChhbmltYXRlVGl0bGVUZXh0LCAxMDAwKTtcbn1cblxuYW5pbWF0ZVRpdGxlVGV4dCgpO1xuXG4vLyBEaXNwbGF5IHNlY3Rpb25zXG5sZXQgc2VjdGlvbnMgPSBbJ2Fib3V0JywgJ3NraWxscycsICdwcm9qZWN0cycsICdjb250YWN0JywgJ2xvY2F0aW9uJ107XG5sZXQgc2VjdGlvbkRpdklkID0gbnVsbDtcblxubGV0IGN1cnJlbnRQb3MgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtam9iLXRpdGxlJykuaW5uZXJIVE1MID1cbiAgJ1dlYiBBcHBsaWNhdGlvbiBEZXZlbG9wZXInKTtcblxuZnVuY3Rpb24gc2VjdGlvblZpc2liaWxpdHkoc2VjdGlvbklkKSB7XG4gIGxldCBpbml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXQnKTtcbiAgaWYgKHNlY3Rpb25EaXZJZCA9PT0gc2VjdGlvbklkKSB7XG4gICAgc2VjdGlvbkRpdklkID0gbnVsbDtcbiAgICBpbml0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIHNlY3Rpb25EaXZJZCA9IHNlY3Rpb25JZDtcbiAgICBpbml0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaGlkZU5vblZpc2libGVTZWN0aW9ucygpO1xufVxuXG5mdW5jdGlvbiBoaWRlTm9uVmlzaWJsZVNlY3Rpb25zKCkge1xuICBsZXQgaSwgc2VjdGlvbklkLCBkaXY7XG4gIGZvciAoaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNlY3Rpb25JZCA9IHNlY3Rpb25zW2ldO1xuICAgIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgaWYgKHNlY3Rpb25EaXZJZCA9PT0gc2VjdGlvbklkKSB7XG4gICAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmtzLWJ0bicpO1xuXG4gICAgICBjYXJkc0FyciA9IEFycmF5LmZyb20oY2FyZHMpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgYmdXaGl0ZSk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gYmdXaGl0ZShlKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgICAgfVxuXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDYWxsIGZ1bmN0aW9uIHdoZW4gbW9kYWwgY2xvc2VzXG5mdW5jdGlvbiBzaG93TGlua0J0bnMoKSB7XG4gIGxldCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmtzJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsaW5rc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufVxuXG4vLyBXaGVuIE1vZGFsIG9wZW5zIGhpZGUgbGluayBidXR0b25zXG5mdW5jdGlvbiB0cmlnZ2VyZWRNb2RhbCgpIHtcbiAgbGV0IG1vZGFsVHJpZ2dlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC10cmlnZ2VyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kYWxUcmlnZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgIG1vZGFsVHJpZ2dlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoaWRlTGlua0J0bnMoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlTGlua0J0bnMoKSB7XG4gIGxldCBtb2RhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmtzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1vZGFsc1tpXS5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcbiAgICAgICAgbGlua3NbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudHJpZ2dlcmVkTW9kYWwoKTtcblxuLy8gQ29udGFjdCBmb3JtXG4oZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcbiAgbGV0IGZvcm1SZXNwb25zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1mb3JtLXJlc3BvbnNlJyk7XG4gIGxldCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3Qtc3VibWl0LWJ0bicpO1xuXG4gIGxldCBzcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHNwaW5uZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vaW1hZ2VzL3NwaW5uZXIuZ2lmJyk7XG5cbiAgZm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gUHJlcGFyZSBkYXRhIHRvIHNlbmRcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgY29uc3QgZm9ybUVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtKTtcbiAgICBmb3JtRWxlbWVudHMubWFwKChpbnB1dCkgPT4gKGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSkpO1xuXG4gICAgLy8gTG9nIHdoYXQgbGFtYmRhIGZ1bmN0aW9uIHdpbGwgcmVjaWV2ZVxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgIC8vIENvbnN0cnVjdCBhbiBodHRwIFJlcXVlc3RcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oZm9ybS5tZXRob2QsIGZvcm0uYWN0aW9uLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcblxuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnRhY3RCdG4uYXBwZW5kQ2hpbGQoc3Bpbm5lcik7XG5cbiAgICAvLyBzZW5kIHRoZSBjb2xsZWN0ZWQgZGF0YSBhcyBKU09OXG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnU2VuZCBNZXNzYWdlJztcbiAgICB9XG5cbiAgICAvLyBDYWxsYmFja1xuICAgIHhoci5vbmxvYWRlbmQgPSAocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS50YXJnZXQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgLy8gRm9ybSBzdWJtaXNzaW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgLy8gTS50b2FzdCh7aHRtbDogJ0kgYW0gYSB0b2FzdCEnfSlcbiAgICAgICAgZm9ybVJlc3BvbnNlID0gTS50b2FzdCh7XG4gICAgICAgICAgaHRtbDpcbiAgICAgICAgICAgIFwiVGhhbmtzIGZvciBzZW5kaW5nIGEgbWVzc2FnZSBvdmVyLCBJJ2xsIGJlIGluIHRvdWNoIHNob3J0bHkhXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmFpbGVkXG4gICAgICAgIGZvcm1SZXNwb25zZS5pbm5lckhUTUwgPSAnRXJyb3Igc2VuZGluZyB5b3VyIG1lc3NhZ2UuIFRyeSBhZ2Fpbi4nO1xuICAgICAgICBjb25zb2xlLmVycm9yKEpTT04ucGFyc2UocmVzcG9uc2UudGFyZ2V0LnJlc3BvbnNlLm1lc3NhZ2UpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=