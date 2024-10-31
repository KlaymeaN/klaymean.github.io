// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Get all images with class="thumbnail" and add the click event
var thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Load the larger image version
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() { 
    modal.style.display = "none";
}
