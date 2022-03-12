$(document).on("click",".close-use-case",function(){
	$(".use-case-icon").addClass("remove-use-case");
	$(".use-case-detail").addClass("remove-use-case");
	$(".popup-use-case").addClass("remove-use-case-bg");
	$(this).hide();
	setTimeout(function(){
		$(".popup-use-case").hide();
		
	},300);
	
});
$(document).on("click",".small-stone",function(){
	$(".use-case-icon").removeClass("remove-use-case");
	$(".use-case-detail").removeClass("remove-use-case");
	$(".popup-use-case").removeClass("remove-use-case-bg");
	$(this).addClass("use-case-active");
	text = $(".headline",this).text();
	img = $(".stone img",this).attr("src");
	$(".use-case-text").text(text);
	$(".use-case-icon-detail img").attr("src",img);
	description = $(this).attr("data-text");
	$(".use-case-detail-content").text(description);
	setTimeout(function(){
		$(".popup-use-case").show();
		$(".close-use-case").show();
	},50);
});
$(document).on("click",".next-use-case",function(){
	now = $(".use-case-active").attr("data-now");
	nextElement = parseInt(now) + 1;
	if(nextElement>7) nextElement = 1;
	$(".small-stone").removeClass("use-case-active");
	focusElement = $(".small-stone[data-now="+nextElement+"]");
	focusElement.addClass("use-case-active");
	text = focusElement.text();
	img = $(".small-stone[data-now="+nextElement+"] .stone img").attr("src");
	$(".use-case-text").text(text);
	$(".use-case-icon-detail img").attr("src",img);
	description = focusElement.attr("data-text");
	$(".use-case-detail-content").text(description);
});
$(document).on("click",".prev-use-case",function(){
	now = $(".use-case-active").attr("data-now");
	prevElement = parseInt(now) - 1;
	if(prevElement<1) prevElement = 7;
	$(".small-stone").removeClass("use-case-active");
	focusElement = $(".small-stone[data-now="+prevElement+"]");
	focusElement.addClass("use-case-active");
	text = focusElement.text();
	img = $(".small-stone[data-now="+prevElement+"] .stone img").attr("src");
	$(".use-case-text").text(text);
	$(".use-case-icon-detail img").attr("src",img);
	description = focusElement.attr("data-text");
	$(".use-case-detail-content").text(description);
});
$(document).on("click",".close-feature",function(){
	$(this).hide();
	$(".popup-feature").addClass("remove-use-case-bg");
	setTimeout(function(){
		$(".popup-feature").hide();
	},300);
});
$(document).on("click",".feature-stone .stone,.feature-stone .stone-light",function(){
	$(".popup-feature").removeClass("remove-use-case-bg");
	setTimeout(function(){
		$(".popup-feature").attr("data-now",1);
		$(".popup-feature").show();
		$(".close-feature").show();
	},50);
});
$(document).on("click",".prev-feature",function(){
	$(".feature-content-box").hide();
	num = $(".popup-feature").attr("data-now");
	numNow = num-1;
	if(numNow<1) numNow = 4;
	start = (numNow - 1)*4+1;
	end = numNow*4;
	for(i=start;i<=end;i++){
		$(".feature-content-box[data-row="+i+"]").show();
	}
	$(".popup-feature").attr("data-now",numNow);
});
$(document).on("click",".next-feature",function(){
	$(".feature-content-box").hide();
	num = $(".popup-feature").attr("data-now");
	numNow = parseInt(num) + 1;
	console.log(numNow);
	if(numNow>3) numNow = 1;
	start = (numNow - 1)*4 + 1;
	end = numNow*4;
	for(i=start;i<=end;i++){
		$(".feature-content-box[data-row="+i+"]").show();
	}
	$(".popup-feature").attr("data-now",numNow);
});
$(document).on("click",".close-video",function(){
	$(this).hide();
	$(".video-play .border-first").addClass("remove-use-case");
	$(".popup-video").addClass("remove-use-case-bg");
	setTimeout(function(){
		$(".popup-video").hide();
		$('.yvideo').each(function(){
			var el_src = $(this).attr("src");
			$(this).attr("src",el_src);
		  });
	},300);
});
$(document).on("click",".video-play",function(){
	$(".popup-video").removeClass("remove-use-case-bg");
	$(".video-play .border-first").removeClass("remove-use-case");
	setTimeout(function(){
		$(".popup-video").show();
		$(".close-video").show();
	},50);
});
$(document).on("click",".charity-box",function(e){
	$(".charity-lid-box").addClass("charity-lid-box-open");
	$(".charity").removeClass("charity-close");
	$(".popup-charity").removeClass("remove-use-case-bg");
	$(".popup-charity .border-first").removeClass("remove-use-case");
	h = e.pageY;
	setTimeout(function(){
		$(".popup-charity").show().css("top",h-100);
		$(".close-charity").show();
	},500);
});
$(document).on("click",".close-charity",function(){
	$(this).hide();
	$(".popup-charity .border-first").addClass("remove-use-case");
	$(".popup-charity").addClass("remove-use-case-bg");
	setTimeout(function(){
		$(".popup-charity").hide();
		$(".charity").addClass("charity-close");
		$(".charity").addClass("charity-lid-box-close");
		$(".charity-lid-box").removeClass("charity-lid-box-open");
	},300);
});
$(document).ready(function(){
	$(".popup-video .border-content").html('<iframe width="550" height="315" class="yvideo" src="https://www.youtube.com/embed/93qPdN8hu5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;  encrypted-media; gyroscope; " allowfullscreen></iframe>');
	if($(window).width()>768){
		h = $(window).height();
		videoHeight = h*80/100;
		$(".yvideo").height(videoHeight);
		$(".yvideo").width(videoHeight*550/315);
	} else {
		w = $(window).width();
		videoWidth = w*80/100;
		$(".yvideo").width(videoWidth);
		$(".yvideo").height(videoWidth*315/550);
	}
});
window.addEventListener('load', function () {
	setTimeout(function(){
		$(".loading").remove();
	},100);
});
/*
$(document).on("click",".close-team",function(){
	$(this).hide();
	$(".team-island .border-first").addClass("remove-use-case");
	$(".popup-team").addClass("remove-use-case-bg");
	setTimeout(function(){
		$(".popup-team").hide();
	},300);
});
$(document).on("click",".team-house",function(e){
	$(".popup-team").removeClass("remove-use-case-bg");
	$(".team-island .border-first").removeClass("remove-use-case");
	h = e.pageY;
	setTimeout(function(){
		$(".popup-team").show().css("top",h-100);
		$(".close-team").show();
	},50);
});
*/
$(document).on("click",".has-popup",function(e){
	$(".popup-fm").hide();
	pop = $(this).attr("data-popup");
	$("."+pop).removeClass("remove-use-case-bg");
	$("."+pop+" .border-first").removeClass("remove-use-case");
	h = e.pageY;
	setTimeout(function(){
		$("."+pop).show().css("top",h-100);
		$("."+pop+" .close-icon").show();
	},50);
});
$(document).on("click",".close-icon",function(){
	parentElement = $(this).parents(".popup-fm:first");
	$(this).hide();
	$(".border-first",parentElement).addClass("remove-use-case");
	parentElement.addClass("remove-use-case-bg");
	setTimeout(function(){
		parentElement.hide();
	},300);
});
$(document).on('click', '#menu ul li a[href="^#"]', function(e) {
	console.log(id);
    var id = $(this).attr('href').replace(window.location.origin,"");
    var $id = $(id);
		if ($id.length === 0) {
			return;
    }
    e.preventDefault();
    var pos = $id.offset().top+150;
    $('body, html').animate({scrollTop: pos},300);
});
