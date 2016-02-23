//HOVER DEL NAV-MENU

$('.menu-trigger').click(function(){
    $('#nav-menu').slideToggle(700);
$('.trigger:before').toggleClass('trigger-active');
$('.trigger:after').toggleClass('trigger-active');
$('.trigger').toggleClass('trigger-active');
});

//ANIMACION MENU LATERAL

$('.reservation-btn').click(function(){
    
    $('#menu').css("right","0");
    $('#mask').fadeIn();
});

$('#reservation-btn').click(function(){
    
    $('#menu').css("right","0px");
    $('#mask').fadeIn();
    
});


$('#mask').click(function(){
    
    $('#menu').css("right","-400px");
    $('#mask').fadeOut();
    
});


//ANIMACION HOVER BOTONES RESERVA_____

$('#reservation-btn').mouseenter(function(){
    
    $('#reservation-btn:after').css("width","100%");
    $('#reservation-btn:after').delay(300).css("height","41px");
});

$('#reservation-btn').mouseleave(function(){
    
    
});

//ANIMACION HEADER_____

var positionHeader = $("header").position().top;
$(window).scroll(function(){
    if( $(window).scrollTop() >= 500 ){
        $("header").addClass("fixed");
    }else{
        $("header").removeClass("fixed");
    }
});


//CONTACTO__DESPLEAGR MAPA_________

$('#viewmap-btn').click(function(){
    $('#fullmap .mask-map').slideToggle(500);
});


//SLIDER PORTADA INDEX_______________

$(function(){
    
    //Variables
    var interval = "";
    var time = 2500;
    var fadeTime = 900;
    
    
    //Selectores
    $('#next').click(siguiente);
    $('#prev').click(anterior);
    
    
    //Funciones    
    function parar(){
        interval = clearInterval(interval);
    }
    
    function animar(){
        interval = setInterval(slider, time);
    }
    
    function slider(){
        $('#slider li').hide();
        $('#slider li:first-child')
        .next('li').fadeIn(fadeTime)
        .end().appendTo('#slider');
    }
    
    function siguiente(){
        parar();
        slider();
    }
    
    function anterior(){
        parar();
        $('#slider li').hide();
        $('#slider li:nth-last-child(1)').fadeIn(fadeTime)
        .next('li')
        .end().prependTo('#slider');
    }
    
});
 
 
// SCRIOT DE SCROLLING__________

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
