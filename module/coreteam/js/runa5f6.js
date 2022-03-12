$(document).ready(function(){
	var arrayElemntLeftT = [];
	var arrayElemntRightT = [];
	i=1;
	/*
	if($(window).width()>768){
		$(".team-list .member").each(function(){
			if(i>8) i=1;
			if(i<5) arrayElemntLeftT.push($(this));
				else arrayElemntRightT.push($(this));
			i++;
		});
	} else {
		$(".team-list .member").each(function(){
			if(i>4) i=1;
			if(i==1 || i== 2) arrayElemntLeftT.push($(this));
				else arrayElemntRightT.push($(this));
			i++;
		});
	}
	str = "";
	$(arrayElemntLeftT).each(function(k,v){
		if(typeof arrayElemntRightT[k] !='undefined') right = arrayElemntRightT[k][0].outerHTML; else right = "";
		if(typeof v !='undefined') left = v[0].outerHTML; else left = "";
		str = str + left + right;
	});
	$(".team-list .swiper-wrapper").html(str);
	*/
	var swiper2 = new Swiper( '.team-list', {
		pagination: {
          el: ".team-control .swiper-pagination",clickable: true
        },
		
		paginationClickable: true,
		slidesPerView: 4,
		slidesPerGroup :4,
		breakpoints: {
			768: {
			  slidesPerView: 2,
			  slidesPerGroup :2,
			},
		},
		navigation: {nextEl: '.team-control .swiper-button-next',prevEl: '.team-control .swiper-button-prev'  }
	});
	var swiperBTS = new Swiper( '.game-bts-swiper', {
		pagination: {
          el: ".game-bts .swiper-pagination",clickable: true
        },
		paginationClickable: true,
		slidesPerView: 3,
		//slidesPerGroup :3,
		slidesPerColumn: 2,
        spaceBetween: 30,
		breakpoints: {
			768: {
			  slidesPerView: 2,
			  slidesPerGroup :2,
			  spaceBetween: 10,
			},
		},
		navigation: {nextEl: '.game-bts-control .swiper-button-next',prevEl: '.game-bts-control .swiper-button-prev'  }
	});
});