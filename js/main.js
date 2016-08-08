$( document ).ready(function(){
  /** for carousel */
  $('.carousel.carousel-slider').carousel({full_width: true});
  
    $(".button-collapse").sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
   });
})
