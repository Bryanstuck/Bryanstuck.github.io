// var vari = document.getElementById("empty");
//           var snake = document.getElementById("snake");
//           var onSnakeClick = function(e) {
//               var stashePic = document.getElementById("mustache");
//               stashePic.style.top = e.clientY - 10 + "px";
//               stashePic.style.left = e.clientX - 40 + "px";
//               vari.textContent = e.clientY + "px" + e.clientX + "px";
//           };
//           snake.addEventListener("click", onSnakeClick);

          //Make the DIV element draggagle:
          dragElement(document.getElementById("mustache"));
          dragElement(document.getElementById("hat"));

          function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
              /* if present, the header is where you move the DIV from:*/
              document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
              /* otherwise, move the DIV from anywhere inside the DIV:*/
              elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
              e = e || window.event;
              e.preventDefault();
              // get the mouse cursor position at startup:
              pos3 = e.clientX;
              pos4 = e.clientY;
              document.onmouseup = closeDragElement;
              // call a function whenever the cursor moves:
              document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
              e = e || window.event;
              e.preventDefault();
              // calculate the new cursor position:
              pos1 = pos3 - e.clientX;
              pos2 = pos4 - e.clientY;
              pos3 = e.clientX;
              pos4 = e.clientY;
              // set the element's new position:
              elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
              elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
              /* stop moving when mouse button is released:*/
              document.onmouseup = null;
              document.onmousemove = null;
            }
          }

// This function moves the mustache, trying to figure out how to seperate them
// var vari = document.getElementById("empty");
//           var snake = document.getElementById("snake");
//           var onSnakeClick = function(e) {
//               var stashePic = document.getElementById("hat");
//               stashePic.style.top = e.clientY - 10 + "px";
//               stashePic.style.left = e.clientX - 40 + "px";
//               vari.textContent = e.clientY + "px" + e.clientX + "px";
//           };
//           snake.addEventListener("click", onSnakeClick);

// function getMouseCoords(e) {
//   var e = e || window.event;
//   document.getElementById('msg').innerHTML = e.clientX + ', ' +
//            e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
// }
//
//
// var followCursor = (function() {
//   var s = document.createElement('div');
//   s.style.position = 'absolute';
//   s.style.margin = '0';
//   s.style.padding = '5px';
//   s.style.border = '1px solid red';
//
//   return {
//     init: function() {
//       document.body.appendChild(s);
//     },
//
//     run: function(e) {
//       var e = e || window.event;
//       s.style.left  = (e.clientX - 5) + 'px';
//       s.style.top = (e.clientY - 5) + 'px';
//       getMouseCoords(e);
//     }
//   };
// }());
//
// window.onload = function() {
//   followCursor.init();
//   document.body.onmousemove = followCursor.run;
// }
