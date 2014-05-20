var speakerAImgMap = {
		// 정성용
		'bungubbang57':'assets/profile/bungubbang57@gmail.com.png',
		// 최윤석
		'ethdemor':'assets/profile/ethdemor@gmail.com.png',
		// 김제준
		'dosajun':'assets/profile/dosajun@gmail.com.png',
		// 정용식
		'sunphiz':'assets/profile/sunphiz@gmail.com.png',
		// 강대권
		'daekwon.kang':'assets/profile/daekwon.kang@gmail.com.png',
		// 최용은
		'choiye84':'assets/profile/choiye84@gmail.com.png',
		// 김강우
		'kangwoo':'assets/profile/kangwoo@gmail.com.png'
	},
	speakerBImgMap = {
		// 박성철
		'gyumee':'assets/profile/gyumee@gmail.com.png',
		// 이연복
		'lyb1495':'assets/profile/lyb1495@helloworlds.co.kr.png',
		// 정상혁
		'benelog':'assets/profile/benelog@gmail.com.png',
		// 강규영
		'kangkyuyoung':'assets/profile/jania902@gmail.com.png',
		// 안영회
		'ahnyounghoe':'assets/profile/ahnyounghoe@gmail.com.png',
		// 박찬욱
		'chanwook.god':'assets/profile/chanwook.god@gmail.com.png',
		// 강지훈
		'ktsh0133':'assets/profile/ktsh0133@gmail.com.png'
	};
$(document).ready(function() {
    var start = new Date(2014, 3, 25, 0, 0, 0, 0);
    var end = new Date(2014, 4, 31, 12, 0, 0, 0);
    var now = new Date();

    $('.countdown').countdown({'start': start.getTime() / 1000, 'end': end.getTime() / 1000, 'now': now.getTime() / 1000});

    if ($.fn.cssOriginal!=undefined) {
        $.fn.css = $.fn.cssOriginal;
    }

    $('.fullwidthbanner').revolution({
        delay: 9000,
        startheight: 800,
        startwidth: 1170,

        hideThumbs:200,

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:5,

       navigationType:"bullet",
       navigationArrows:"nexttobullets",
       navigationStyle:"round",

       navigationHAlign:"center",
       navigationVAlign:"bottom",
       navigationHOffset: 0,
       navigationVOffset: 50,

       soloArrowLeftHalign:"left",
       soloArrowLeftValign:"center",
       soloArrowLeftHOffset:20,
       soloArrowLeftVOffset:0,

       soloArrowRightHalign:"right",
       soloArrowRightValign:"center",
       soloArrowRightHOffset:20,
       soloArrowRightVOffset:0,
        touchenabled:"on",
        onHoverStop:"on",

        navOffsetHorizontal:0,
        navOffsetVertical:20,

        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,

        stopAtSlide:-1,
        stopAfterLoops:-1,
        shadow: 0,
        fullWidth: 'off'
    });


    $('.parallax-first').parallax("50%", 0.05);
    $('.parallax-second').parallax("50%", 0.05);
    $('.parallax-third').parallax("50%", 0.05);

	$('a[data-toggle="tab"]').on('shown', function (e) {
		imgInsert(speakerBImgMap);
	});

	$('input, textarea').placeholder();

	$('.cycle-slideshow-main').cycle({
		fx: 'scrollHorz',
		timeout: 40000,
		slides: '.slide'
	});

    $('.cycle-slideshow-main').on('cycle-before', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
        var class_name = $(incomingSlideEl).attr('id');
        var old_class_name = $(outgoingSlideEl).attr('id');
        $('.cycle-slideshow-main .cycle-overlay').removeClass(old_class_name).addClass(class_name);
    });

	$('.cycle-slideshow-fade').cycle({
		fx: 'fade',
		timeout: 4000,
		slides: '.slide'
	});

	$('.cycle-slideshow-vertical').cycle({
		fx: 'scrollVert',
		timeout: 8000,
		slides: '.slide',
        pager: '.cycle-vertical-pager'
	});

	$('.navigation .nav a[href^="#"], a[href^="#"].roll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

    $("a[href$='jpg']").fancybox();
    $("a[href$='png']").fancybox();
    $("a[href$='gif']").fancybox();

    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });

    $('form.contact-form').submit(function(e) {
        e.preventDefault();

        var form = $(this);

        $.ajax({
            type: 'POST',
            data: form.serialize(),
            url: form.attr('action'),
            success: function(data) {
                alert('Thank you for your message.');
                form[0].reset();
            }
        });
    });

	(function() {
		if ( $('#googleMap').length == 0 ) {
			$('<script/>', {
				src: "https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false&callback=initialize",
				type: 'text/javascript',
				id: 'googleMap'
			}).appendTo('body');
		}
		else {
		    initialize();
		}
	})();

	setTimeout(function() {
		imgInsert(speakerAImgMap);
	}, 500);
});
function imgInsert(imgMap) {
	$.each(imgMap, function(id, imgUri) {
		$('#img-' + id.replace('.', '\\.')).attr('src', imgUri);
	});
}
function initialize() {
    var styles = [
                  {
                  }
              ];
    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    var latLng = new google.maps.LatLng(37.5670435, 126.9839249);
    var options = {
        center: latLng,
        scrollwheel: false,
        zoom: 17,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Styled']
        }
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    map.mapTypes.set('Styled', styledMapType);
    map.setMapTypeId('Styled');

    new google.maps.Marker({
        position: latLng,
        title: "afkn",
        map: map
    });
}