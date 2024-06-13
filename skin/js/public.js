/********************************************************************public**********************************************************/
/*pc上导航*/
jQuery(".menu").slide({ type: "menu", titCell: ".nli", targetCell: ".sub", effect: "slideDown", delayTime:300, triggerTime: 0,returnDefault: true });
/*pc上导航end*/

<!--手机导航js-->
	/*手机导航js*/
	$("#menuph").click(function(){
		"use strict";/*进入严格模式标语*/
		$(this).find(".point").toggleClass("active");
		$(".pf_menu").toggleClass('on_1');
		$('.pz_top').toggleClass('on')
	})
	$('#navSlide .nli p').on('click',function(){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$(this).next().stop().slideUp();
		}else{
			$(this).parent().addClass('on');
			$(this).next().stop().slideDown();
			$(this).parent().siblings().removeClass('on');
			$(this).parent().siblings().find('.l2_ul').stop().slideUp()
		}
	})
	$('#navSlide .nli .l2').on('click',function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$(this).find('.l3_ul').stop().slideUp();
		}
	else{
		$(this).addClass('on');
		$(this).find('.l3_ul').stop().slideDown();
		$(this).siblings().removeClass('on');
		$(this).siblings().find('.l3_ul').stop().slideUp()
		}
	})

$('.footer_down dt').click(function(){
	$(this).next().stop().slideToggle()
	$(this).stop().toggleClass('on')
})

<!--手机导航jsend-->

/*内页导航*/ 

//动画效果
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
};
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate',
    offset: 0,
    mobile: false,
    live: true
});
wow.init();

