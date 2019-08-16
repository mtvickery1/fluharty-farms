$(document).ready(function () {

  //======================================================================
  // Chocolate.js
  //======================================================================
  // $('body').chocolate({
  //   images: ['assets/images/drone/DJI_0181.JPG', 'assets/images/drone/DJI_0180.JPG'],
  //   interval: 5000,
  //   speed: 2500
  // });
  $('body').css("background-image", "url('assets/images/drone/DJI_0181.JPG')");

  $(window).scroll(function () {
    var currentScrollTop = $(window).scrollTop();
    $('.container-fluid').css('opacity', currentScrollTop / $('.container-fluid').height());

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
  // Render Photos
  //======================================================================
  var gallery = $("#gallery")

  for (var i = 1; i < 21; i++) {

    // ------------------------------------------------------------------
    // Create
    // ------------------------------------------------------------------

    // create frame
    var frame = $("<img>");
    frame.addClass("frame");
    // assign url to frame
    $(frame).attr("src", "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg");
    // var imageUrl = "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg"

    // create link
    var a = $("<a>");
    // add href to link
    a.attr("href", "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg");
    // open link in new tab
    a.attr("target", "_blank");

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