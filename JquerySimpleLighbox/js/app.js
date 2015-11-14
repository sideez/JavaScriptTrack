// Problem: User when clicking on an image goes to a dead end
// Solution: Create an overlay with the large image - simple lightbox

// creating a jQuery representation of DOM element
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image to overlay
$overlay.append($image);

// Add caption to overlay
$overlay.append($caption);

// 2: Add overlay
$("body").append($overlay);

  // 2.1: Add image
  // 2.2: Add caption

// 1: Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  // 1.2: Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  // 1.1: Show the overlay
  $overlay.show();

  // 1.3: Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

// 3: When overlay is clicked
$overlay.click(function() {
  // 3.1: Hide the overlay
  $overlay.hide();
});
