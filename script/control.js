document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('theme-icon');
    const body = document.body;
  
    // Tema simgesini değiştir ve body'ye light-mode class'ını ekle/çıkar
    themeButton.addEventListener('click', function () {
      body.classList.toggle('light-mode');
  
      if (body.classList.contains('light-mode')) {
        themeButton.classList.remove('fa-moon');
        themeButton.classList.add('fa-sun');
        document.querySelector("header").style.backgroundImage = "url('../gorsel/banner.jpg')";
      } else {
        themeButton.classList.remove('fa-sun');
        themeButton.classList.add('fa-moon');
        document.querySelector("header").style.backgroundImage = "url('../gorsel/banner2.png')";
      }
    });
  });
  