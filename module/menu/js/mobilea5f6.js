function getViTri(object) {
		position = object.offset();
		lx = position.left;
		ly = position.top;
		return {x: lx,y: ly};
	}
$(window).scroll(function(){
	$this = $(this);
	$("img.lazyload").each(function(){
		here = getViTri($(this));
		if($this.scrollTop()>=(here.y-$(window).height()) && $this.scrollTop()<=(here.y+$(window).height())){
			data =  $(this).attr("data-src");
			if(data) $(this).attr("src",data);
			$(this).addClass("loaded").removeAttr("data-src").removeClass("lazyload");
		}
	});
});
$(document).on("touchstart","span.iconmenu",function(){
	$(".menu-right").addClass("menu-right-active");
});
$(document).on("touchstart",".menu-right .dong",function(){
	$(".menu-right").removeClass("menu-right-active");
});
$(document).ready(function(){
	
	$("body").append('<span class="backToTop">&nbsp</span>');
     if($(window).scroll(function() {
        $(this).scrollTop()>300?$(".backToTop").fadeIn(): $(".backToTop").fadeOut();
    }

    ), $(".backToTop").click(function() {
        return $("html, body").animate( {
            scrollTop: 0
        }

        , 200),  !1
    }), $(window).width()<=768) {
		var clickMenu = 1;
		height = $(".logo").height();
		$(document).on("touchstart",".icon-menu",function(){
			$(".menu-fixed  ul.nav").css("top",height);
			if(clickMenu==1) {
				$(".menu-fixed ul.nav").show();
				clickMenu = 0;
			}	
				else {
					$(".menu-fixed ul.nav").hide();
					clickMenu = 1;	
				}
		});
		$("#menu li").each(function(){
			if($("ul",this).text()!=""){
				$(this).append('<span class="arrow"></span>');
			}
		});
		$("<li><a href='https://farmme.io/'>Home</a></li>").insertBefore($("#menu li:first"));
	}
	var mo=0;
	$(document).on("click",".icon-search",function(){
		if(mo==0) {
			$(".search-hidden").show();
			mo=1;
		} else {
			$(".search-hidden").hide();
			mo=0;
		}
	});
});