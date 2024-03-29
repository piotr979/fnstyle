
// *********
  // SLIDER
  // **********


  const slides = document.querySelectorAll("#my-slider > .slide");
  // const slides = slider.children;
  if (slides.length > 0) {
    slides.item(0).style.opacity = 1;
    const slidesCount = slides.length;
    let currentSlide = 0;
    let nextSlide = 1;

    const slideText = document.querySelectorAll(".slide-text__head");
    const slideSubText = document.querySelectorAll(".slide-text__subhead");
    setInterval(
      function () {
        slides.item(currentSlide).style.opacity = 0;
        nextSlide = nextSlide == slidesCount - 1 ? 0 : currentSlide + 1;

        if (currentSlide < slideText.length) {
          slideText[currentSlide].classList.remove("animate__slideInUp");
          slideSubText[currentSlide].classList.remove("animate__slideInUp");
        }
        // here currentSlide is previous slide
        currentSlide = nextSlide;
        slides.item(nextSlide).style.opacity = 1;

        //if must be repeated for the some condition, need to find better way
        if (currentSlide < slideText.length) {
          slideText[currentSlide].classList.add("animate__slideInUp");
          slideSubText[currentSlide].classList.add("animate__slideInUp");
        }
      },
      5000
    );
  }
		const modalButton = document.getElementById('cart-modal');
		const switchButton = document.getElementById('cart-modal-switcher');
		const main = document.getElementById('main');
		const transformModal = () => {
			main.classList.toggle("nav-open");
		}
    if (switchButton != null && modalButton != null ) {
		switchButton.addEventListener('click', function() {
			transformModal();
		})
		modalButton.addEventListener('click', function() {
			transformModal();
		})
  }


