$(document).ready(function () {
  $(".btn").click(function () {
    $("input[type='text'], textarea").val("");
  });
});

$(function () {
  $('.mouse').click(function () {
    $('html, body').animate({ scrollTop: $('section.main-area__form').offset().top }, 'slow');
    return false;
  });
});
