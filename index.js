// Get the popup and its content
var popup = document.querySelector('.popup');
var popupImg = document.querySelector('.popup-content img');
var popupTitle = document.querySelector('.popup-content h3');
var popupDesc = document.querySelector('.popup-content p');

// Get all the image overlays
var overlays = document.querySelectorAll('.proj-overlay');

// Loop through each overlay and add a click event listener
for (var i = 0; i < overlays.length; i++) {
  overlays[i].addEventListener('click', function() {
    // Get the corresponding image and description
    var imgSrc = this.previousElementSibling.src;
    // var title = this.querySelector('h3').textContent;
    var desc = this.querySelector('p').textContent;

    // Set the popup content
    popupImg.src = imgSrc;
    popupTitle.textContent = title;
    popupDesc.textContent = desc;

    // Show the popup
    popup.style.display = 'block';
  });
}

// Add a click event listener to the close button
document.querySelector('.close').addEventListener('click', function() {
  popup.style.display = 'none';
});
