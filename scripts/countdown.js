// require('jquery-countdown');
var last = "00:00:00:00";
var now = "2019/12/20 12:34:56";
$(document).ready(function() {
  $("#clock").countdown(now, function(event) {
    var format = "%H:%M:%S";
    if (event.offset.totalDays < 10) {
      format = "%-d:" + format;
    } else {
      format = "0%-d:" + format;
    }
    var now = event.strftime(format);
    animateTime(last, now);
    // console.log(last+"     "+now);
    last = now;

    //   $(this).html(event.strftime('%d  %H:%M:%S'));
  });

  function animateTime(last, now) {
    for (var i = 0; i < now.length; i++) {
      if (last[i] != now[i]) {
        animate(i, now[i]);
      }
    }
  }

  function animate(index, number) {
    var element = document.getElementsByClassName("timer")[index];
    console.log(element);

    var second = element.lastElementChild.cloneNode(true);
    second.innerHTML = number;
    
    
      element.appendChild(second);
      

      element.classList.add("move");

      
    setTimeout(() => {
      
      element.classList.remove("move"); 
      

    },450);
    setTimeout(() => {
      element.removeChild(element.firstElementChild);
    },450)
  }
});
