document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('theme-icon');
    const body = document.body;
  
    // Tema simgesini değiştir ve body'ye light-mode class'ını ekle/çıkar
    themeButton.addEventListener('click', function () {
      body.classList.toggle('light-mode');
  
      if (body.classList.contains('light-mode')) {
        themeButton.classList.remove('fa-moon-o');
        themeButton.classList.add('fa-sun-o');
      } else {
        themeButton.classList.remove('fa-sun-o');
        themeButton.classList.add('fa-moon-o');
      }
    });
  });
  