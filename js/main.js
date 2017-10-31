$(document).ready(function() {
    $('.team__ACCORDEON__member').click(
     function() {
      $(this).addClass('team__ACCORDEON__member-hidden');
     },
     function() {
      $(this).removeClass('team__ACCORDEON__member-hidden');
     }
    )})