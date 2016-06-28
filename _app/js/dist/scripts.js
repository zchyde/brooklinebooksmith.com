$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close, .button__map-toggle').on('click touchstart',function (e) {
  $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
  e.preventDefault();
});

$('.accordion-tabs').each(function(index) {
  $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
});
$('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
  if (!$(this).hasClass('is-active')) {
    event.preventDefault();
    var accordionTabs = $(this).closest('.accordion-tabs');
    accordionTabs.find('.is-open').removeClass('is-open').hide();

    $(this).next().toggleClass('is-open').toggle();
    accordionTabs.find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  } else {
    event.preventDefault();
  }
});
//opens non-local links in new window
 //$('a:not([href^="{{ site.url }}"]):not([href^="#"]):not([href^="/"])').attr("target","_blank");

  $('#pick-up').on('click', function() {
    $('#shipping_charge').val('1', $(this).val());
    $('#item_name').val('Signed First Editions Book Club: Pickup Plan', $(this).val());
  });

  $('#ship').on('click', function() {
    $('#shipping_charge').val('2', $(this).val());
    $('#item_name').val('Signed First Editions Book Club: Delivery Plan', $(this).val());
  });
