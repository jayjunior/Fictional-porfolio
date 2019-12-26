// global app variables
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const navAnchors = document.querySelectorAll(".image .main .nav-links a");
const main = document.querySelector(".main");
const breakPoint = 768;
// Links slider Animation
const linksOnSmallAnimation = () => {
	let reverseCounter = navLinks.length - 1;
	document.querySelector(".main").style.backgroundColor = "black";
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[
			i
		].style.animation = `navLinkFadeOut 0.5s ease forwards ${reverseCounter /
			5}s`;
		reverseCounter--;
	}

	//Burger Animation
	nav.classList.toggle("nav-activeInOut");
	burger.classList.toggle("toggle");
};
// Burger Event with mobile animation for Links
const navSlide = () => {
	if (window.outerWidth <= breakPoint) {
		let fictualLength = navAnchors.length - 1;
		for (let i = 0; i < navAnchors.length; i++) {
			navAnchors[i].addEventListener("click", linksOnSmallAnimation);
		}
	}
	// Toggle Nav
	burger.addEventListener("click", () => {
		main.style.backgroundColor = "black";
		// nav.classList.toggle("nav-activeInOut");
		//Animate Links
		let reverseCounter = navLinks.length - 1;
		for (let i = 0; i < navLinks.length; i++) {
			if (!navLinks[i].style.animation) {
				navLinks[
					i
				].style.animation = `navLinkFadeIn 0.5s ease forwards ${i / 5 +
					1}s`;
			} else if (
				navLinks[i].style.animation ==
				`0.5s ease ${reverseCounter /
					5}s 1 normal forwards running navLinkFadeOut`
			) {
				navLinks[
					i
				].style.animation = `navLinkFadeIn 0.5s ease forwards ${i / 5 +
					1}s`;
			} else if (
				`0.5s ease ${i / 5 +
					1}s 1 normal forwards running navLinkFadeIn`
			) {
				navLinks[
					i
				].style.animation = `navLinkFadeIn 0.5s ease forwards ${i / 5 +
					1}s`;
			} else {
				navLinks[
					i
				].style.animation = `navLinkFadeOut 0.5s ease forwards ${reverseCounter /
					5}s`;
			}
			reverseCounter--;
		}
		//Burger Animation
		nav.classList.toggle("nav-activeInOut");
		burger.classList.toggle("toggle");
	});
};
// animation event adder for mobile
function linksOnSmall() {
	// // for (i of navAnchors) {
	// // 	i.removeEventListener("click", linksOnSmallAnimation);
	// // 	i.parentNode.style.animation = '';
	// // }
	// }
	if (window.outerWidth <= breakPoint) {
		for (i of navAnchors) {
			i.addEventListener("click", linksOnSmallAnimation);
		}
	} else {
		for (i of navAnchors) {
			i.removeEventListener("click", linksOnSmallAnimation);
			i.parentNode.style.animation = "";
		}
	}
}
// function for shrink navbar on scroll
function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		document.querySelector(".main").style.height = "58px";
		document.querySelector(".main").style.backgroundColor = "	rgba(0,0,0,1)";
		document.querySelector(".right-bottom").style.opacity = 1;
		// document.querySelector("nav").style.height = "80px";
		// document.getElementById("logo").style.fontSize = "25px";
	} else {
		document.querySelector(".main").style.height = "80px";
		document.querySelector(".main").style.backgroundColor =
			"rgba(0,0,0,0.1)";
		document.querySelector(".right-bottom").style.opacity = 0;
		// document.getElementById("logo").style.fontSize = "35px";
	}
}
// function to ensure form validation
function formValidate() {
	let name = document.querySelector("#name");
	let userEmail = document.querySelector("#email");
	let suggestion = document.querySelector("#suggestion");
	let status = document.querySelector("#status");
	let button = document.querySelector("#submit");
	button.addEventListener("click", e => {
		e.preventDefault();
		console.log(suggestion.textContent);
		let emailPattern = /[\w\.-]+@[\w\.-]+\.[\w\.-]+/i;
		let email = userEmail.value;
		let match = email.match(emailPattern);
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
				status.textContent =
					"✔ Your suggestion has been sucessfully submited";
				status.style.color = "green";
				status.style.display = "block";
			}
		}
	});
}
// modular function to invoke all other file functions
let app = function() {
	//invoke navSlide function
	navSlide();
	// controls scroll
	window.onscroll = function() {
		scrollFunction();
	};
	// controls resize
	window.onresize = function() {
		linksOnSmall();
	};
	formValidate();
};
app();
