//infinite-scroll

var scrollW = document.getElementById('wrap-scroll');
var scrollUl = document.getElementById('ul-scroll');
var itemsScrolled, itemsMax, cloned = false;
var listOpts = {
    itemCount: null,
    itemHeight: null,
    items: []
};
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
}
function initItems(scrollSmooth) {
    listOpts.items = [].slice.call(scrollUl.querySelectorAll('li'));
    listOpts.itemHeight = listOpts.items[0].clientHeight;
    listOpts.itemCount = listOpts.items.length;
    if (!itemsMax) {
        itemsMax = listOpts.itemCount;
    }
    if (scrollSmooth) {
        var seamLessScrollPoint = (itemsMax - 3) * listOpts.itemHeight;
        scrollW.scrollTop = seamLessScrollPoint;
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
    initItems();
    scrollW.onscroll = scrollWrap;
});



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





//page label animation

// TweenMax.from(".page-label-title",1,{x:"-600",ease:Linear.easeInOut});
// TweenMax.to(".page-label-title",1,{x:"0",ease:Linear.easeInOut});




// init controller
// 



//page scale

// jQuery(document).ready(function($){
// 	//trigger the animation - open modal window
// 	$('[data-type="modal-trigger"]').on('click', function(){
// 		var actionBtn = $(this),
// 			scaleValue = retrieveScale(actionBtn.next('.cd-modal-bg'));
		
// 		// actionBtn.addClass('to-circle');
// 		actionBtn.next('.cd-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
// 			animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
// 		});

// 		//if browser doesn't support transitions...
// 		if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
// 	});

// 	//trigger the animation - close modal window
// 	$('.cd-section .cd-modal-close').on('click', function(){
// 		closeModal();
// 	});
// 	$(document).keyup(function(event){
// 		if(event.which=='27') closeModal();
// 	});

// 	$(window).on('resize', function(){
// 		//on window resize - update cover layer dimention and position
// 		if($('.cd-section.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
// 	});

// 	function retrieveScale(btn) {
// 		var btnRadius = btn.width()/2,
// 			left = btn.offset().left + btnRadius,
// 			top = btn.offset().top + btnRadius - $(window).scrollTop(),
// 			scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());

// 		// btn.css('position', 'fixed').velocity({
// 		// 	top: top - btnRadius,
// 		// 	left: left - btnRadius,
// 		// 	translateX: 0,
// 		// }, 0);

// 		return scale;
// 	}

// 	function scaleValue( topValue, leftValue, radiusValue, windowW, windowH) {

// 		// var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
// 		// 	maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
// 		// return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
// 	}

// 	function animateLayer(layer, scaleVal, bool) {
// 		layer.velocity({ scale: scaleVal }, 400, function(){
// 			$('body').toggleClass('overflow-hidden', bool);
// 			(bool) 
// 				? layer.parents('.cd-section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
// 				: layer.removeClass('is-visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]');
// 		});
// 	}

// 	function updateLayer() {
// 		var layer = $('.cd-section.modal-is-visible').find('.cd-modal-bg'),
// 			layerRadius = layer.width()/2,
// 			layerTop = layer.siblings('.btn').offset().top + layerRadius - $(window).scrollTop(),
// 			layerLeft = layer.siblings('.btn').offset().left + layerRadius,
// 			scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
		
// 		layer.velocity({
// 			top: layerTop - layerRadius,
// 			left: layerLeft - layerRadius,
// 			scale: scale,
// 		}, 0);
// 	}

// 	function closeModal() {
// 		var section = $('.cd-section.modal-is-visible');
// 		section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
// 			animateLayer(section.find('.cd-modal-bg'), 1, false);
// 		});
// 		//if browser doesn't support transitions...
// 		if(section.parents('.no-csstransitions').length > 0 ) animateLayer(section.find('.cd-modal-bg'), 1, false);
// 	}
// });




// function scaleBG(){
//     TweenMax.from( $('.project-thumb-bg'), .5,{css:{scale:, opacity:0, rotation: 180}, ease:Quad.easeInOut}), 400,-400);
// };


function openModal(){
    $('#modal-btn').addClass('circle-in');
     $('#modal-btn').removeClass('clipped-box');
     $
  }