let slideIndex = 0;

  function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    const offset = -slideIndex * 100 + '%';
    document.querySelector('.slides').style.transform = `translateX(${offset})`;

    // Update pagination radio button
    document.querySelectorAll('.pagination input[type="radio"]')[slideIndex].checked = true;
  }

  function nextSlide() {
    slideIndex++;
    showSlides();
  }

  function prevSlide() {
    slideIndex--;
    showSlides();
  }

  // Change slide on pagination radio button click
  const paginationInputs = document.querySelectorAll('.pagination input[type="radio"]');
  paginationInputs.forEach(input => {
    input.addEventListener('change', function() {
      slideIndex = Array.from(paginationInputs).indexOf(this);
      showSlides();
    });
  });

  showSlides();