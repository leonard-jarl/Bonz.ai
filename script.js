function openHamburger() {
  document.getElementById("hamburger").style.width = "101%";
}

function closeHamburger() {
  document.getElementById("hamburger").style.width = "0%";
}

$(document).on('scroll', function(){
  if ( $(window).scrollTop() < 100) {
      $('header').addClass('header--transparent');
  } else {
      $('header').removeClass('header--transparent');
  }
});


$(function() {

  $('input[id="date"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });

  $('input[name="date"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM') + ' - ' + picker.endDate.format('DD/MM'));
  });

  $('input[name="date"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });

});