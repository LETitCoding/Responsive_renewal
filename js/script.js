
$(function(){

  $(window).scroll(function(){
    curr = $(window).scrollTop();
    if(curr > 0){
      $('header').addClass('on')
    }else{
      $('header').removeClass('on')
    }
  });

  $('.hamburger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on')
    $('.full_menu').toggleClass('active')
    $('body').toggleClass('scroll_hidden')
    $('header').toggleClass('menu')
    menu.restart();
  });

  $('header .full_menu .left li').hover(function(){
    $('header .full_menu .left li').removeClass('on').addClass('not')
    $(this).addClass('on')
    $('header .full_menu .img_wrap').removeClass('on')
    $(this).find('.img_wrap').addClass('on')

  },function(){
    $('header .full_menu .img_wrap').removeClass('on not')
    $('header .full_menu .img_wrap').removeClass('on')
  });


  menu = gsap.fromTo("header .full_menu .inner .left li h2", {
    opacity:0,
    y:40
  },
  {
    y:0,
    duration: 1,
    opacity: 1, 
    delay: 0.5, 
    stagger: 0.1,
  });


  gsap.fromTo(".main_view .left_view .img_wrap img", {
    x:0,
  },
  {
    x:'-20%',
    duration: 40,
    yoyo:true,
    repeat: -1,
  
  });

  gsap.to(".main_view .title span", {
    y:0,
    duration: 3,
    stagger: 0.4,
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".contents .img_wrap img",
  {
    scrollTrigger: {
      trigger: ".contents",
      start: "top 20%",
      scrub: true,
      // markers: true
    },
    duration: 1,
    y:'-30%',
    opacity: 1, 
    delay: 0, 
    // stagger: 0.05,
    // paused: true
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".contents .txt_wrap",
  {
    scrollTrigger: {
      trigger: ".contents",
      start: "top 20%",
      scrub: true,
      opacity:0,
      y:0,
      // markers: true,
    },
    duration: 1,
    y:'-30%',
    opacity: 1, 
    delay: 0, 
    // stagger: 0.05,
    // paused: true
  });

  $('.feature').mousemove(function(e) {
    $('.feature .items .img_wrap').removeClass('hide')
    gsap.to(".feature .items .img_wrap",{
      duration:1,
        x: e.clientX-150,
        y: e.clientY-200,
        ease: Power3.easeOut
    });
    $('.feature').mouseleave(function(){
      $('.feature .items .img_wrap').addClass('hide')
    });
    
    $('.feature .inner .items ul li').hover(function(){
      src = $(this).data('src');
      $('.feature .items .img_wrap img').attr('src',src)
    });
    
  });

	
	let tl = gsap.timeline({
	scrollTrigger: {
	trigger: ".contents",
	start: "top 20%",
	end:"+=300",
//	scrub: 1,
//	stagger: .3,
//	markers: true,
	},
 
	});
  tl.fromTo(".contents .txt01", {opacity: 0},{opacity: 1})
  .fromTo(".contents .txt02", {opacity: 0},{opacity: 1})
  .fromTo(".contents .txt03", {opacity: 0},{opacity: 1})
  .fromTo(".contents .txt04", {opacity: 0},{opacity: 1})
 

	
// 	let tlinfo = gsap.timeline({
// 	scrollTrigger: {
// 	trigger: ".info",
// 	start: "top",
// 	end:"+=500",
// //	scrub: 1,
// //	stagger: .3,
// 	markers: true,
// 	},
 
// 	});
//   tlinfo.fromTo(".info .img01", {opacity: 0, x: '-150%'},{opacity: 1, x: 0})
//  .fromTo(".info .img02", {opacity: 0, x: '150%'},{opacity: 1, x:0})
//  .fromTo(".info .img03",{ opacity: 0, x: '-150%'},{opacity: 1, x: 0})
	
 
  // const info = gsap.timeline({
  //   paused:true,
  //   },
  // );

  // info.fromTo(".stagger" , {
  //   y: 20,  
  //   opacity: 0,
  // },
  //   {
  //   y:0,
  //   duration: 1,
  //   opacity:1,
  //   stagger: 0.2, 
  // });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".info",
  //     start: "top 20%",
  //     scrub: true,
  //     markers: true,
  //     y:0,
  //     opacity:0,
  //   }
  // });
  // tl.to(".stagger", {
  //   y:20,
  //   duration: 2,
  //   opacity:1,
  //   stagger: 0.4, 
  // })


  gsap.from(".stagger", {
    y:20,
    opacity: 0,
    stagger: 0.4,
    duration:2,
  });

  var swiper = new Swiper(".story_slide", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      prevEl: ".prev",
      nextEl: ".next",
    },

  });


  var swiper = new Swiper(".news_slide", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
    },
    navigation: {
      prevEl: ".prev",
      nextEl: ".next",
    },

  });
  

});



  