$(document).on("click",".nft-item-child img",function(){
	firstItem = $(this).parents(".nft-item-list:first");
	images = $(this).attr("data-big");
	$(".nft-item-child img",firstItem).removeClass("active");
	$(this).addClass("active");
	$(".avatar img",firstItem).attr("src",images);
});
$(document).on("click",".nft-item-child img",function(){
	firstItem = $(this).parents(".nft-item-list:first");
	images = $(this).attr("data-big");
	$(".nft-item-child img",firstItem).removeClass("active");
	$(this).addClass("active");
	$(".avatar img",firstItem).attr("src",images);
});
$(document).ready(function(){
	var swiperNFT = new Swiper( '.nft-class-detail-list', {
		pagination: '.nft-class-detail-list .swiper-pagination',
		paginationClickable: true,
		slidesPerView: 1,
		loop:true,
		navigation: {nextEl: '.nft-control .swiper-button-next',prevEl: '.nft-control .swiper-button-prev'  }
	});
	if($(window).width()<768){
		$(".nft-item .nft-item-body .nft-item-list").each(function(){
			$($(".nft-item-child",this)).insertAfter($(".introduction h3",this));
		});
		
	}
});
$(document).on("click",".tab-switch",function(){
	dataRel = $(this).attr("data-rel");
	$(".nft-content").removeClass("nft-active");
	$("."+dataRel).addClass("nft-active");
	$(".tab-switch").removeClass("nft-tab-active");
	$(this).addClass("nft-tab-active");
	var swiperNFT = new Swiper( '.nft-class-detail-list', {
		pagination: '.nft-class-detail-list .swiper-pagination',
		paginationClickable: true,
		slidesPerView: 1,
		calculateHeight:true,
		loop:true,
		navigation: {nextEl: '.nft-control .swiper-button-next',prevEl: '.nft-control .swiper-button-prev'  }
	});
});