$(document).ready(function () {
  $('.github-link').click(function () {
    window.location.href = "https://github.com/sc4rfurry/load_xl";
  });

  $(".github-link").hover(function () {
    $(this).animate({
      backgroundColor: "#fff",
      color: "#333"
    }, 300);
  }, function () {
    $(this).animate({
      backgroundColor: "#333",
      color: "#fff"
    }, 300);
  });

  // 3D background animation
  const numParticles = 100;
  const container = document.querySelector('.background');
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    container.appendChild(particle);
  }

  function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const z = Math.random() * 2000 - 1000;
      particle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
  }

  setInterval(animateParticles, 1000);

  // Update particles and content based on theme
  function updateTheme() {
    const content = document.querySelector('.content');
    if ($('html').attr('data-theme') === 'light') {
      content.style.background = 'rgba(255, 255, 255, 0.9)';
      content.style.color = '#000';
    } else {
      content.style.background = 'rgba(0, 0, 0, 0.5)';
      content.style.color = '#fff';
    }
  }

  $('.theme-toggle').click(function () {
    if ($('html').attr('data-theme') === 'light') {
      $('html').attr('data-theme', 'dark');
      $(this).html('<i class="fas fa-moon"></i>');
    } else {
      $('html').attr('data-theme', 'light');
      $(this).html('<i class="fas fa-sun"></i>');
    }
    updateTheme();
  });

  updateTheme();

  // Scrollbar for the entire page
  let lastScrollTop = 0;

  $(window).on('scroll', function () {
    let scrollTop = $(window).scrollTop();
    let scrollHeight = $(document).height();
    let windowHeight = $(window).height();
    let scrollPercent = scrollTop / (scrollHeight - windowHeight);

    // 3D effect based on scroll direction
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      $('body').css('--scrollbar-thumb-transform', 'translateZ(5px) rotateY(-5deg)');
    } else {
      // Scrolling up
      $('body').css('--scrollbar-thumb-transform', 'translateZ(5px) rotateY(5deg)');
    }

    lastScrollTop = scrollTop;
  });

  // Scrollbar dragging functionality
  let isDragging = false;
  let startY;
  let startScrollTop;

  $('body').on('mousedown', function (e) {
    isDragging = true;
    startY = e.clientY - $(this).offset().top;
    startScrollTop = $(window).scrollTop();
    $('body').css('user-select', 'none');
  });

  $(document).on('mousemove', function (e) {
    if (isDragging) {
      let newTop = e.clientY - startY;
      let maxTop = $(window).height() - $(this).height();
      newTop = Math.max(0, Math.min(newTop, maxTop));
      let scrollPercent = newTop / maxTop;
      let newScrollTop = scrollPercent * ($(document).height() - $(window).height());
      $(window).scrollTop(newScrollTop);
    }
  });

  $(document).on('mouseup', function () {
    isDragging = false;
    $('body').css('user-select', '');
  });
});
