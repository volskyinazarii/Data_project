document.addEventListener("DOMContentLoaded", function () {
  var scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollTopBtn.style.display = "block";
      } else {
          scrollTopBtn.style.display = "none";
      }
  });

  scrollTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; 
  });
});


document.addEventListener('DOMContentLoaded', function () {
    var modalButtons = document.querySelectorAll('[data-modal]');
    var closeModalBtns = document.querySelectorAll('.close');

    modalButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var modalId = button.getAttribute('data-modal');
        var modal = document.getElementById(modalId);

        modal.style.display = 'block';
      });
    });

    closeModalBtns.forEach(function (closeBtn) {
      closeBtn.addEventListener('click', function () {
        var modal = closeBtn.closest('.modal');
        modal.style.display = 'none';
      });
    });

    window.addEventListener('click', function (event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });
  });

  
document.addEventListener('DOMContentLoaded', function () {
  var openModalBtn = document.getElementById('openModalBtn');
  var modal = document.getElementById('myModal');
  var closeModalBtn = document.getElementById('closeModalBtn');

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
