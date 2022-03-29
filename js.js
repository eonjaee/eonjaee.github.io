

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



































const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")
const submitButton = document.getElementById('validate')
const form = document.getElementById('stepByStepForm')
const dots = document.getElementsByClassName('progress-bar__dot')
const numberOfSteps = 3
let currentStep = 1

for (let i = 0; i < dots.length; ++i) {
  dots[i].addEventListener('click', () => {
    goToStep(i + 1)
  })
}

previousButton.onclick = goPrevious
nextButton.onclick = goNext


function goNext(e) {
  e.preventDefault()
  currentStep += 1
  goToStep(currentStep)
}

function goPrevious(e) {
  e.preventDefault()
  currentStep -= 1
  goToStep(currentStep)
}

function goToStep(stepNumber) {
  currentStep = stepNumber

  let inputsToHide = document.getElementsByClassName('step')
  let inputs = document.getElementsByClassName(`step${currentStep}`)
  let indicators = document.getElementsByClassName('progress-bar__dot')

  for (let i = indicators.length - 1; i >= currentStep; --i) {
    indicators[i].classList.remove('full')
  }

  for (let i = 0; i < currentStep; ++i) {
    indicators[i].classList.add('full')
  }

  //hide all input
  for (let i = 0; i < inputsToHide.length; ++i) {
    hide(inputsToHide[i])
  }

  //only show the right one
  for (let i = 0; i < inputs.length; ++i) {
    show(inputs[i])
  }

  //if we reached final step
  if (currentStep === numberOfSteps) {
    enable(previousButton)
    disable(nextButton)
    show(submitButton)
  }

  //else if first step
  else if (currentStep === 1) {
    disable(previousButton)
    enable(next)
    hide(submitButton)
  }

  else {
    enable(previousButton)
    enable(next)
    hide(submitButton)
  }
}

function enable(elem) {
  elem.classList.remove("disabled");
  elem.disabled = false;
}

function disable(elem) {
  elem.classList.add("disabled");
  elem.disabled = true;
}

function show(elem) {
  elem.classList.remove('hidden')
}

function hide(elem) {
  elem.classList.add('hidden')
}
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({ opacity: 0 }, {
    step: function (now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale current_fs down to 80%
      scale = 1 - (1 - now) * 0.2;
      //2. bring next_fs from the right(50%)
      left = (now * 50) + "%";
      //3. increase opacity of next_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        'transform': 'scale(' + scale + ')',
        'position': 'absolute'
      });
      next_fs.css({ 'left': left, 'opacity': opacity });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate({ opacity: 0 }, {
    step: function (now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1 - now) * 50) + "%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({ 'left': left });
      previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animating = false;
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function () {
  return false;
})

