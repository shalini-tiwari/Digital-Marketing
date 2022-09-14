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

function contactForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || phone == "" || message == "") {
    alert("Please fill all the fields");
  } else {
    var contactData = JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
    console.log(contactData);
  }

  console.log("contact form");
}
