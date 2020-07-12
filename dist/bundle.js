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

eval("document.addEventListener('DOMContentLoaded', () => {\n  let onModalClose = () => {\n    showLinkBtns();\n  };\n  let elems = document.querySelectorAll('.modal');\n  let instances = M.Modal.init(elems, { onCloseEnd: onModalClose });\n\n  let actionBtns = document.querySelectorAll('.fixed-action-btn');\n  let actions = M.FloatingActionButton.init(actionBtns);\n});\n\n(function dateFunc() {\n  let today = new Date();\n  let year = today.getFullYear();\n  document.getElementById('currentYear').innerHTML = year;\n})();\n\nlet titleTextArr = ['Alex Virdee', 'Develop', 'Design', 'Learn'];\nlet titleTextIndex = 0;\nlet title = document.getElementById('site-title');\n\nfunction animateTitleText() {\n  title.innerHTML = titleTextArr[titleTextIndex];\n  // Opacity to 1\n  title.style.opacity = 1;\n\n  // 2 seconds call the next function\n  setTimeout(nextTitleWord, 2000);\n}\n\nfunction nextTitleWord() {\n  // increase index for next word in array\n  titleTextIndex++;\n\n  if (titleTextIndex > titleTextArr.length - 1) {\n    // reset to initial text\n    title.innerHTML = titleTextArr[0];\n    return;\n  }\n\n  // Set the opacity to 0\n  title.style.opacity = 0;\n\n  // After another second call animate function\n  setTimeout(animateTitleText, 1000);\n}\n\nanimateTitleText();\n\n// Display sections\nlet sections = ['about', 'skills', 'projects', 'contact', 'location'];\nlet sectionDivId = null;\n\nlet currentPos = (document.getElementById('current-job-title').innerHTML =\n  'Web Application Developer');\n\nfunction sectionVisibility(sectionId) {\n  let init = document.getElementById('init');\n  if (sectionDivId === sectionId) {\n    sectionDivId = null;\n    init.style.display = 'block';\n  } else {\n    sectionDivId = sectionId;\n    init.style.display = 'none';\n  }\n  hideNonVisibleSections();\n}\n\nfunction hideNonVisibleSections() {\n  let i, sectionId, div;\n  for (i = 0; i < sections.length; i++) {\n    sectionId = sections[i];\n    div = document.getElementById(sectionId);\n    if (sectionDivId === sectionId) {\n      let cards = document.querySelectorAll('.card');\n      let links = document.querySelectorAll('.links-btn');\n\n      cardsArr = Array.from(cards);\n\n      links.forEach((link) => {\n        link.addEventListener('mousedown', bgWhite);\n      });\n\n      function bgWhite(e) {\n        document.body.style.backgroundColor = '#fff';\n      }\n\n      div.style.display = 'block';\n    } else {\n      div.style.display = 'none';\n    }\n  }\n}\n\n// Call function when modal closes\nfunction showLinkBtns() {\n  let links = document.getElementsByClassName('links');\n  for (let i = 0; i < links.length; i++) {\n    links[i].style.display = 'block';\n  }\n}\n\n// When Modal opens hide link buttons\nfunction triggeredModal() {\n  let modalTriggers = document.getElementsByClassName('modal-trigger');\n  for (let i = 0; i < modalTriggers.length; i++) {\n    modalTriggers[i].addEventListener('click', function () {\n      hideLinkBtns();\n    });\n  }\n}\n\nfunction hideLinkBtns() {\n  let modals = document.getElementsByClassName('modal');\n  for (let i = 0; i < modals.length; i++) {\n    let links = document.getElementsByClassName('links');\n    for (let i = 0; i < links.length; i++) {\n      if (modals[i].style.display != 'block') {\n        links[i].style.display = 'none';\n      }\n    }\n  }\n}\n\ntriggeredModal();\n\n// Contact form\n(function submitForm() {\n  const form = document.getElementById('contact-form');\n  const formResponse = document.getElementById('js-form-response');\n\n  form.onsubmit = (e) => {\n    e.preventDefault();\n\n    // Prepare data to send\n    const data = {};\n    const formElements = Array.from(form);\n    formElements.map((input) => (data[input.name] = input.value));\n\n    // Log what lambda function will recieve\n    console.log(JSON.stringify(data));\n\n    // Construct an http Request\n    let xhr = new XMLHttpRequest();\n    xhr.open(form.method, form.action, true);\n    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');\n    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n\n    // send the collected data as JSON\n    xhr.send(JSON.stringify(data));\n\n    // Callback\n    xhr.onloadend = (response) => {\n      if (response.target.status === 200) {\n        // Form submission was successful\n        form.reset();\n        // M.toast({html: 'I am a toast!'})\n        formResponse = M.toast({\n          html:\n            \"Thanks for sending a message over, I'll be in touch shortly 😎.\",\n        });\n      } else {\n        // Failed\n        formResponse.innerHTML = 'Error sending your message. Try again.';\n        console.error(JSON.parse(response.target.response.message));\n      }\n    };\n  };\n})();\n\nfunction initMap() {\n  let miami = { lat: 25.7617, lng: -80.1918 };\n\n  let map = new google.maps.Map(document.getElementById('map'), {\n    zoom: 14,\n    center: miami,\n    gestureHandling: 'cooperative',\n  });\n\n  // Marker position at Miami\n  let marker = new google.maps.Marker({ position: miami, map: map });\n}\n\n\n//# sourceURL=webpack:///./assets/js/portfolio.js?");

/***/ })

/******/ });