var hidden = document.getElementsByClassName("hide")[0];

let table = document.getElementsByClassName("table")[0];

table.addEventListener("click", function(e) {
    colors = Array("red", "green", "blue", "yello", "gray", "ivory", "lightgreen", "lightblue");
    e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];;
});

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Click on disabled button
var disabled = document.getElementById("disabled");
disabled.addEventListener("click", function() {
  modal.style.display = "block";
  modal.getElementById("modal-text").innerText = "Hello from disabled!";
});

// Click on hidden button
var hidden = document.getElementById("hidden");
hidden.addEventListener("click", function() {
  modal.style.display = "block";
  modal.getElementById("modal-text").innerText = "Hello from hidden button!";
});

// Click on hidden button
var opacity = document.getElementById("opacity");
opacity.addEventListener("click", function() {
  modal.style.display = "block";
  document.getElementById("modal-text").innerText = "Hello from opacity button!";
});
