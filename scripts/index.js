window.addEventListener("scroll", e => {
  
  var footer = document.getElementById("download-brochure-footer");

  if (window.innerWidth <= 600) {
    if (window.scrollY <= 954) {
      footer.style.display = "none";
    } else {
      footer.style.display = "block";
    }
  } else {
    if (window.scrollY <= 583) {
      footer.style.display = "none";
    } else {
      footer.style.display = "block";
    }
  }
});

var footerBtn = document.getElementById("footer-btn");

footerBtn.addEventListener("click", () => {
  if (window.innerWidth <= 600) {
    window.scrollTo({
      top: 320,
      behavior: "smooth"
    });
  } else {
    window.scrollTo({
      top: 70,
      behavior: "smooth"
    });
  }
});

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 1
//     },
//     1000: {
//       items: 1
//     }
//   }
// });

$(".single-item").slick({
		infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          dots:true
        }
      }
    ]
  
  });