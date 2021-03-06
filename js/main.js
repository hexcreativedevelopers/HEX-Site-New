//infinite-scroll
import {Curtains, Plane} from 'curtainsjs';
const curtains = new Curtains({
    container: "canvas"
    });
    const plane = new Plane(curtains, document.getElementsByClassName("curtain-bg"));
var scrollW = document.getElementById('wrap-scroll');
var scrollUl = document.getElementById('ul-scroll');
var itemsScrolled, itemsMax, cloned = false;
var listOpts = {
    itemCount: null,
    itemHeight: null,
    items: []
};
// $(".main-title").tilt({
//     maxTilt: 15,
//     perspective: 1400,
//     easing: "cubic-bezier(.03,.98,.52,.99)",
//     speed: 1200,
//     glare: true,
//     maxGlare: 0.2,
//     scale: 1.04
//   });
function scrollWrap() {
    itemsScrolled = Math.ceil((this.scrollTop + listOpts.itemHeight / 2) / listOpts.itemHeight);
    if (this.scrollTop < 1) {
        itemsScrolled = 0;
    }
    listOpts.items.forEach(function (ele) {
        ele.classList.remove('active');
    });
    if (itemsScrolled < listOpts.items.length) {
        listOpts.items[itemsScrolled].classList.add('active');
    }
    if (itemsScrolled > listOpts.items.length - 3) {
        for (_x = 0; _x <= itemsMax - 1; _x++) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            var node = listOpts.items[_x];
            if (!cloned) {
                node = listOpts.items[_x].cloneNode(true);
            }
            scrollUl.appendChild(node);
        }
        initItems(cloned);
        cloned = true;
        itemsScrolled = 0;
        window.CP.exitedLoop(1);
    }
// }
// function initItems(scrollSmooth) {
//     listOpts.items = [].slice.call(scrollUl.querySelectorAll('li'));
//     listOpts.itemHeight = listOpts.items[0].clientHeight;
//     listOpts.itemCount = listOpts.items.length;
//     if (!itemsMax) {
//         itemsMax = listOpts.itemCount;
//     }
//     if (scrollSmooth) {
//         var seamLessScrollPoint = (itemsMax - 3) * listOpts.itemHeight;
//         scrollW.scrollTop = seamLessScrollPoint;
//     }
// }
// document.addEventListener('DOMContentLoaded', function (event) {
//     initItems();
//     scrollW.onscroll = scrollWrap;
// });



// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable');

// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// // Move the cursor
// function onMouseMove(e) {
//   TweenMax.to($bigBall, .4, {
//     x: e.pageX - 15,
//     y: e.pageY - 15
//   })
//   TweenMax.to($smallBall, .1, {
//     x: e.pageX - 5,
//     y: e.pageY - 7
//   })
// }

// // Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 4
//   })
// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1
//   })
// }


//team-section animation
var teaminstruction = new TimelineMax();
teaminstruction.to(".team-instruction",1,{opacity:1,repeat:-1,yoyo:true,alpha:0});
teaminstruction.play();
TweenMax.to(".team-instruction", 1, { opacity:0,repeat:-1,yoyo:true,alpha:true });


var project_popup = new TimelineMax();

TweenMax.to(".project_popup",1,{opacity:1,repeat:-1,});
TweenMax.to(".project_popup",1,{opacity:1,repeat:-1,});


var popup =new TimelineMax();


//page label animation

// TweenMax.from(".page-label-title",1,{x:"-600",ease:Linear.easeInOut});
// TweenMax.to(".page-label-title",1,{x:"0",ease:Linear.easeInOut});




// init controller
// 


