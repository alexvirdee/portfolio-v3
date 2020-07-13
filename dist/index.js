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
/******/ 	__webpack_require__.p = "/";
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
  var miami = {
    lat: 25.7617,
    lng: -80.1918
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: miami,
    gestureHandling: 'cooperative'
  }); // Marker position at Miami

  var marker = new google.maps.Marker({
    position: miami,
    map: map
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var onModalClose = function onModalClose() {
    showLinkBtns();
  };

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    onCloseEnd: onModalClose
  });
  var actionBtns = document.querySelectorAll('.fixed-action-btn');
  var actions = M.FloatingActionButton.init(actionBtns);
});

(function dateFunc() {
  var today = new Date();
  var year = today.getFullYear();
  document.getElementById('currentYear').innerHTML = year;
})();

var titleTextArr = ['Alex Virdee', 'Develop', 'Design', 'Learn'];
var titleTextIndex = 0;
var title = document.getElementById('site-title');

function animateTitleText() {
  title.innerHTML = titleTextArr[titleTextIndex]; // Opacity to 1

  title.style.opacity = 1; // 2 seconds call the next function

  setTimeout(nextTitleWord, 2000);
}

function nextTitleWord() {
  // increase index for next word in array
  titleTextIndex++;

  if (titleTextIndex > titleTextArr.length - 1) {
    // reset to initial text
    title.innerHTML = titleTextArr[0];
    return;
  } // Set the opacity to 0


  title.style.opacity = 0; // After another second call animate function

  setTimeout(animateTitleText, 1000);
}

animateTitleText(); // Display sections

var sections = ['about', 'skills', 'projects', 'contact', 'location'];
var sectionDivId = null;
var currentPos = document.getElementById('current-job-title').innerHTML = 'Web Application Developer';

function sectionVisibility(sectionId) {
  var init = document.getElementById('init');

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
  var i, sectionId, div;

  for (i = 0; i < sections.length; i++) {
    sectionId = sections[i];
    div = document.getElementById(sectionId);

    if (sectionDivId === sectionId) {
      (function () {
        var bgWhite = function bgWhite(e) {
          document.body.style.backgroundColor = '#fff';
        };

        var cards = document.querySelectorAll('.card');
        var links = document.querySelectorAll('.links-btn');
        cardsArr = Array.from(cards);
        links.forEach(function (link) {
          link.addEventListener('mousedown', bgWhite);
        });
        div.style.display = 'block';
      })();
    } else {
      div.style.display = 'none';
    }
  }
} // Call function when modal closes


function showLinkBtns() {
  var links = document.getElementsByClassName('links');

  for (var i = 0; i < links.length; i++) {
    links[i].style.display = 'block';
  }
} // When Modal opens hide link buttons


function triggeredModal() {
  var modalTriggers = document.getElementsByClassName('modal-trigger');

  for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', function () {
      hideLinkBtns();
    });
  }
}

function hideLinkBtns() {
  var modals = document.getElementsByClassName('modal');

  for (var i = 0; i < modals.length; i++) {
    var links = document.getElementsByClassName('links');

    for (var _i = 0; _i < links.length; _i++) {
      if (modals[_i].style.display != 'block') {
        links[_i].style.display = 'none';
      }
    }
  }
}

triggeredModal(); // Contact form

