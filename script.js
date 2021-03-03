document.addEventListener("DOMContentLoaded", function(event) {

  var galleryThumbs = new Swiper('.portfolio-gallery-thumbs ', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: "vertical",
  });

  var galleryTop = new Swiper('.portfolio-gallery-top', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  let mySwiperS = new Swiper('.second-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

//////////         side bar menu           ///////////////
var menuButton = document.querySelector('.menu-button');
  var openMenu = function () {
    swiper.slidePrev();
  };
  var swiper = new Swiper('.main-mobail', {
    slidesPerView: 'auto',
    initialSlide: 1,
    resistanceRatio: 0,
    slideToClickedSlide: true,
    on: {
      slideChangeTransitionStart: function () {
        var slider = this;
        if (slider.activeIndex === 0) {
          menuButton.classList.add('cross');
          menuButton.removeEventListener('click', openMenu, true);
        } else {
          menuButton.classList.remove('cross');
        }
      }
      , slideChangeTransitionEnd: function () {
        var slider = this;
        if (slider.activeIndex === 1) {
          menuButton.addEventListener('click', openMenu, true);
        }
      },
    }
  });

//////////////            modal_order_call            ///////////////////////////
  $(document).ready(function(){
      $(".modal_order_call-bg").hide();
      // show Map Modal window
      $(".header_order_tell_btn").on("click", function(e) {
          $('.modal_order_call-bg').show();
      });
      // hide Map Modal window
      $("body").on("click",'.modal_order_call-form-close', function() {
          $(".modal_order_call-bg").hide();
      });
      // hide Map Modal window click outside
      $("body").mouseup(function (e){
          if (!$(".modal_order_call-form").is(e.target) && $(".modal_order_call-form").has(e.target).length === 0){
              $(".modal_order_call-bg").hide();
          }
      });
  });


//////////////           modal_request             ///////////////////////////
  $(document).ready(function(){
    $(".modal_request-bg").hide();
    // show Map Modal window
    $(".main_title-btn").on("click", function(e) {
        $('.modal_request-bg').show();
    });
    // hide Map Modal window
    $("body").on("click",'.modal_request-form_close', function() {
        $(".modal_request-bg").hide();
    });
    // hide Map Modal window click outside
    $("body").mouseup(function (e){
        if (!$(".modal_request-form").is(e.target) && $(".modal_request-form").has(e.target).length === 0){
            $(".modal_request-bg").hide();
        }
    });

  });

//////        Map Modal window   /////////////////
  $(document).ready(function(){
    $(".map_box").hide();
    // show Map Modal window
    $(".link_map").on("click", function(e) {
        $('.map_box').show();
    });
    // hide Map Modal window
    $("body").on("click",'#map_close', function() {
        $(".map_box").hide();
    });
    // hide Map Modal window click outside
    $("body").mouseup(function (e){
        if (!$("#map").is(e.target) && $("#map").has(e.target).length === 0){
            $(".map_box").hide();
        }
    });
  });

  //////////         show elements          ////////
  if (window.matchMedia("(min-width: 769px)").matches) {
    $(function () {
      var jqBar = $('.work_stages');
      var Status = true;
      $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && Status) { 
          Status = false;
          $('.work_stages-box_stages_num .work_stages-box_stages-item:eq(0)').animate({width: "toggle"}, 300, function(){
            $(this).next().animate({width: "toggle"}, 300, arguments.callee);
          });
        }
      });
    });
  };
});

// Initialize and add map
function initMap() {
  const originalMapCenter = new google.maps.LatLng(49.806460365521126, 24.061589398252167);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: originalMapCenter,
    disableDefaultUI: true
  });
const marker = new google.maps.Marker({
  position: originalMapCenter,
  map: map,
  title: "adres"
});
const infowindow = new google.maps.InfoWindow({
  content: 
  "<br><b>Ми знаходимось тут!</b><br><br><b>НАш номер телефону:</b><br><a href=tel:+38 (067) 467-37-67>+38 (067) 467-37-67</a> ",
  position: originalMapCenter,
});
  marker.addListener("click", () => {
  infowindow.open(map, marker);
});
infowindow.open(map);
};

