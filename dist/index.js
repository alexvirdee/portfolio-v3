!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t){var n;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal"),t=(M.Modal.init(e,{onCloseEnd:function(){!function(){for(var e=document.getElementsByClassName("links"),t=0;t<e.length;t++)e[t].style.display="block"}()}}),document.querySelectorAll(".fixed-action-btn"));M.FloatingActionButton.init(t)})),n=(new Date).getFullYear(),document.getElementById("currentYear").innerHTML=n;var o=["Alex Virdee","Develop","Design","Learn"],r=0,a=document.getElementById("site-title");function l(){a.innerHTML=o[r],a.style.opacity=1,setTimeout(i,2e3)}function i(){++r>o.length-1?a.innerHTML=o[0]:(a.style.opacity=0,setTimeout(l,1e3))}l();var u,s,c;document.getElementById("current-job-title").innerHTML="Jr. Software Developer";function d(){for(var e=document.getElementsByClassName("modal"),t=0;t<e.length;t++)for(var n=document.getElementsByClassName("links"),o=0;o<n.length;o++)"block"!=e[o].style.display&&(n[o].style.display="none")}!function(){for(var e=document.getElementsByClassName("modal-trigger"),t=0;t<e.length;t++)e[t].addEventListener("click",(function(){d()}))}(),u=document.getElementById("contact-form"),s=document.getElementById("js-form-response"),c=document.getElementById("contact-submit-btn"),u.onsubmit=function(e){e.preventDefault();var t={};Array.from(u).map((function(e){return t[e.name]=e.value})),console.log(JSON.stringify(t));var n=new XMLHttpRequest;n.open(u.method,u.action,!0),n.setRequestHeader("Accept","application/json; charset=utf-8"),n.setRequestHeader("Content-Type","application/json; charset=utf-8"),c.textContent="Sending...",n.send(JSON.stringify(t)),n.onreadystatechange=function(){c.textContent="Send Message"},n.onloadend=function(e){200===e.target.status?(u.reset(),s=M.toast({html:"Thanks for sending a message over, I'll be in touch shortly!"})):(s.innerHTML="Error sending your message. Try again.",console.error(JSON.parse(e.target.response.message)))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BvcnRmb2xpby5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInllYXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpb25CdG5zIiwiTSIsIk1vZGFsIiwiaW5pdCIsIm9uQ2xvc2VFbmQiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93TGlua0J0bnMiLCJGbG9hdGluZ0FjdGlvbkJ1dHRvbiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidGl0bGVUZXh0QXJyIiwidGl0bGVUZXh0SW5kZXgiLCJ0aXRsZSIsImFuaW1hdGVUaXRsZVRleHQiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsIm5leHRUaXRsZVdvcmQiLCJmb3JtIiwiZm9ybVJlc3BvbnNlIiwiY29udGFjdEJ0biIsImhpZGVMaW5rQnRucyIsIm1vZGFscyIsIm1vZGFsVHJpZ2dlcnMiLCJ0cmlnZ2VyZWRNb2RhbCIsIm9uc3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImlucHV0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJtZXRob2QiLCJhY3Rpb24iLCJzZXRSZXF1ZXN0SGVhZGVyIiwidGV4dENvbnRlbnQiLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkZW5kIiwicmVzcG9uc2UiLCJ0YXJnZXQiLCJzdGF0dXMiLCJyZXNldCIsInRvYXN0IiwiaHRtbCIsImVycm9yIiwicGFyc2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxF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QUFNbkUsTUFBUW1FLEVBQU16RCxTQUd0RDBELFFBQVFDLElBQUlDLEtBQUtDLFVBQVVSLElBRzNCLElBQUlTLEVBQU0sSUFBSUMsZUFDZEQsRUFBSUUsS0FBS3JCLEVBQUtzQixPQUFRdEIsRUFBS3VCLFFBQVEsR0FDbkNKLEVBQUlLLGlCQUFpQixTQUFVLG1DQUMvQkwsRUFBSUssaUJBQWlCLGVBQWdCLG1DQUVyQ3RCLEVBQVd1QixZQUFjLGFBR3pCTixFQUFJTyxLQUFLVCxLQUFLQyxVQUFVUixJQUV4QlMsRUFBSVEsbUJBQXFCLFdBQ3ZCekIsRUFBV3VCLFlBQWMsZ0JBSTNCTixFQUFJUyxVQUFZLFNBQUNDLEdBQ2dCLE1BQTNCQSxFQUFTQyxPQUFPQyxRQUVsQi9CLEVBQUtnQyxRQUVML0IsRUFBZXZCLEVBQUV1RCxNQUFNLENBQ3JCQyxLQUNFLG1FQUlKakMsRUFBYVQsVUFBWSx5Q0FDekJ1QixRQUFRb0IsTUFBTWxCLEtBQUttQixNQUFNUCxFQUFTQyxPQUFPRCxTQUFTUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBpbml0TWFwKCkge1xuICBsZXQgbWlhbWkgPSB7IGxhdDogMjYuMTIyNCwgbG5nOiAtODAuMTM3MyB9O1xuXG4gIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgIHpvb206IDE0LFxuICAgIGNlbnRlcjogbWlhbWksXG4gICAgZ2VzdHVyZUhhbmRsaW5nOiAnY29vcGVyYXRpdmUnLFxuICB9KTtcblxuICAvLyBNYXJrZXIgcG9zaXRpb24gYXQgTWlhbWlcbiAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoeyBwb3NpdGlvbjogbWlhbWksIG1hcDogbWFwIH0pO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsZXQgb25Nb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNob3dMaW5rQnRucygpO1xuICB9O1xuICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKTtcbiAgbGV0IGluc3RhbmNlcyA9IE0uTW9kYWwuaW5pdChlbGVtcywgeyBvbkNsb3NlRW5kOiBvbk1vZGFsQ2xvc2UgfSk7XG5cbiAgbGV0IGFjdGlvbkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZml4ZWQtYWN0aW9uLWJ0bicpO1xuICBsZXQgYWN0aW9ucyA9IE0uRmxvYXRpbmdBY3Rpb25CdXR0b24uaW5pdChhY3Rpb25CdG5zKTtcbn0pO1xuXG4oZnVuY3Rpb24gZGF0ZUZ1bmMoKSB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRZZWFyJykuaW5uZXJIVE1MID0geWVhcjtcbn0pKCk7XG5cbmxldCB0aXRsZVRleHRBcnIgPSBbJ0FsZXggVmlyZGVlJywgJ0RldmVsb3AnLCAnRGVzaWduJywgJ0xlYXJuJ107XG5sZXQgdGl0bGVUZXh0SW5kZXggPSAwO1xubGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUtdGl0bGUnKTtcblxuZnVuY3Rpb24gYW5pbWF0ZVRpdGxlVGV4dCgpIHtcbiAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVUZXh0QXJyW3RpdGxlVGV4dEluZGV4XTtcbiAgLy8gT3BhY2l0eSB0byAxXG4gIHRpdGxlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXG4gIC8vIDIgc2Vjb25kcyBjYWxsIHRoZSBuZXh0IGZ1bmN0aW9uXG4gIHNldFRpbWVvdXQobmV4dFRpdGxlV29yZCwgMjAwMCk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaXRsZVdvcmQoKSB7XG4gIC8vIGluY3JlYXNlIGluZGV4IGZvciBuZXh0IHdvcmQgaW4gYXJyYXlcbiAgdGl0bGVUZXh0SW5kZXgrKztcblxuICBpZiAodGl0bGVUZXh0SW5kZXggPiB0aXRsZVRleHRBcnIubGVuZ3RoIC0gMSkge1xuICAgIC8vIHJlc2V0IHRvIGluaXRpYWwgdGV4dFxuICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlVGV4dEFyclswXTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTZXQgdGhlIG9wYWNpdHkgdG8gMFxuICB0aXRsZS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAvLyBBZnRlciBhbm90aGVyIHNlY29uZCBjYWxsIGFuaW1hdGUgZnVuY3Rpb25cbiAgc2V0VGltZW91dChhbmltYXRlVGl0bGVUZXh0LCAxMDAwKTtcbn1cblxuYW5pbWF0ZVRpdGxlVGV4dCgpO1xuXG4vLyBEaXNwbGF5IHNlY3Rpb25zXG5sZXQgc2VjdGlvbnMgPSBbJ2Fib3V0JywgJ3NraWxscycsICdwcm9qZWN0cycsICdjb250YWN0JywgJ2xvY2F0aW9uJ107XG5sZXQgc2VjdGlvbkRpdklkID0gbnVsbDtcblxubGV0IGN1cnJlbnRQb3MgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtam9iLXRpdGxlJykuaW5uZXJIVE1MID1cbiAgJ0pyLiBTb2Z0d2FyZSBEZXZlbG9wZXInKTtcblxuZnVuY3Rpb24gc2VjdGlvblZpc2liaWxpdHkoc2VjdGlvbklkKSB7XG4gIGxldCBpbml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luaXQnKTtcbiAgaWYgKHNlY3Rpb25EaXZJZCA9PT0gc2VjdGlvbklkKSB7XG4gICAgc2VjdGlvbkRpdklkID0gbnVsbDtcbiAgICBpbml0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIHNlY3Rpb25EaXZJZCA9IHNlY3Rpb25JZDtcbiAgICBpbml0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaGlkZU5vblZpc2libGVTZWN0aW9ucygpO1xufVxuXG5mdW5jdGlvbiBoaWRlTm9uVmlzaWJsZVNlY3Rpb25zKCkge1xuICBsZXQgaSwgc2VjdGlvbklkLCBkaXY7XG4gIGZvciAoaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNlY3Rpb25JZCA9IHNlY3Rpb25zW2ldO1xuICAgIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgaWYgKHNlY3Rpb25EaXZJZCA9PT0gc2VjdGlvbklkKSB7XG4gICAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICAgICAgbGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmtzLWJ0bicpO1xuXG4gICAgICBjYXJkc0FyciA9IEFycmF5LmZyb20oY2FyZHMpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgYmdXaGl0ZSk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gYmdXaGl0ZShlKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgICAgfVxuXG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDYWxsIGZ1bmN0aW9uIHdoZW4gbW9kYWwgY2xvc2VzXG5mdW5jdGlvbiBzaG93TGlua0J0bnMoKSB7XG4gIGxldCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmtzJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsaW5rc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufVxuXG4vLyBXaGVuIE1vZGFsIG9wZW5zIGhpZGUgbGluayBidXR0b25zXG5mdW5jdGlvbiB0cmlnZ2VyZWRNb2RhbCgpIHtcbiAgbGV0IG1vZGFsVHJpZ2dlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC10cmlnZ2VyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kYWxUcmlnZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgIG1vZGFsVHJpZ2dlcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoaWRlTGlua0J0bnMoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWRlTGlua0J0bnMoKSB7XG4gIGxldCBtb2RhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmtzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1vZGFsc1tpXS5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcbiAgICAgICAgbGlua3NbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudHJpZ2dlcmVkTW9kYWwoKTtcblxuLy8gQ29udGFjdCBmb3JtXG4oZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWZvcm0nKTtcbiAgbGV0IGZvcm1SZXNwb25zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1mb3JtLXJlc3BvbnNlJyk7XG4gIGxldCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3Qtc3VibWl0LWJ0bicpO1xuXG4gIGZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFByZXBhcmUgZGF0YSB0byBzZW5kXG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIGNvbnN0IGZvcm1FbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybSk7XG4gICAgZm9ybUVsZW1lbnRzLm1hcCgoaW5wdXQpID0+IChkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpKTtcblxuICAgIC8vIExvZyB3aGF0IGxhbWJkYSBmdW5jdGlvbiB3aWxsIHJlY2lldmVcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAvLyBDb25zdHJ1Y3QgYW4gaHR0cCBSZXF1ZXN0XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKGZvcm0ubWV0aG9kLCBmb3JtLmFjdGlvbiwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG5cbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ1NlbmRpbmcuLi4nO1xuXG4gICAgLy8gc2VuZCB0aGUgY29sbGVjdGVkIGRhdGEgYXMgSlNPTlxuICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ1NlbmQgTWVzc2FnZSc7XG4gICAgfVxuXG4gICAgLy8gQ2FsbGJhY2tcbiAgICB4aHIub25sb2FkZW5kID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UudGFyZ2V0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIC8vIEZvcm0gc3VibWlzc2lvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIC8vIE0udG9hc3Qoe2h0bWw6ICdJIGFtIGEgdG9hc3QhJ30pXG4gICAgICAgIGZvcm1SZXNwb25zZSA9IE0udG9hc3Qoe1xuICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICBcIlRoYW5rcyBmb3Igc2VuZGluZyBhIG1lc3NhZ2Ugb3ZlciwgSSdsbCBiZSBpbiB0b3VjaCBzaG9ydGx5IVwiLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhaWxlZFxuICAgICAgICBmb3JtUmVzcG9uc2UuaW5uZXJIVE1MID0gJ0Vycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlLiBUcnkgYWdhaW4uJztcbiAgICAgICAgY29uc29sZS5lcnJvcihKU09OLnBhcnNlKHJlc3BvbnNlLnRhcmdldC5yZXNwb25zZS5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9