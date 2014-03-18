(function() {
  var $mainimage = $('.js-mainimage');
  var $swap = $('.js-swap');


  $swap.on('click', function(e){
      e.preventDefault();
      if($mainimage.attr('src') == 'images/hipster-back.jpg'){
        $mainimage.attr('src', 'images/hipster-front.jpg');
      }else{
        $mainimage.attr('src', 'images/hipster-back.jpg');
      }
  });
})();