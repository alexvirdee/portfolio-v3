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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BvcnRmb2xpby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EseUNBQXlDLDRCQUE0QjtBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMkJBQTJCOztBQUVsRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCwyREFBMkQ7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvcG9ydGZvbGlvLmpzXCIpO1xuIiwid2luZG93LmluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgICBsZXQgbWlhbWkgPSB7IGxhdDogMjUuNzYxNywgbG5nOiAtODAuMTkxOCB9O1xuICBcbiAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgIHpvb206IDE0LFxuICAgICAgY2VudGVyOiBtaWFtaSxcbiAgICAgIGdlc3R1cmVIYW5kbGluZzogJ2Nvb3BlcmF0aXZlJyxcbiAgICB9KTtcbiAgXG4gICAgLy8gTWFya2VyIHBvc2l0aW9uIGF0IE1pYW1pXG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogbWlhbWksIG1hcDogbWFwIH0pO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGxldCBvbk1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2hvd0xpbmtCdG5zKCk7XG4gIH07XG4gIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpO1xuICBsZXQgaW5zdGFuY2VzID0gTS5Nb2RhbC5pbml0KGVsZW1zLCB7IG9uQ2xvc2VFbmQ6IG9uTW9kYWxDbG9zZSB9KTtcblxuICBsZXQgYWN0aW9uQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhlZC1hY3Rpb24tYnRuJyk7XG4gIGxldCBhY3Rpb25zID0gTS5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5pbml0KGFjdGlvbkJ0bnMpO1xufSk7XG5cbihmdW5jdGlvbiBkYXRlRnVuYygpIHtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFllYXInKS5pbm5lckhUTUwgPSB5ZWFyO1xufSkoKTtcblxubGV0IHRpdGxlVGV4dEFyciA9IFsnQWxleCBWaXJkZWUnLCAnRGV2ZWxvcCcsICdEZXNpZ24nLCAnTGVhcm4nXTtcbmxldCB0aXRsZVRleHRJbmRleCA9IDA7XG5sZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS10aXRsZScpO1xuXG5mdW5jdGlvbiBhbmltYXRlVGl0bGVUZXh0KCkge1xuICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZVRleHRBcnJbdGl0bGVUZXh0SW5kZXhdO1xuICAvLyBPcGFjaXR5IHRvIDFcbiAgdGl0bGUuc3R5bGUub3BhY2l0eSA9IDE7XG5cbiAgLy8gMiBzZWNvbmRzIGNhbGwgdGhlIG5leHQgZnVuY3Rpb25cbiAgc2V0VGltZW91dChuZXh0VGl0bGVXb3JkLCAyMDAwKTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpdGxlV29yZCgpIHtcbiAgLy8gaW5jcmVhc2UgaW5kZXggZm9yIG5leHQgd29yZCBpbiBhcnJheVxuICB0aXRsZVRleHRJbmRleCsrO1xuXG4gIGlmICh0aXRsZVRleHRJbmRleCA+IHRpdGxlVGV4dEFyci5sZW5ndGggLSAxKSB7XG4gICAgLy8gcmVzZXQgdG8gaW5pdGlhbCB0ZXh0XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVUZXh0QXJyWzBdO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFNldCB0aGUgb3BhY2l0eSB0byAwXG4gIHRpdGxlLnN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gIC8vIEFmdGVyIGFub3RoZXIgc2Vjb25kIGNhbGwgYW5pbWF0ZSBmdW5jdGlvblxuICBzZXRUaW1lb3V0KGFuaW1hdGVUaXRsZVRleHQsIDEwMDApO1xufVxuXG5hbmltYXRlVGl0bGVUZXh0KCk7XG5cbi8vIERpc3BsYXkgc2VjdGlvbnNcbmxldCBzZWN0aW9ucyA9IFsnYWJvdXQnLCAnc2tpbGxzJywgJ3Byb2plY3RzJywgJ2NvbnRhY3QnLCAnbG9jYXRpb24nXTtcbmxldCBzZWN0aW9uRGl2SWQgPSBudWxsO1xuXG5sZXQgY3VycmVudFBvcyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1qb2ItdGl0bGUnKS5pbm5lckhUTUwgPVxuICAnV2ViIEFwcGxpY2F0aW9uIERldmVsb3BlcicpO1xuXG5mdW5jdGlvbiBzZWN0aW9uVmlzaWJpbGl0eShzZWN0aW9uSWQpIHtcbiAgbGV0IGluaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdCcpO1xuICBpZiAoc2VjdGlvbkRpdklkID09PSBzZWN0aW9uSWQpIHtcbiAgICBzZWN0aW9uRGl2SWQgPSBudWxsO1xuICAgIGluaXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgc2VjdGlvbkRpdklkID0gc2VjdGlvbklkO1xuICAgIGluaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBoaWRlTm9uVmlzaWJsZVNlY3Rpb25zKCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVOb25WaXNpYmxlU2VjdGlvbnMoKSB7XG4gIGxldCBpLCBzZWN0aW9uSWQsIGRpdjtcbiAgZm9yIChpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgc2VjdGlvbklkID0gc2VjdGlvbnNbaV07XG4gICAgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkKTtcbiAgICBpZiAoc2VjdGlvbkRpdklkID09PSBzZWN0aW9uSWQpIHtcbiAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlua3MtYnRuJyk7XG5cbiAgICAgIGNhcmRzQXJyID0gQXJyYXkuZnJvbShjYXJkcyk7XG5cbiAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBiZ1doaXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBiZ1doaXRlKGUpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XG4gICAgICB9XG5cbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG59XG5cbi8vIENhbGwgZnVuY3Rpb24gd2hlbiBtb2RhbCBjbG9zZXNcbmZ1bmN0aW9uIHNob3dMaW5rQnRucygpIHtcbiAgbGV0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlua3MnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxpbmtzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59XG5cbi8vIFdoZW4gTW9kYWwgb3BlbnMgaGlkZSBsaW5rIGJ1dHRvbnNcbmZ1bmN0aW9uIHRyaWdnZXJlZE1vZGFsKCkge1xuICBsZXQgbW9kYWxUcmlnZ2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsLXRyaWdnZXInKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RhbFRyaWdnZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbW9kYWxUcmlnZ2Vyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpZGVMaW5rQnRucygpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVMaW5rQnRucygpIHtcbiAgbGV0IG1vZGFscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlua3MnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobW9kYWxzW2ldLnN0eWxlLmRpc3BsYXkgIT0gJ2Jsb2NrJykge1xuICAgICAgICBsaW5rc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG50cmlnZ2VyZWRNb2RhbCgpO1xuXG4vLyBDb250YWN0IGZvcm1cbihmdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpO1xuICBjb25zdCBmb3JtUmVzcG9uc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZm9ybS1yZXNwb25zZScpO1xuXG4gIGZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFByZXBhcmUgZGF0YSB0byBzZW5kXG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybSk7XG4gICAgZm9ybUVsZW1lbnRzLm1hcCgoaW5wdXQpID0+IChkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpKTtcblxuICAgIC8vIExvZyB3aGF0IGxhbWJkYSBmdW5jdGlvbiB3aWxsIHJlY2lldmVcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAvLyBDb25zdHJ1Y3QgYW4gaHR0cCBSZXF1ZXN0XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKGZvcm0ubWV0aG9kLCBmb3JtLmFjdGlvbiwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG5cbiAgICAvLyBzZW5kIHRoZSBjb2xsZWN0ZWQgZGF0YSBhcyBKU09OXG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgLy8gQ2FsbGJhY2tcbiAgICB4aHIub25sb2FkZW5kID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UudGFyZ2V0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIC8vIEZvcm0gc3VibWlzc2lvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIC8vIE0udG9hc3Qoe2h0bWw6ICdJIGFtIGEgdG9hc3QhJ30pXG4gICAgICAgIGZvcm1SZXNwb25zZSA9IE0udG9hc3Qoe1xuICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICBcIlRoYW5rcyBmb3Igc2VuZGluZyBhIG1lc3NhZ2Ugb3ZlciwgSSdsbCBiZSBpbiB0b3VjaCBzaG9ydGx5IPCfmI4uXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmFpbGVkXG4gICAgICAgIGZvcm1SZXNwb25zZS5pbm5lckhUTUwgPSAnRXJyb3Igc2VuZGluZyB5b3VyIG1lc3NhZ2UuIFRyeSBhZ2Fpbi4nO1xuICAgICAgICBjb25zb2xlLmVycm9yKEpTT04ucGFyc2UocmVzcG9uc2UudGFyZ2V0LnJlc3BvbnNlLm1lc3NhZ2UpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9