$(document).ready(function () {

  //======================================================================
  // Chocolate.js
  //======================================================================
  $('#main-background').chocolate({
    images: ['assets/images/drone/DJI_0181.JPG', 'assets/images/drone/DJI_0180.JPG'],
    interval: 5000,
    speed: 2500
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