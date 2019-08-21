$(document).ready(function () {

  //======================================================================
  // Chocolate.js
  //======================================================================
  // $('body').chocolate({
  //   images: ['assets/images/drone/DJI_0181.JPG', 'assets/images/drone/DJI_0180.JPG'],
  //   interval: 5000,
  //   speed: 2500
  // });

  // Landing Background
  $('body').css("background-image", "url('assets/images/drone/DJI_0181.JPG')");

  // About Background
  $(window).scroll(function () {
    var currentScrollTop = $(window).scrollTop();
    $('#about-section').css('opacity', currentScrollTop / $('#about-section').height());

  });

  //======================================================================
  // Landing Page Height
  //======================================================================
  // Set height on load
  // vph = $(window).height();
  // nvh = $('#navbar').height();
  // $('#push-to-bottom').css({ 'height': vph - nvh + 'px' });
  // console.log('vph', vph);
  // console.log('nvh', nvh);

  // $(window).resize(function () {
  //   vph = $(window).height();
  //   nvh = $('#navbar').height();
  //   $('#push-to-bottom').css({ 'height': vph - nvh + 'px' });
  //   console.log('vph', vph);
  //   console.log('nvh', nvh);
  // });


    //======================================================================
  // SMOOTH SCROLL ON CLICK
  //======================================================================
  var fromTop = 0;
  // Main
  $("#nav-about").click(function () {
    fromTop = 0;
    $('html,body').animate({
      scrollTop: $("#about-section").offset().top - fromTop
    }, 'slow');
  });
  $("#circle-down-container i").click(function () {
    fromTop = 0;
    $('html,body').animate({
      scrollTop: $("#about-section").offset().top - fromTop
    }, 'slow');
  });
  $("#circle-up-container i").click(function () {
    fromTop = 0;
    $('html,body').animate({
      scrollTop: $("#top").offset().top - fromTop
    }, 'slow');
  });

  //======================================================================
  // Render Photos
  //======================================================================
  var gallery = $("#gallery")

  for (var i = 1; i < 21; i++) {

    // ------------------------------------------------------------------
    // Create
    // ------------------------------------------------------------------
    // create frame
    var frame = $("<img>");
    // add .frame 
    frame.addClass("frame");
    // assign url to frame
    $(frame).attr("src", "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg");

    // create link
    var a = $("<a>");
    // add href to link
    a.attr("href", "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg");
    // open link in new tab
    a.attr("target", "_blank");
    // add lightbox attr
    a.attr("data-lightbox", "mygallery");

    // ------------------------------------------------------------------
    // Append
    // ------------------------------------------------------------------
    // append frame to link
    a.append(frame);
    // appending row to #photos
    gallery.append(a);
    // ------------------------------------------------------------------
  };





});