const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function viewerTemplate(pic, alt) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}"/>
      </div>
    `;
}

function viewHandler(event) {
    // Create a variable to hold the clicked element
    const clickedElement = event.target;

    // Ensure the clicked element is an image
    if (clickedElement.tagName !== "IMG") return;

    // Get the src attribute and split it on the "-"
    const srcParts = clickedElement.src.split("-");

    // Construct the new image file name by adding "-full.jpeg"
    const newImageSrc = srcParts[0] + "-full.jpeg";

    // Insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageSrc, clickedElement.alt));

    // Add a listener to the close button (X) that calls closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);


