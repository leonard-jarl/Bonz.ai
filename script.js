function openHamburger() {
  document.getElementById("hamburger").style.width = "100%";
}

function closeHamburger() {
  document.getElementById("hamburger").style.width = "0%";
}

$(document).on('scroll', function(){
  if ( $(window).scrollTop() > 100) {
      $('header').addClass('header--not-transparent');
  } else {
      $('header').removeClass('header--not-transparent');
  }
});