tl = new TimelineMax();
// $.scrollify({
// 				section : ".page-panel",
// 				easing: "easeOutExpo",
// 				 scrollSpeed: 1500,
// 				 offset : 0,
// scrollbars: true,
// standardScrollElements: "",
// setHeights: true,
// overflowScroll: false,
// updateHash: true,
// touchScroll:true,
// before:function() {},
// after:function() {},
// afterResize:function() {},
// afterRender:function() {}
// 			});
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	centerMode:false,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	vertical: true,
	verticalSwiping: true,
	centerMode: true,
	focusOnSelect: true,
	prevArrow: false,
	nextArrow: false,
	infinite: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 1440,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 4
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		}
	]
});
//for slider mobile 
$('.mobile-slider').slick({
centerMode: true,
centerPadding: '60px',
slidesToShow: 1,
infinite:false,

responsive: [
{
	breakpoint: 768,
	settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 3
	}
},
{
	breakpoint: 480,
	settings: {
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1
	}
}
]
});


$('.slider-quotes').slick({
	prevArrow:false,
	nextArrow:false,
	centerMode: true,
	autoplay:true,
	focusOnSelect: true,
	fade: true,
	speed:true

});
var popup = documnt.querySelector("#openpopup");
poup.addEventListener("click",function(){

	console.log('opened');
})
function openpopup(){
	console.log("opened");
	$("#popup").removeClass('popup-out');
	// $(".bg-image").style.visibility="hidden";
 
	$("#popup").addClass('show');
	$("#popup").addClass('popup-in');
	$("body").addClass("overflow-hidden");
	$("#bg-image").addClass('hide-image');
 

	$("#popup-text").addClass('text-anim');
	$("#popup-detail").addClass('detail-anim');
	$("#popup-detail-2").addClass('detail-anim-2');
	$("#popup-detail-3").addClass('detail-anim-3');
//   tl.to(
//   ".project-image",
//   0.4,
//   {
//     css:{ scale:'+=.1' },
//     ease: Power2.ease,
//   },
// );
	// $("body").addClass('position-fixed');
	$("#popup").style.display="block";
	if(  $(".bg-image").style.opacity="0"){
	 console.log('hidden');
	}

}; 
function openmobilepopup(){
	console.log("opened");
	$("#popup-mobile").removeClass('popup-out-mobile');
	// $(".bg-image").style.visibility="hidden";
 $("#project-title-mobile").addClass('hide');
 $(".project-2").addClass('hide');
$(".project-3").addClass('hide');
//  $(".targetClass").not(this).addClass('hide');
	$("#popup-mobile").addClass('show');
	$("#popup-mobile").addClass('popup-in-mobile');
	$("body").addClass("h-100 overflow-hidden");
	$("#bg-image-mobile").addClass('hide-image');
	$("#popup-text").addClass('text-anim');
	$("#popup-detail").addClass('detail-anim');
	$("#popup-detail-2").addClass('detail-anim-2');
	$("#popup-detail-3").addClass('detail-anim-3');
	// $("body").addClass('position-fixed');
	$("#popup-mobile").style.display="block";
	if(  $(".bg-image-mobile").style.opacity="0"){
	 console.log('hidden');
	}

};
function openmobilepopup2(){
	console.log("opened");
	$("#popup-mobile2").removeClass('popup-out-mobile');
	// $(".bg-image").style.visibility="hidden";
 $("#project-title-mobile2").addClass('hide');
 $(".project-1").addClass('hide');
$(".project-3").addClass('hide');
	$("#popup-mobile2").addClass('show');
	$("#popup-mobile2").addClass('popup-in-mobile');
	$("body").addClass("h-100 overflow-hidden");
	$("#bg-image-mobile2").addClass('hide-image');
	$("#popup-text").addClass('text-anim');
	$("#popup-detail").addClass('detail-anim');
	$("#popup-detail-2").addClass('detail-anim-2');
	$("#popup-detail-3").addClass('detail-anim-3');
	// $("body").addClass('position-fixed');
	$("#popup-mobile2").style.display="block";
	if(  $(".bg-image-mobile").style.opacity="0"){
	 console.log('hidden');
	}

};  
function closepopup(){
// tl.to(
//   ".project-image",
//   0.4,
//   {
//     css:{ scale:"1" },
//     ease: Power2.ease,
//   },
// );
$("#project-title-mobile").removeClass('hide');
$("#project-title-mobile").addClass('show');
$("body").removeClass("overflow-hidden");
$("#popup-text").removeClass('text-anim');
	$("#popup-detail").removeClass('detail-anim');
	$("#popup-detail-2").removeClass('detail-anim-2');
	$("#popup-detail-3").removeClass('detail-anim-3');
 $("#popup-text").removeClass('text-anim');
 $("#popup").removeClass('popup-in');
 $("#popup").removeClass('show');
 $("#popup").addClass('popup-out');
//  $("body").removeClass('position-fixed');
//  $("#popup").addClass('circle-out');
$("#bg-image").addClass('show-image');
 $("#bg-image").removeClass('hide-image');
 $("#popup").style.display="none";
 $("body").style.position="relative";
 console.log('closed');
 $("#popup").removeClass('show');
 $("#popup-text").addClass('text-anim-out');
 $("#popup-detail").addClass('detail-anim-out');
	$("#popup-detail-2").addClass('detail-anim-out-2');
	$("#popup-detail-3").addClass('detail-anim-out-3');
}; 
function closemobilepopup(){
 
$("body").removeClass("overflow-hidden");
$("#popup-text").removeClass('text-anim');
	$("#popup-detail").removeClass('detail-anim');
	$("#popup-detail-2").removeClass('detail-anim-2');
	$("#popup-detail-3").removeClass('detail-anim-3');
	$("#popup-text").addClass('text-anim-out');
 $("#popup-detail").addClass('detail-anim-out');
	$("#popup-detail-2").addClass('detail-anim-out-2');
	$("#popup-detail-3").addClass('detail-anim-out-3');
 $("#popup-text").removeClass('text-anim');
 $("#popup-mobile").removeClass('popup-in-mobile');
 $("#popup-mobile").removeClass('show');
 $("#popup-mobile").addClass('popup-out-mobile');
//  $("body").removeClass('position-fixed');
//  $("#popup").addClass('circle-out');
$(".project-2").removeClass('hide');
$(".project-3").removeClass('hide');
$(".project-2").addClass('show');
$(".project-3").addClass('show');
$("#bg-image-mobile").addClass('show-image');
 $("#bg-image-mobile").removeClass('hide-image');
$("#popup-mobile").style.display="none";
$("body").style.position="relative";
console.log('closed');
$("#popup-mobile").removeClass('show');

 
 
 
}; 
function closemobilepopup2(){
$("body").removeClass("overflow-hidden");
$("#popup-text").removeClass('text-anim');
	$("#popup-detail").removeClass('detail-anim');
	$("#popup-detail-2").removeClass('detail-anim-2');
	$("#popup-detail-3").removeClass('detail-anim-3');
 $("#popup-text").removeClass('text-anim');
 $("#popup-mobile2").removeClass('popup-in-mobile');
 $("#popup-mobile2").removeClass('show');
 $("#popup-mobile2").addClass('popup-out-mobile');
//  $("body").removeClass('position-fixed');
//  $("#popup").addClass('circle-out');
$(".project-1").removeClass('hide');
$(".project-3").removeClass('hide');
$(".project-1").addClass('show');
$(".project-3").addClass('show');
$("#bg-image-mobile2").addClass('show-image');
 $("#bg-image-mobile2").removeClass('hide-image');
 $("#popup-mobile2").style.display="none";
 $("body").style.position="relative";
 console.log('closed');
 $("#popup-mobile2").removeClass('show');
 $("#popup-text").addClass('text-anim-out');
 $("#popup-detail").addClass('detail-anim-out');
	$("#popup-detail-2").addClass('detail-anim-out-2');
	$("#popup-detail-3").addClass('detail-anim-out-3');
 
 
 
}; 
//this is dummy
var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function () {
	// $('#open-button').removeClass('circle-in');
	$('#open-button').addClass('circle-out');
	// $('#open-button').addClass('clipped-box');
	$('#open-button').removeClass('circle-out');
	// $('.custom-modal-bg').css('position','fixed');
	modal.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
	// $('#open-button').addClass('circle-in');
	$('#open-button').removeClass('clipped-box');
	modal.classList.toggle("closed");
	// $('.custom-modal-bg').addClass('');
	//  $('.custom-modal-bg').css('overflow','hidden');
	modalOverlay.classList.toggle("closed");
	console.log('opened');  
});


