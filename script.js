;document.addEventListener("DOMContentLoaded", function () {
  // Find the Fall Collection image
  const fallImage = document.querySelector(".fall-image");

  // Stop if the image cannot be found
  if (!fallImage) {
    console.log("Fall Collection image not found.");
    return;
  }

  // Save the original and hover images
  const originalImage = fallImage.src;
  const hoverImage = fallImage.dataset.hover;

  // Preload the hover image
  const preloadImage = new Image();
  preloadImage.src = hoverImage;

  // Change to the second image when hovering
  fallImage.addEventListener("mouseenter", function () {
    fallImage.src = hoverImage;
  });

  // Change back to the original image when leaving
  fallImage.addEventListener("mouseleave", function () {
    fallImage.src = originalImage;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Find the Fall Collection image
  const fallImage = document.querySelector(".fall-image");

  // Stop if the image cannot be found
  if (!fallImage) {
    console.log("Fall Collection image not found.");
    return;
  }

  // Save the original and hover images
  const originalImage = fallImage.src;
  const hoverImage = fallImage.dataset.hover;

  // Preload the hover image
  const preloadImage = new Image();
  preloadImage.src = hoverImage;

  // Change to the second image when hovering
  fallImage.addEventListener("mouseenter", function () {
    fallImage.src = hoverImage;
  });

  // Change back to the original image when leaving
  fallImage.addEventListener("mouseleave", function () {
    fallImage.src = originalImage;
  });
});

document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    let accumulatedUpScroll = 0;

    const navbar = document.querySelector(".navbar");
    const headerHeight = 55;
    const upScrollThreshold = 15;

    if (!navbar) return;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;

        // Background color
        if (currentScrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Keep navbar visible at the top
        if (currentScrollY <= headerHeight) {
            navbar.classList.remove("nav-hidden");
            accumulatedUpScroll = 0;
            lastScrollY = currentScrollY;
            return;
        }

        // Scrolling down
        if (scrollDelta > 0) {
            accumulatedUpScroll = 0;
            navbar.classList.add("nav-hidden");
        }

        // Scrolling up
        else if (scrollDelta < 0) {
            accumulatedUpScroll += Math.abs(scrollDelta);

            if (accumulatedUpScroll >= upScrollThreshold) {
                navbar.classList.remove("nav-hidden");
                accumulatedUpScroll = 0;
            }
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
});


const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

// Change image every 5 seconds
setInterval(changeSlide, 5000);