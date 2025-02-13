$(document).ready(function() {
   $('.toggle-css').on('click', function(e) {
      var $this = $(this);
      var stylesheet = $('link[href="css/style.css"]')[0];

      if (stylesheet.disabled == true) {
         stylesheet.disabled = false
         $(this).html('Disable CSS');
      }
      else {
         stylesheet.disabled = true;
         $(this).html('Enable CSS');
      }

      return false;
   });
});
