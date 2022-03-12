$(document).ready(function(){
	$(".video-frame").html('<div class="video-wrap"><iframe width="550" height="315" class="yvideo" src="https://www.youtube.com/embed/93qPdN8hu5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;  encrypted-media; gyroscope; " allowfullscreen></iframe><div class="close-youtube-video">x</div></div>');
	if($(window).width()>768){
		h = $(window).height();
		videoHeight = h*80/100;
		$(".yvideo").height(videoHeight);
		$(".video-wrap").height(videoHeight);
		$(".video-wrap").width(videoHeight*550/315);
		$(".yvideo").width(videoHeight*550/315);
	} else {
		w = $(window).width();
		videoWidth = w*80/100;
		$(".yvideo").width(videoWidth);
		$(".video-wrap").width(videoWidth);
		$(".yvideo").height(videoWidth*315/550);
		$(".video-wrap").height(videoWidth*315/550);
		$($(".alpha-test-title")).insertBefore($(".alpha-test-left img"));
		$($(".b-ranking")).insertBefore($(".alpha-test-right .introduction"));
	}
	var swiper = new Swiper(".video-slider", {
			effect: "coverflow",
			grabCursor: !0,
			centeredSlides: !0,
			slidesPerView: "auto",
			loop: !0,
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: !0
			},
			pagination: {
			  el: ".video-slider .swiper-pagination",
			  clickable:true
			},
		  });
	
	var swiperFeature = new Swiper( '.game-feature-swiper', {
		pagination: '.feature-control .swiper-pagination',
		paginationClickable: true,
		slidesPerView: 1,
		touchRatio: 0.5,
		loop:true,
		navigation: {nextEl: '.feature-control .swiper-button-next',prevEl: '.feature-control .swiper-button-prev'  }
	});
	swiperFeature.on('slideChange', function (e) {
		CheckHightSlider();
	});
});
window.addEventListener('load', function () {
	setTimeout(function(){
		CheckHightSliderFirst();
	},200);
});
function CheckHightSliderFirst(){
		setTimeout(function(){
			h = $(".game-feature-swiper .swiper-slide-active").height();
			$(".game-feature-swiper").height(h);
		},100);
}
function CheckHightSlider(){
		setTimeout(function(){
		$(".game-feature-swiper").css({"height":"auto"});
		h = $(".game-feature-swiper .swiper-slide-active").height();
		console.log(h);
		$(".game-feature-swiper").height(h);
		},100);
}
// $(document).on("click",".video-slider .swiper-slide img",function(){
// 	dataRel = $(this).attr("data-rel");
// 	parents = $(this).parents(".swiper-slide:first");
// 	if($(window).width()>768){
// 		height = $(window).width()*450/1520;
// 	} else {
// 		height = $(window).width()*173/414;
// 	}
// 	$(parents).html('<iframe width="100%" height="'+height+'" src="'+dataRel+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
// });
$(document).on("click",".play-now",function(){
	$(".video-wrap").show();
});
$(document).on("click",".close-youtube-video",function(){
	$(".video-wrap").hide();
});

