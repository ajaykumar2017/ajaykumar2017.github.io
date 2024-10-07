$(function () {
  $('div[onload]').trigger('onload');
});

// For Smooth Scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
});

// To Toggle the Navigation
function navToggle(){
  document.getElementById("nav-icon1").classList.toggle("open");
  var navb = document.getElementById("mySidenav");
  var navbg = document.getElementById("mySidenavbg");
  var navbg2 = document.getElementById("mySidenavbg2");
  if(navb.style.width != "90%"){
      navb.style.width = "90%";
      navbg.style.width = "200%";
      navbg2.style.width = "100%";
  }
  else{
      navb.style.width = "0";
      navbg.style.width = "0";
      navbg2.style.width = "0";
  }
}

//     $(window).load(function() {      //Do the code in the {}s when the window has loaded 
//         document.getElementById("loader").classList.add("hide");
// });
function hls(){
  document.getElementById("loader").classList.add("animated");
  document.getElementById("loader").classList.add("fadeOut");
  document.getElementById("loader").classList.add("hide");
}

$(window).scroll(function(event) {
  if($("#about2").offset().top < $(window).scrollTop() + $(window).outerHeight()){
      document.getElementById("subnav").href="#home";
      document.getElementById("downarrow").classList.add("nothome");
      document.getElementById("subnav").classList.add("nothome2");
      document.getElementById("downicon").classList.add("up");
  }else {
      document.getElementById("subnav").href="#about2";
      document.getElementById("downarrow").classList.remove("nothome");
      document.getElementById("subnav").classList.remove("nothome2");
      document.getElementById("downicon").classList.remove("up");
  }
});

$(window).scroll(function(event) {
  if($("#edu").offset().top+200 < $(window).scrollTop() + $(window).outerHeight()){
      document.getElementById("school").classList.add("animated","fadeInRight");
      document.getElementById("collage").classList.add("animated","fadeInUp");
      document.getElementById("university").classList.add("animated", "fadeInLeft");
  }
});

$(window).scroll(function(event) {
  if($("#portfolio").offset().top+200 < $(window).scrollTop() + $(window).outerHeight()){
      document.getElementById("port1").classList.add("animated","fadeInRight");
      document.getElementById("port2").classList.add("animated","fadeInUp");
      document.getElementById("port3").classList.add("animated", "fadeInLeft");
  }
});

// For Skills Section
$(window).scroll(function(event) {
  if($("#p-java").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-java").classList.add("p-java"); 
  } 

  if($("#p-javascript").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-javascript").classList.add("p-javascript"); 
  } 

  if($("#p-c").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-c").classList.add("p-c"); 
  } 

  if($("#p-python").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-python").classList.add("p-python"); 
  } 

  if($("#p-kotlin").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-kotlin").classList.add("p-kotlin"); 
  } 

  if($("#p-reactjs").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-reactjs").classList.add("p-reactjs"); 
  } 

  if($("#p-restapi").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-restapi").classList.add("p-restapi"); 
  } 

  if($("#p-html5").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-html5").classList.add("p-html5"); 
  } 

  if($("#p-css").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-css").classList.add("p-css"); 
  } 

  if($("#p-jquery").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-jquery").classList.add("p-jquery"); 
  } 

  if($("#p-ajax").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-ajax").classList.add("p-ajax"); 
  } 

  if($("#p-swagger").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-swagger").classList.add("p-swagger"); 
  } 

  if($("#p-php").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-php").classList.add("p-php"); 
  } 

  if($("#p-mysql").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-mysql").classList.add("p-mysql"); 
  } 

  if($("#p-mssql").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-mssql").classList.add("p-mssql"); 
  } 

  if($("#p-oracledb").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-oracledb").classList.add("p-oracledb"); 
  } 

  if($("#p-plsql").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-plsql").classList.add("p-plsql"); 
  } 

  if($("#p-android").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-android").classList.add("p-android"); 
  } 

  if($("#p-springframework").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-springframework").classList.add("p-springframework"); 
  } 

  if($("#p-springjdbc").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-springjdbc").classList.add("p-springjdbc"); 
  } 

  if($("#p-springaop").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-springaop").classList.add("p-springaop"); 
  } 

  if($("#p-hibernate").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-hibernate").classList.add("p-hibernate"); 
  } 

  if($("#p-junitmockito").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-junitmockito").classList.add("p-junitmockito"); 
  } 

  if($("#p-restwebservices").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-restwebservices").classList.add("p-restwebservices"); 
  } 

  if($("#p-microservices").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-microservices").classList.add("p-microservices"); 
  } 

  if($("#p-networkplus").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-networkplus").classList.add("p-networkplus"); 
  } 

  if($("#p-ccna").offset().top < $(window).scrollTop() + $(window).outerHeight()){ 
      document.getElementById("p-ccna").classList.add("p-ccna"); 
  }   
});

$(window).scroll(function(event) {
  if($(window).scrollTop()===200){
     $('html,body').animate({
          scrollTop: $("#about2").offset().top
          }, 800, function(){
              var url = location.href;
              window.location.hash = "#about2";
              history.replaceState(null,null,url);
          });
  }
});

function opennc(){
  var ncbtn = document.getElementById("notes-credits");
  ncbtn.style.height="100vh";
  ncbtn.style.width="100%";
  ncbtn.style.marginLeft="0%";
  ncbtn.style.bottom="0";
  var ncbg = document.getElementById("nc-bg");
  ncbg.style.height="100vh";
  ncbg.style.width="100%";
  ncbg.style.marginLeft="0%";
  ncbg.style.bottom="0";


}
function closenc(){
  var ncbtn = document.getElementById("notes-credits");
  ncbtn.style.height="0";
  ncbtn.style.width="0%";
  ncbtn.style.marginLeft="50%";
  ncbtn.style.bottom="45px";
  var ncbg = document.getElementById("nc-bg");
  ncbg.style.height="0";
  ncbg.style.width="0%";
  ncbg.style.marginLeft="50%";
  ncbg.style.bottom="45px";
}