$('.carousel-for').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
asNavFor: '.carousel-nav'
});
$('.carousel-nav').slick({
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.carousel-for',
dots: false,
infinite:true,
prevArrow:false,
nextArrow:false,
centerMode: true,
focusOnSelect: true
});

function openModal() {
	$('#modal-btn').addClass('circle-in');
	$('#modal-btn').removeClass('clipped-box');
	$
};

//page scale
jQuery(document).ready(function($){
	//trigger the animation - open modal window
	$('[data-type="modal-trigger"]').on('click', function(){
		var actionBtn = $(this),
			scaleValue = retrieveScale(actionBtn.next('.cd-modal-bg'));
		
		actionBtn.addClass('to-circle');
		actionBtn.next('.cd-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
		});

		//if browser doesn't support transitions...
		if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
	});

	//trigger the animation - close modal window
	$('.cd-section .cd-modal-close').on('click', function(){
		closeModal();
	});
	$(document).keyup(function(event){
		if(event.which=='27') closeModal();
	});

	$(window).on('resize', function(){
		//on window resize - update cover layer dimention and position
		if($('.cd-section.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
	});

	function retrieveScale(btn) {
		var btnRadius = btn.width()/2,
			left = btn.offset().left + btnRadius,
			top = btn.offset().top + btnRadius - $(window).scrollTop(),
			scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());

		btn.css('position', 'fixed').velocity({
			top: top - btnRadius,
			left: left - btnRadius,
			translateX: 0,
		}, 0);

		return scale;
	}

	function scaleValue( topValue, leftValue, radiusValue, windowW, windowH) {
		var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
			maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
		return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
	}

	function animateLayer(layer, scaleVal, bool) {
		layer.velocity({ scale: scaleVal }, 400, function(){
			$('body').toggleClass('overflow-hidden', bool);
			(bool) 
				? layer.parents('.cd-section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
				: layer.removeClass('is-visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]').removeClass('to-circle');
		});
	}

	function updateLayer() {
		var layer = $('.cd-section.modal-is-visible').find('.cd-modal-bg'),
			layerRadius = layer.width()/2,
			layerTop = layer.siblings('.btn').offset().top + layerRadius - $(window).scrollTop(),
			layerLeft = layer.siblings('.btn').offset().left + layerRadius,
			scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
		
		layer.velocity({
			top: layerTop - layerRadius,
			left: layerLeft - layerRadius,
			scale: scale,
		}, 0);
	}




// function scaleBG(){
//     TweenMax.from( $('.project-thumb-bg'), .5,{css:{scale:, opacity:0, rotation: 180}, ease:Quad.easeInOut}), 400,-400);
// };


// function openModal(){
//     $('#modal-btn').addClass('circle-in');
//      $('#modal-btn').removeClass('clipped-box');
//      $
//   }

// var modal = document.querySelector("#modal");
// var modalOverlay = document.querySelector("#modal-overlay");
// var closeButton = document.querySelector("#close-button");
// var openButton = document.querySelector("#open-button");

// closeButton.addEventListener("click", function() {
//   $('#open-button').removeClass('circle-in');
//   $('#open-button').addClass('circle-out');
//     $('#open-button').addClass('clipped-box');
//     $('#open-button').removeClass('circle-out');
//   modal.classList.toggle("closed");
// });

// openButton.addEventListener("click", function() {
//   $('#open-button').addClass('circle-in');
//     $('#open-button').removeClass('clipped-box');
//     $('body').css("overflow","hidden !important");
//     modal.classList.toggle("closed");
   
 
//   modalOverlay.classList.toggle("closed");
// });
TweenMax.set(".project_popup",{autoAlpha:0});

$('.project-link').hover(
	TweenMax.to(".project_popup", 3, {
		x: 500,
		scale: .8,
		ease: Elastic.easeOut,
		autoAlpha:1,
	}),
	function(){ $(this).addClass('active') },
	function(){ $(this).removeClass('active') }
)
const showDialog = () => {
  document.getElementById('dialog').classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('dialog').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
// }
