$( document ).ready(function(){
  $('.carousel').carousel({
    interval: 1000
  })
  
  $('a[data-slide="prev"]').click(function() {
    $('.carousel').carousel('prev');
  });
  
  $('a[data-slide="next"]').click(function() {
    $('.carousel').carousel('next');
  });
});

