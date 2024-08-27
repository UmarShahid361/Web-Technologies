function changeImage() {
  const image = document.getElementById("Picture");
  const srcValue = image.getAttribute("src");
  console.log(srcValue);

  if (srcValue === "img2.jpg") {
    const newValue = image.setAttribute("src", "img1.png");
  }
  if (srcValue === "img1.png") {
    const newValue = image.setAttribute("src", "img2.jpg");
  }
}
