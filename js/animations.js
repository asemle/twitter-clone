$(document).ready(function() {
  $('.tweet-compose').on('focusin', function () {
    $('.tweet-compose').animate({height: '5rem'})
  })
  $('.tweet-compose').on('focusout', function () {
    $('.tweet-compose').animate({height: '2.5rem'})
  })
  $('.tweet-compose').on('focusin', function () {
    $('#tweet-controls').show('fast')
  })

  $('.tweet-compose').on('focusout', function () {
    $('#tweet-controls').hide('fast')
  })

  $('textarea').keydown(function() {
      var count     = $(this).val().length,
          remaining = 140 - count;

      $('#char-count').text(remaining);

      if(remaining <= 10) {
          $('#char-count').css('color', 'red');
      } else {
          $('#char-count').css('color', '#999');
      }

      if (count > 140) {
          $('#tweet-submit').attr('disabled', 'disabled');
      } else {
          $('#tweet-submit').attr('disabled', false);
      }
  });

  $('.tweet').hover(function() {
    $(this).find('.tweet-actions').toggle()
  })

  $('.tweet').on('click', function() {
    $(this).find('.stats').toggle()
  })


})
