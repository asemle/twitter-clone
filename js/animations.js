$(document).ready(function() {

    $('.tweet-actions').hide();
    $('.stats').hide();
    $('.reply').hide();
    $(document).on({
    mouseenter: function () {
        $(this).find('.tweet-actions').show();
    },
    mouseleave: function () {
          $(this).find('.tweet-actions').hide()
    }
  },'.tweet');

  $(document).on({
      click: function () {
        $(this).find('.stats').slideToggle();
        $(this).find('.reply').slideToggle();//stuff to do on mouse enter
      }
  }, ".tweet");



    $('#tweet-submit').hide();
    $('#char-count').hide();
    $('#tweet-content .tweet-compose').focusin(function() {
        $(this).animate({
            height: '5em'
        });
        $('#tweet-submit').show();
        $('#char-count').show();
    })

    $('#dashboard').on('focusout', function() {
        setTimeout(function() {
            if ($('#tweet-content').find(":focus").length == 0) {
                $('#dashboard .tweet-compose').animate({
                    height: '2.5em'
                });
                $('#tweet-submit').hide();
                $('#char-count').hide();
            }
        }, 50)
    })

    $('.tweet-compose').keyup(function() {
        var charsleft = 140 - $(this).val().length - 1;
        $('#char-count').text(charsleft);
        if (charsleft <= 10) {
            $('#char-count').css('color', 'rgba(255,0,0, 0.4)')
        } else {
            $('#char-count').css('color', '#999')
        }
        if (charsleft < 0) {
            $('.button').prop('disabled', true);
        } else {
            $('.button').prop('disabled', false);
        }
    });

    $('.button').click(function() {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];

        var now = new Date();

        var time

        function timer() {
            if (now.getHours() > 12) {
                time = now.getHours() - 12 + ':' + now.getMinutes() + ' PM'
            } else {
                time = now.getHours() + ':' + now.getMinutes() + ' AM'
            }
            return time
        }

        var dateTime = timer() + ' - ' + now.getDate() + " " + monthNames[now.getMonth()] + ' ' + now.getFullYear().toString().slice(2, 4);

        var submittedTweet = $('#tweet-content .tweet-compose').val()
        $('#stream').prepend('<div class="tweet">' +
            '<div class="content">' +
            '<img class="avatar" src="img/alagoon.jpg" />' +
            '<strong class="fullname">Andrew </strong>' +
            '<span class="username">@sloob</span>' +
            '<p class="tweet-text">' + submittedTweet + '</p>' +
            '<div class="tweet-actions">' +
            '<ul>' +
            '<li><span class="icon action-reply"></span> Reply</li>' +
            '<li><span class="icon action-retweet"></span> Retweet</li>' +
            '<li><span class="icon action-favorite"></span> Favorite</li>' +
            '<li><span class="icon action-more"></span> More</li>' +
            '</ul>' +
            '</div>' +
            '<div class="stats">' +
            '<div class="retweets">' +
            '<p class="num-retweets">0</p>' +
            '<p>RETWEETS</p>' +
            '</div>' +
            '<div class="favorites">' +
            '<p class="num-favorites">0</p>' +
            '<p>FAVORITES</p>' +
            '</div>' +
            '<div class="users-interact">' +
            '<div>' +
            '</div>' +
            '</div>' +
            '<div class="time">' +
            dateTime +
            '</div>' +
            '</div>' +
            '<div class="reply">' +
            '<img class="avatar" src="img/alagoon.jpg" />' +
            '<textarea class="tweet-compose" placeholder="Reply to @sloob"/></textarea>' +
            '</div>' +
            '</div>' +
            '</div>')

            $('.stats').hide();
            $('.reply').hide();
            $('.tweet-actions').hide();
    })

})

// * The tweet actions (Reply, Retweet, etc) should only show up when you hover over that individual tweet. Otherwise, they should be hidden.
// * The Retweets/timestamp/Reply areas should also be hidden by default. These should only expand if you click on the tweet. Have the students use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com
