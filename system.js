function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 34,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    // dots: false,
    stagePadding: 20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var loader = document.getElementById("loader");
window.addEventListener("load",function(){
    loader.style.display="none";
})