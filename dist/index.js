"use strict";

// global app variables
var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links li");
var navAnchors = document.querySelectorAll(".image .main .nav-links a");
var main = document.querySelector(".main");
var breakPoint = 768; // Links slider Animation

var linksOnSmallAnimation = function linksOnSmallAnimation() {
  var reverseCounter = navLinks.length - 1;
  document.querySelector(".main").style.backgroundColor = "black";

  for (var _i = 0; _i < navLinks.length; _i++) {
    navLinks[_i].style.animation = "navLinkFadeOut 0.5s ease forwards ".concat(reverseCounter / 5, "s");
    reverseCounter--;
  } //Burger Animation


  nav.classList.toggle("nav-activeInOut");
  burger.classList.toggle("toggle");
}; // Burger Event with mobile animation for Links


var navSlide = function navSlide() {
  if (window.outerWidth <= breakPoint) {
    var fictualLength = navAnchors.length - 1;

    for (var _i2 = 0; _i2 < navAnchors.length; _i2++) {
      navAnchors[_i2].addEventListener("click", linksOnSmallAnimation);
    }
  } // Toggle Nav


  burger.addEventListener("click", function () {
    main.style.backgroundColor = "black"; // nav.classList.toggle("nav-activeInOut");
    //Animate Links

    var reverseCounter = navLinks.length - 1;

    for (var _i3 = 0; _i3 < navLinks.length; _i3++) {
      if (!navLinks[_i3].style.animation) {
        navLinks[_i3].style.animation = "navLinkFadeIn 0.5s ease forwards ".concat(_i3 / 5 + 1, "s");
      } else if (navLinks[_i3].style.animation == "0.5s ease ".concat(reverseCounter / 5, "s 1 normal forwards running navLinkFadeOut")) {
        navLinks[_i3].style.animation = "navLinkFadeIn 0.5s ease forwards ".concat(_i3 / 5 + 1, "s");
      } else if ("0.5s ease ".concat(_i3 / 5 + 1, "s 1 normal forwards running navLinkFadeIn")) {
        navLinks[_i3].style.animation = "navLinkFadeIn 0.5s ease forwards ".concat(_i3 / 5 + 1, "s");
      } else {
        navLinks[_i3].style.animation = "navLinkFadeOut 0.5s ease forwards ".concat(reverseCounter / 5, "s");
      }

      reverseCounter--;
    } //Burger Animation


    nav.classList.toggle("nav-activeInOut");
    burger.classList.toggle("toggle");
  });
}; // animation event adder for mobile


function linksOnSmall() {
  // // for (i of navAnchors) {
  // // 	i.removeEventListener("click", linksOnSmallAnimation);
  // // 	i.parentNode.style.animation = '';
  // // }
  // }
  if (window.outerWidth <= breakPoint) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = navAnchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        i = _step.value;
        i.addEventListener("click", linksOnSmallAnimation);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = navAnchors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        i = _step2.value;
        i.removeEventListener("click", linksOnSmallAnimation);
        i.parentNode.style.animation = "";
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
} // function for shrink navbar on scroll


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".main").style.height = "58px";
    document.querySelector(".main").style.backgroundColor = "	rgba(0,0,0,1)";
    document.querySelector(".right-bottom").style.opacity = 1; // document.querySelector("nav").style.height = "80px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.querySelector(".main").style.height = "80px";
    document.querySelector(".main").style.backgroundColor = "rgba(0,0,0,0.1)";
    document.querySelector(".right-bottom").style.opacity = 0; // document.getElementById("logo").style.fontSize = "35px";
  }
} // function to ensure form validation


function formValidate() {
  var name = document.querySelector("#name");
  var userEmail = document.querySelector("#email");
  var suggestion = document.querySelector("#suggestion");
  var status = document.querySelector("#status");
  var button = document.querySelector("#submit");
  button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(suggestion.textContent);
    var emailPattern = /[\w\.-]+@[\w\.-]+\.[\w\.-]+/i;
    var email = userEmail.value;
    var match = email.match(emailPattern);

    if (!name.value || !userEmail || !suggestion.value) {
      status.textContent = "❌ No empty field";
      status.style.color = "red";
      status.style.display = "block";
    } else {
      if (!match || match[0].length != email.length) {
        status.textContent = "❌ Invalid Email address!";
        status.style.color = "red";
        status.style.display = "block";
      } else {
        status.textContent = "✔ Your suggestion has been sucessfully submited";
        status.style.color = "green";
        status.style.display = "block";
      }
    }
  });
} // modular function to invoke all other file functions


var app = function app() {
  //invoke navSlide function
  navSlide(); // controls scroll

  window.onscroll = function () {
    scrollFunction();
  }; // controls resize


  window.onresize = function () {
    linksOnSmall();
  };

  formValidate();
};

app();