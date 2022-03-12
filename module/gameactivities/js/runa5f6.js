$(document).ready(function(){
	/*
	if($(window).width()>768){
		var arrayElemntLeft = [];
		var arrayElemntRight = [];
		i=1;
		$(".game-activities-detail").each(function(){
			if(i>8) i=1;
			if(i<5) arrayElemntLeft.push($(this));
				else arrayElemntRight.push($(this));
			i++;
		});
		str = "";
		$(arrayElemntLeft).each(function(k,v){
			if(typeof arrayElemntLeft[k]!='undefined') left = arrayElemntLeft[k][0].outerHTML; else left = "";
			if(typeof arrayElemntRight[k]!='undefined') right = arrayElemntRight[k][0].outerHTML; else right = "";
			str = str + left + right;
		});
		$(".game-activities-list .swiper-wrapper").html(str);
	}
	*/
	var swiper1 = new Swiper( '.game-activities-list', {
		pagination: '.game-activities-list .swiper-pagination',
		paginationClickable: true,
		slidesPerView: 4,
		slidesPerColumn: 1,
		slidesPerGroup :4,
		navigation: {nextEl: '.game-activities-control .swiper-button-next',prevEl: '.game-activities-control .swiper-button-prev'},
		breakpoints: {
			768: {
			  slidesPerView: 1,
			  slidesPerColumn: 1,
			  slidesPerGroup :1,
			},
		},
		autoplay: {delay: 3500}
	});
});