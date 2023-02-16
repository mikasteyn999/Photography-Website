const imageArray = ["images/collage/image (1).jpg", "images/collage/image (2).jpg", "images/collage/image (3).jpg", 
    "images/collage/image (4).jpg", "images/collage/image (5).jpg", "images/collage/image (6).jpg", 
    "images/collage/image (7).jpg", "images/collage/image (8).jpg", "images/collage/image (9).jpg",
    "images/collage/image (10).jpg", "images/collage/image (16).jpg", "images/collage/image (12).jpg", 
    "images/collage/image (13).jpg", "images/collage/image (14).jpg"]
// Save for later functionality here:
// Get the save for later button
var saveButtonArray = document.getElementsByClassName("save-button");
// Add a click event listener to the button
for (let i = 0; i < saveButtonArray.length; i++) {
    const saveButton = saveButtonArray[i]
    saveButton.addEventListener("click", function(e) {
        const imageId = e.target.id
        // Get the saved items from local storage, or create an empty array if it doesn't exist
        var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
        const item = imageArray[imageId]
        // Add the new item to the array
        savedItems.push(item);
        // Save the updated array back to local storage
        localStorage.setItem("savedItems", JSON.stringify(savedItems));
        // Alert the user that the item has been saved and how many have been saved
        alert("Item saved for later!\n You have " + savedItems.length + " saved items.");
    });
}
// Form for user to leave a comment here
const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const commentsContainer = document.getElementById("comments");
// Add eventlistener to enter button press
comment.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    form.dispatchEvent(new Event("submit"));
  }
});
// Add comment here
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const commentValue = comment.value;
  commentsContainer.innerHTML += `<p>${commentValue}</p>`;
  comment.value = "";
});
// Expand photos - chained effect here
$(document).ready(function() {
    var $fullSizeImage = $('#full-size-image');
    var $fullSizeImageImg = $fullSizeImage.find('img');
    var $prev = $('#prev');
    var $next = $('#next');
    var $thumbnail = $('.collage-image');
    
    var currentImageIndex = 0;
    
    $thumbnail.click(function() {
      currentImageIndex = $thumbnail.index(this);
      var src = $(this).attr('src');
      var alt = $(this).attr('alt');
      $fullSizeImageImg.attr('src', src).attr('alt', alt);
      $fullSizeImage.fadeIn().delay(500).fadeTo(1000, 1);
    });
    
    $('#exit').click(function() {
        $fullSizeImage.fadeOut();
      });
    
    $prev.click(function() {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = $thumbnail.length - 1;
      }
      var $currentThumbnail = $($thumbnail[currentImageIndex]);
      var src = $currentThumbnail.attr('src');
      var alt = $currentThumbnail.attr('alt');
      $fullSizeImageImg.attr('src', src).attr('alt', alt);
    });
    
    $next.click(function() {
      currentImageIndex++;
      if (currentImageIndex >= $thumbnail.length) {
        currentImageIndex = 0;
      }
      var $currentThumbnail = $($thumbnail[currentImageIndex]);
      var src = $currentThumbnail.attr('src');
      var alt = $currentThumbnail.attr('alt');
      $fullSizeImageImg.attr('src', src).attr('alt', alt);
    });
  });
// Functionality for form for user to like images here
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(function(likeButton) {
  likeButton.addEventListener('click', function() {
    const likeCount = this.nextElementSibling;
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
  });
});



