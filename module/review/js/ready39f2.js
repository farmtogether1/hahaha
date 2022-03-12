$(document).ready(function(){
	var swiper1 = new Swiper( '.review .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 10,
		autoheight:true,
		paginationClickable: true,
		loop:true,
		autoplay: {delay: 10500},
		pagination: '.review .swiper-pagination',
		navigation: {
			nextEl: '.review .swiper-button-next',
			prevEl: '.review .swiper-button-prev',
		  },
		breakpoints: {
            1024: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
	});

$(document).on("click",".filter-category .button-filter",function(){
	n = $(this).attr("rel");
	$(".filter-category .button-filter").removeClass("active");
	$(this).addClass("active");
	if(n=="all") json_code = all;
	if(n=="tintapdoan") json_code = tintapdoan;
	if(n=="gocbaochi") json_code = gocbaochi;
	noidung = "";
	x = json_code.split("vinz");
	$.each(x,function(i,item){
		if(item){
			k = jQuery.parseJSON(item);
			noidung = noidung  + '<div class="sanpham swiper-slide"><a href="'+k.url+'"><div class="hinhanh"><img src="'+k.images+'" class=""></div></a><div class="detail"><p class="ten">'+k.title+'</p><p class="small"><span>'+k.ngay+'</span> <a href="'+k.url+'">Xem thêm ❯</a></p></div></div>';
		}
	});
	$(".review .swiper-wrapper").html(noidung);	
	swiper1.update();

});
$(document).on("change",".luachon",function(){
	n = $(this).val();
	$(".button-filter").removeClass("active");
	$(this).addClass("active");
	if(n=="all") json_code = all;
	if(n=="tintapdoan") json_code = tintapdoan;
	if(n=="gocbaochi") json_code = gocbaochi;
	noidung = "";
	x = json_code.split("vinz");
	$.each(x,function(i,item){
		if(item){
			k = jQuery.parseJSON(item);
			noidung = noidung  + '<div class="sanpham swiper-slide"><a href="'+k.url+'"><div class="hinhanh"><img src="'+k.images+'" class=""></div></a><div class="detail"><p class="ten">'+k.title+'</p><p class="small"><span>'+k.ngay+'</span> <a href="'+k.url+'">Xem thêm ❯</a></p></div></div>';
		}
	});
	$(".review .swiper-wrapper").html(noidung);	
	swiper1.update();
});
	if($(window).width()<768){
		option = "";
		$($("span.button-filter").get().reverse()).each(function(){
			value = $(this).attr("rel");
			text = $(this).text();
			option = option + '<option value="'+value+'">'+text+'</option>';
		});
		html = '<select class="luachon">'+option+'</select>';
		$(".filter-category").html(html);
	}
});