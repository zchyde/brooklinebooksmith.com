$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close, .button__map-toggle').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});