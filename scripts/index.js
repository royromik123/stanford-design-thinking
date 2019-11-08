window.addEventListener("scroll", e => {
  console.log(window.scrollY);
  var footer = document.querySelector("footer");
  if (window.scrollY <= 583) {
    footer.style.display = "none";
  } else {
    footer.style.display = "block";
  }
});

var footerBtn = document.getElementById("footer-btn");
footerBtn.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
);

var accordion = Array.from(document.getElementsByClassName("accordion"));

accordion.forEach((acc, i) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    var panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }

//   slides[slideIndex-1].style.display = "block";

// }

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
