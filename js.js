

//
// Login/Register box
//

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const loginbox = document.getElementById('loginbox');

signUpButton.addEventListener('click', () => {
  loginbox.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  loginbox.classList.remove("right-panel-active");
});

function tbc() {
  alert("Feature not implemented yet.")
}

function tbc1() {
  alert("Coming soon!")
}

// Get the modal
var modal = document.getElementById("loginBox");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == listOverlay) {
    listOverlay.style.display = "none";
    listOverlay1.style.display = "block";
  }
}

// var filterByCollection = document.getElementById("filter-list-collection");
// var ByCollection = document.getElementById("filter-collection");
// filterByCollection.onclick = function () {
//   ByCollection.style.display = "block";
// }

//
// list.html Overlay
//
listOverlay = document.getElementById("listing-overlay");
listOverlay1 = document.getElementById("listing-1");
function disableOverlay() {
  listOverlay.style.display = "none";
  listOverlay1.style.display = "block";
}

// filter listings
// document.getElementById("filter-collection").style.display = "none";
function filterByCollection() {
  var collection = document.getElementById("filter-collection");
  if (collection.style.display === "none") {
    collection.style.display = "block";
  } else {
    collection.style.display = "none";
  }
}

// document.getElementById("filter-price").style.display = "none";
function filterByPrice() {
  var price = document.getElementById("filter-price");
  if (price.style.display === "none") {
    price.style.display = "block";
  } else {
    price.style.display = "none";
  }
}


//
// index.html NFT Slideshow
//

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function () {
  fileChosen.textContent = this.files[0].name
})