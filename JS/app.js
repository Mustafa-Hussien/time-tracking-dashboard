// Replace ./data.json with your JSON feed
fetch('./data.json').then(response => response.json()).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
  });

  // Get the list 
var mainCardBottom = document.querySelector(".bottom-main");

// Get all links inside the list
var links = mainCardBottom.querySelectorAll("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var current = document.querySelector(".active");
      console.log(current);
      current.classList.remove("active");
      this.className += " active";
    });
  }