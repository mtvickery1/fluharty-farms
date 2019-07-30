$(document).ready(function () {

  //======================================================================
  // Chocolate.js
  //======================================================================
  $('#main-background').chocolate({
    images: ['assets/images/drone/DJI_0181.JPG', 'assets/images/drone/DJI_0180.JPG'],
    interval: 4000,
    speed: 1000
  });

  //======================================================================
  // Render Photos
  //======================================================================
  var photosDiv = $("#photos")
  var colNum = 0

  for (var i = 1; i < 83; i++) {

    // ------------------------------------------------------------------
    // Create
    // ------------------------------------------------------------------
    if (colNum % 3 === 0) {
      // create row
      var row = $("<div>").addClass("row")
    }
    // create column
    var column = $("<div>").addClass("col-md-4")

    // create frame
    var frame = $("<div>").addClass("frame")
    // assign url to frame
    $(frame).css('background-image', 'url(" ./assets/images/mls/' + i + '_Fluharty Farms - 1st Session.jpg ")');
    // var imageUrl = "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg"

    // create link
    var a = $("<a>")
    // add href to link
    a.attr("href", "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg")
    // open link in new tab
    a.attr("target", "_blank")
    console.log('a:', a)

    // ------------------------------------------------------------------
    // Append
    // ------------------------------------------------------------------
    // append frame to link
    a.append(frame)

    // append link to column
    column.append(a)

    // append column to row
    row.append(column)

    // appending row to #photos
    photosDiv.append(row)
    // ------------------------------------------------------------------

    colNum++
    console.log(colNum)

    // TEST - making sure all photos were displaying
    frame.attr("id", i);
  }


  // // Render photos
  // // set #photos to a variable
  // var photosDiv = $("#photos")
  // var colNum = 0

  // for (var i = 1; i < 83; i++) {
  //   if (colNum % 3 === 0) {
  //     // create row
  //     var row = $("<div>").addClass("row")
  //   }
  //   // create column
  //   var column = $("<div>").addClass("col-md-4")
  //   // create frame
  //   var frame = $("<div>").addClass("frame")

  //   // TEST - making sure all photos were displaying
  //   frame.attr("id", i);

  //   // ------------------------------------------------------------------
  //   // LINK
  //   // ------------------------------------------------------------------
  //   // create link
  //   var a = $("<a>")
  //   // add href to link
  //   a.attr("href", "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg")
  //   // open link in new tab
  //   a.attr("target", "_blank")
  //   // ------------------------------------------------------------------


  //   // ------------------------------------------------------------------
  //   // IMAGE
  //   // ------------------------------------------------------------------
  //   // create img
  //   var image = $("<img>")
  //   // set img src
  //   image.attr("src", "./assets/images/mls/" + i + "_Fluharty Farms - 1st Session.jpg")
  //   // set img width
  //   image.attr("style", "width:100%")
  //   // ------------------------------------------------------------------


  //   // ------------------------------------------------------------------
  //   // APPEND
  //   // ------------------------------------------------------------------
  //   // append image to link
  //   a.append(image)

  //   // append link to frame
  //   frame.append(a)

  //   // append frame to column
  //   column.append(frame)

  //   // append column to row
  //   row.append(column)

  //   // appending row to #photos
  //   photosDiv.append(row)
  //   // ------------------------------------------------------------------


  //   colNum++
  //   console.log(colNum)
  // }

})