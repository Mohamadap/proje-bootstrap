$(document).ready(function(){

  $(window).on('scroll',function(){

    var link = $('.navbar a.dot');
    var top = $(window).scrollTop();

    $('.sec1').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if(top >= offset && top < offset + height){
        link.removeClass('active');
        $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });

  });

});
AOS.init({
  duration: 1200,
})
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init();

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".Mwrap",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".Mwrap").offsetWidth
  }
});



