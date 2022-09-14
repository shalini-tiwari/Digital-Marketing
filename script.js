window.onload = function () {
  var backgroundImg = [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  setInterval(changeImage, 5000);

  function changeImage() {
    var i = Math.floor(Math.random() * 3);
    document.getElementById("background-image").style.backgroundImage =
      "url('" + backgroundImg[i] + "')";
  }

  setTimeout(modalOpen, 5000);
  function modalOpen() {
    var element = document.getElementById("modal-wrapper");
    element.classList.add("open");
  }
};

function toggleModalClose() {
  var element = document.getElementById("modal-wrapper");
  element.classList.remove("open");
}

function modalOpen() {
  var element = document.getElementById("modal-wrapper");
  element.classList.add("open");
}

// <div id="scroll-image">
// <img src=
// "https://media.geeksforgeeks.org/wp-content/uploads/20200318142245/CSS8.png"
//      class="test" />
// <img src=
// "https://media.geeksforgeeks.org/wp-content/uploads/20200318142309/php7.png"
//      class="test" />
// <img src=
// "https://media.geeksforgeeks.org/wp-content/uploads/20200318142254/html9.png"
//      class="test" />
// </div>

// startImageTransition();

// function startImageTransition() {
//   var images = document.getElementsByClassName("test");

//   for (var i = 0; i < images.length; ++i) {
//     images[i].style.opacity = 1;
//   }

//   var top = 1;

//   var cur = images.length - 1;

//   setInterval(changeImage, 3000);

//   async function changeImage() {
//     var nextImage = (1 + cur) % images.length;

//     images[cur].style.zIndex = top + 1;
//     images[nextImage].style.zIndex = top;

//     await transition();

//     images[cur].style.zIndex = top;

//     images[nextImage].style.zIndex = top + 1;

//     top = top + 1;

//     images[cur].style.opacity = 1;

//     cur = nextImage;
//   }

//   function transition() {
//     return new Promise(function (resolve, reject) {
//       var del = 0.01;

//       var id = setInterval(changeOpacity, 10);

//       function changeOpacity() {
//         images[cur].style.opacity -= del;
//         if (images[cur].style.opacity <= 0) {
//           clearInterval(id);
//           resolve();
//         }
//       }
//     });
//   }
// }
