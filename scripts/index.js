
window.addEventListener("scroll", e => {
  // console.log(window.scrollY);
  var footer = document.querySelector("footer");
  if (window.scrollY <= 583) {
    footer.style.display = "none";
  } else {
    footer.style.display = "block";
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

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
