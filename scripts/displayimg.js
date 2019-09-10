function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function createImg(){
  var img = new Image();
           img.src =
"C:\vlad\Pictures\Verse\AliceMR\dcgmv45-c7d1b2af-a3f5-4b2e-9dfe-a7ec87a4e6fa.jpg";
           document.getElementById("test").appendChild(img);
           down.innerHTML = "Image Element Added.";
}
