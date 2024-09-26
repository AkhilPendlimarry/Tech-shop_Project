// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signupButton");

// Get the icon that closes the modal
var icon = document.getElementById("icon");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the icon (x), close the modal
icon.onclick = function() {
  modal.style.display = "none";
}