(function submitForm() {
  var form = document.getElementById('contact-form');
  var formResponse = document.getElementById('js-form-response');
  var contactBtn = document.getElementById('contact-submit-btn');

  form.onsubmit = function (e) {
    e.preventDefault(); // Prepare data to send

    var data = {};
    var formElements = Array.from(form);
    formElements.map(function (input) {
      return data[input.name] = input.value;
    }); // Log what lambda function will recieve

    console.log(JSON.stringify(data)); // Construct an http Request

    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    contactBtn.textContent = 'Sending...'; // send the collected data as JSON

    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
      contactBtn.textContent = 'Send Message';
    }; // Callback


    xhr.onloadend = function (response) {
      if (response.target.status === 200) {
        // Form submission was successful
        form.reset(); // M.toast({html: 'I am a toast!'})

        formResponse = M.toast({
          html: "Thanks for sending a message over, I'll be in touch shortly!"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJpbml0TWFwIiwibWlhbWkiLCJsYXQiLCJsbmciLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInpvb20iLCJjZW50ZXIiLCJnZXN0dXJlSGFuZGxpbmciLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vZGFsQ2xvc2UiLCJzaG93TGlua0J0bnMiLCJlbGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnN0YW5jZXMiLCJNIiwiTW9kYWwiLCJpbml0Iiwib25DbG9zZUVuZCIsImFjdGlvbkJ0bnMiLCJhY3Rpb25zIiwiRmxvYXRpbmdBY3Rpb25CdXR0b24iLCJkYXRlRnVuYyIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImlubmVySFRNTCIsInRpdGxlVGV4dEFyciIsInRpdGxlVGV4dEluZGV4IiwidGl0bGUiLCJhbmltYXRlVGl0bGVUZXh0Iiwic3R5bGUiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsIm5leHRUaXRsZVdvcmQiLCJsZW5ndGgiLCJzZWN0aW9ucyIsInNlY3Rpb25EaXZJZCIsImN1cnJlbnRQb3MiLCJzZWN0aW9uVmlzaWJpbGl0eSIsInNlY3Rpb25JZCIsImRpc3BsYXkiLCJoaWRlTm9uVmlzaWJsZVNlY3Rpb25zIiwiaSIsImRpdiIsImJnV2hpdGUiLCJlIiwiYm9keSIsImJhY2tncm91bmRDb2xvciIsImNhcmRzIiwibGlua3MiLCJjYXJkc0FyciIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJsaW5rIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRyaWdnZXJlZE1vZGFsIiwibW9kYWxUcmlnZ2VycyIsImhpZGVMaW5rQnRucyIsIm1vZGFscyIsInN1Ym1pdEZvcm0iLCJmb3JtIiwiZm9ybVJlc3BvbnNlIiwiY29udGFjdEJ0biIsIm9uc3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZm9ybUVsZW1lbnRzIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm1ldGhvZCIsImFjdGlvbiIsInNldFJlcXVlc3RIZWFkZXIiLCJ0ZXh0Q29udGVudCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWRlbmQiLCJyZXNwb25zZSIsInRhcmdldCIsInN0YXR1cyIsInJlc2V0IiwidG9hc3QiLCJodG1sIiwiZXJyb3IiLCJwYXJzZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLE1BQUlDLEtBQUssR0FBRztBQUFFQyxPQUFH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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvcG9ydGZvbGlvLmpzXCIpO1xuIiwiZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgbGV0IG1pYW1pID0geyBsYXQ6IDI1Ljc2MTcsIGxuZzogLTgwLjE5MTggfTtcblxuICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICB6b29tOiAxNCxcbiAgICBjZW50ZXI6IG1pYW1pLFxuICAgIGdlc3R1cmVIYW5kbGluZzogJ2Nvb3BlcmF0aXZlJyxcbiAgfSk7XG5cbiAgLy8gTWFya2VyIHBvc2l0aW9uIGF0IE1pYW1pXG4gIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHsgcG9zaXRpb246IG1pYW1pLCBtYXA6IG1hcCB9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbGV0IG9uTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBzaG93TGlua0J0bnMoKTtcbiAgfTtcbiAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJyk7XG4gIGxldCBpbnN0YW5jZXMgPSBNLk1vZGFsLmluaXQoZWxlbXMsIHsgb25DbG9zZUVuZDogb25Nb2RhbENsb3NlIH0pO1xuXG4gIGxldCBhY3Rpb25CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpeGVkLWFjdGlvbi1idG4nKTtcbiAgbGV0IGFjdGlvbnMgPSBNLkZsb2F0aW5nQWN0aW9uQnV0dG9uLmluaXQoYWN0aW9uQnRucyk7XG59KTtcblxuKGZ1bmN0aW9uIGRhdGVGdW5jKCkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50WWVhcicpLmlubmVySFRNTCA9IHllYXI7XG59KSgpO1xuXG5sZXQgdGl0bGVUZXh0QXJyID0gWydBbGV4IFZpcmRlZScsICdEZXZlbG9wJywgJ0Rlc2lnbicsICdMZWFybiddO1xubGV0IHRpdGxlVGV4dEluZGV4ID0gMDtcbmxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlLXRpdGxlJyk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVUaXRsZVRleHQoKSB7XG4gIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlVGV4dEFyclt0aXRsZVRleHRJbmRleF07XG4gIC8vIE9wYWNpdHkgdG8gMVxuICB0aXRsZS5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICAvLyAyIHNlY29uZHMgY2FsbCB0aGUgbmV4dCBmdW5jdGlvblxuICBzZXRUaW1lb3V0KG5leHRUaXRsZVdvcmQsIDIwMDApO1xufVxuXG5mdW5jdGlvbiBuZXh0VGl0bGVXb3JkKCkge1xuICAvLyBpbmNyZWFzZSBpbmRleCBmb3IgbmV4dCB3b3JkIGluIGFycmF5XG4gIHRpdGxlVGV4dEluZGV4Kys7XG5cbiAgaWYgKHRpdGxlVGV4dEluZGV4ID4gdGl0bGVUZXh0QXJyLmxlbmd0aCAtIDEpIHtcbiAgICAvLyByZXNldCB0byBpbml0aWFsIHRleHRcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZVRleHRBcnJbMF07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2V0IHRoZSBvcGFjaXR5IHRvIDBcbiAgdGl0bGUuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgLy8gQWZ0ZXIgYW5vdGhlciBzZWNvbmQgY2FsbCBhbmltYXRlIGZ1bmN0aW9uXG4gIHNldFRpbWVvdXQoYW5pbWF0ZVRpdGxlVGV4dCwgMTAwMCk7XG59XG5cbmFuaW1hdGVUaXRsZVRleHQoKTtcblxuLy8gRGlzcGxheSBzZWN0aW9uc1xubGV0IHNlY3Rpb25zID0gWydhYm91dCcsICdza2lsbHMnLCAncHJvamVjdHMnLCAnY29udGFjdCcsICdsb2NhdGlvbiddO1xubGV0IHNlY3Rpb25EaXZJZCA9IG51bGw7XG5cbmxldCBjdXJyZW50UG9zID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWpvYi10aXRsZScpLmlubmVySFRNTCA9XG4gICdXZWIgQXBwbGljYXRpb24gRGV2ZWxvcGVyJyk7XG5cbmZ1bmN0aW9uIHNlY3Rpb25WaXNpYmlsaXR5KHNlY3Rpb25JZCkge1xuICBsZXQgaW5pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbml0Jyk7XG4gIGlmIChzZWN0aW9uRGl2SWQgPT09IHNlY3Rpb25JZCkge1xuICAgIHNlY3Rpb25EaXZJZCA9IG51bGw7XG4gICAgaW5pdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBzZWN0aW9uRGl2SWQgPSBzZWN0aW9uSWQ7XG4gICAgaW5pdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIGhpZGVOb25WaXNpYmxlU2VjdGlvbnMoKTtcbn1cblxuZnVuY3Rpb24gaGlkZU5vblZpc2libGVTZWN0aW9ucygpIHtcbiAgbGV0IGksIHNlY3Rpb25JZCwgZGl2O1xuICBmb3IgKGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBzZWN0aW9uSWQgPSBzZWN0aW9uc1tpXTtcbiAgICBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpO1xuICAgIGlmIChzZWN0aW9uRGl2SWQgPT09IHNlY3Rpb25JZCkge1xuICAgICAgbGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rcy1idG4nKTtcblxuICAgICAgY2FyZHNBcnIgPSBBcnJheS5mcm9tKGNhcmRzKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGJnV2hpdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGJnV2hpdGUoZSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcbiAgICAgIH1cblxuICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2FsbCBmdW5jdGlvbiB3aGVuIG1vZGFsIGNsb3Nlc1xuZnVuY3Rpb24gc2hvd0xpbmtCdG5zKCkge1xuICBsZXQgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5rcycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGlua3NbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn1cblxuLy8gV2hlbiBNb2RhbCBvcGVucyBoaWRlIGxpbmsgYnV0dG9uc1xuZnVuY3Rpb24gdHJpZ2dlcmVkTW9kYWwoKSB7XG4gIGxldCBtb2RhbFRyaWdnZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtdHJpZ2dlcicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGFsVHJpZ2dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBtb2RhbFRyaWdnZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaGlkZUxpbmtCdG5zKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlkZUxpbmtCdG5zKCkge1xuICBsZXQgbW9kYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaW5rcycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChtb2RhbHNbaV0uc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG4gICAgICAgIGxpbmtzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnRyaWdnZXJlZE1vZGFsKCk7XG5cbi8vIENvbnRhY3QgZm9ybVxuKGZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJyk7XG4gIGxldCBmb3JtUmVzcG9uc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZm9ybS1yZXNwb25zZScpO1xuICBsZXQgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXN1Ym1pdC1idG4nKTtcblxuICBmb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBQcmVwYXJlIGRhdGEgdG8gc2VuZFxuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBmb3JtRWxlbWVudHMgPSBBcnJheS5mcm9tKGZvcm0pO1xuICAgIGZvcm1FbGVtZW50cy5tYXAoKGlucHV0KSA9PiAoZGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlKSk7XG5cbiAgICAvLyBMb2cgd2hhdCBsYW1iZGEgZnVuY3Rpb24gd2lsbCByZWNpZXZlXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgLy8gQ29uc3RydWN0IGFuIGh0dHAgUmVxdWVzdFxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3Blbihmb3JtLm1ldGhvZCwgZm9ybS5hY3Rpb24sIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuXG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdTZW5kaW5nLi4uJztcblxuICAgIC8vIHNlbmQgdGhlIGNvbGxlY3RlZCBkYXRhIGFzIEpTT05cbiAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdTZW5kIE1lc3NhZ2UnO1xuICAgIH1cblxuICAgIC8vIENhbGxiYWNrXG4gICAgeGhyLm9ubG9hZGVuZCA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnRhcmdldC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAvLyBGb3JtIHN1Ym1pc3Npb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAvLyBNLnRvYXN0KHtodG1sOiAnSSBhbSBhIHRvYXN0ISd9KVxuICAgICAgICBmb3JtUmVzcG9uc2UgPSBNLnRvYXN0KHtcbiAgICAgICAgICBodG1sOlxuICAgICAgICAgICAgXCJUaGFua3MgZm9yIHNlbmRpbmcgYSBtZXNzYWdlIG92ZXIsIEknbGwgYmUgaW4gdG91Y2ggc2hvcnRseSFcIixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWlsZWRcbiAgICAgICAgZm9ybVJlc3BvbnNlLmlubmVySFRNTCA9ICdFcnJvciBzZW5kaW5nIHlvdXIgbWVzc2FnZS4gVHJ5IGFnYWluLic7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5wYXJzZShyZXNwb25zZS50YXJnZXQucmVzcG9uc2UubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==