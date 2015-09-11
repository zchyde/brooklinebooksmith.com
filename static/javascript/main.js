(function() { 

  // visual grid: use 'g' key to toggle body class
  var k = new Kibo(); 
  k.down(['g'], function() {
    $('body').addClass('grid');
  }).up('g', function() {
    $('body').removeClass('grid'); 
  });

  // enquire: media queries, but for javascript
  enquire.register("screen and (max-width: 48em)", {
    match : function() {
      console.log('up to 768px wide') 
    },
    unmatch : function() {
    }  
  })
  .register("screen and (min-width: 48.1em)", {
    match : function() {
      console.log('over 768px wide') 
    },
    unmatch : function() {   
    }
  }); 

  // header navbar
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
 
})();