// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//   nav.classList.toggle('nav-active');
//   burger.classList.toggle('toggle');
// });

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("carousel-item");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// }

// $('.carousel-control-prev').click(function() {
//   slideIndex--;
//   if (slideIndex < 1) {
//     slideIndex = slides.length;
//   }
//   showSlides();
// });

// $('.carousel-control-next').click(function() {
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   showSlides();
// });
// Set the autoplay interval in milliseconds
// var interval = 5000;

// // Set the initial slide
// var slideIndex = 0;

// // Get the carousel items
// var items = document.querySelectorAll('.carousel-item');

// // Get the autoplay button
// var autoplayButton = document.querySelector('.autoplay');

// // Start the autoplay
// var autoplay = setInterval(function() {
//   slideIndex++;
//   if (slideIndex >= items.length) {
//     slideIndex = 0;
//   }
//   for (var i = 0; i < items.length; i++) {
//     items[i].classList.remove('active');
//   }
//   items[slideIndex].classList.add('active');
// }, interval);

// // Pause and resume the autoplay on button click
// autoplayButton.addEventListener('click', function() {
//   if (autoplayButton.classList.contains('paused')) {
//     autoplay = setInterval(function() {
//       slideIndex++;
//       if (slideIndex >= items.length) {
//         slideIndex = 0;
//       }
//       for (var i = 0; i < items.length; i++) {
//         items[i].classList.remove('active');
//       }
//       items[slideIndex].classList.add('active');
//     }, interval);
//     autoplayButton.classList.remove('paused');
//     autoplayButton.textContent = 'Pause';
//   } else {
//     clearInterval(autoplay);
//     autoplayButton.classList.add('paused');
//     autoplayButton.textContent = 'Play';
//   }
// });

// let slideIndex = 0;
// const slides = document.querySelectorAll(".corousel-slide img");
// const totalSlides = slides.length;
 
// function showSlide() {
//   for (let i = 0; i < totalSlides; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex].style.display = "block";
// }
 
// function nextSlide() {
//   if (slideIndex === totalSlides - 1) {
//     slideIndex = 0;
//   } else {
//     slideIndex++;
//   }
//   showSlide();
// }
 
// function prevSlide() {
//   if (slideIndex === 0) {
//     slideIndex = totalSlides - 1;
//   } else {
//     slideIndex--;
//   }
//   showSlide();
// }
 
// showSlide();
// setInterval(() => {
//   nextSlide();
// }, 5000);


function sendWhatsApp(){
  // Nomor telepon dan pesan yang akan dikirim
  let phoneNumber = "+628813839208"; // ganti dengan nomor telepon yang benar
  let message = "Halo, saya mau beli kurma apakah masih ada?"; // ganti dengan pesan yang ingin dikirim

  // Encode nomor telepon dan pesan menjadi URL
  let url = `https://wa.me/${encodeURIComponent(phoneNumber)}?text=${encodeURIComponent(message)}`;

  // Buka WhatsApp dengan URL yang telah dibuat
  window.open(url);
}