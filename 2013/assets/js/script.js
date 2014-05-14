/**
 *
 * Copyright (c) 2013 JeongHoon Byun aka "Outsider", <http://blog.outsider.ne.kr/>
 * Licensed under the MIT license.
 * <http://outsider.mit-license.org/>
 */
$(document).ready(function() {
  // social
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/all.js#xfbml=1&appId=568798363157091";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();

  var window$ = $(window),
      document$ = $(document),
      aside$ = $('aside'),
      about$ = $('#about'),
      speakers$ = $('#speakers'),
      schedule$ = $('#schedule'),
      organization$ = $('#organization'),
      sponsors$ = $('#sponsors'),
      details$ = $('#details'),
      aboutMenu$ = $('.menu.about'),
      speakersMenu$ = $('.menu.speakers'),
      scheduleMenu$ = $('.menu.schedule'),
      organizationMenu$ = $('.menu.organization'),
      sponsorsMenu$ = $('.menu.sponsors'),
      hasAside = false;

  window$.scroll(function() {
    var browserTop = window$.scrollTop(),
        browserHeight = window$.height(),
        documentHeight = document$.height(),
        aboutTop = Math.floor(about$.offset().top);

    if (!hasAside && browserTop >= aboutTop) {
      hasAside = true;
      aside$.fadeIn(500);
      aside$.toggleClass('active');
    } else if (hasAside && browserTop < aboutTop) {
      hasAside = false;
      aside$.fadeOut(200);
      aside$.toggleClass('active');
    }

    if (hasAside) {
      var speakersTop = Math.floor(speakers$.offset().top),
          scheduleTop = Math.floor(schedule$.offset().top),
          organizationTop = Math.floor(organization$.offset().top),
          sponsorsTop = Math.floor(sponsors$.offset().top),
          isScrolToBottom = browserTop + browserHeight > documentHeight - 50;

      sponsorsMenu$.toggleClass('current', browserTop >= sponsorsTop || isScrolToBottom);
      organizationMenu$.toggleClass('current', browserTop >= organizationTop && browserTop < sponsorsTop);
      scheduleMenu$.toggleClass('current', browserTop >= scheduleTop && browserTop < organizationTop);
      speakersMenu$.toggleClass('current', browserTop >= speakersTop && browserTop < scheduleTop);
      aboutMenu$.toggleClass('current', browserTop >= aboutTop && browserTop < speakersTop);

      if (browserTop < scheduleTop - 400 || browserTop >= organizationTop - 200) {
        details$.slideUp();
      }
    }
  });

  $('a.menu').click(function(event) {
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top;
    $('html, body').animate({scrollTop:offset}, 600);
  });

  $('.session').click(function(event) {
    var speakerId = $(this).attr('data-speaker'),
        speakerIntro = $('<div class="speaker">').html($('#' + speakerId).clone().find('.links').remove().end().html());

    details$.find('div').html($(this).html())
                        .prepend(speakerIntro);
    details$.slideDown();
  });
});

