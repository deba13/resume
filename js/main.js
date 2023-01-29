
// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector("navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})


// function sendEmail(){
//     Email.send({
//       // secureToken:"f777807b-9e57-4345-8546-644949f7bba9",
//     Host : "smtp.elasticemail.com",
//     Username : "archita12340@gmail.com",
//     Password : "EDE87C872BE07DD8E88CAB929B6F54F15CC9",
//     To : 'archita12340@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "New contact form Enquery",
//     Body : "Name: " + document.getElementById("name").value
//            + "<br> Email: " + document.getElementById("email").value
//            + "<br> Phone no: " + document.getElementById("phone").value
//            + "<br> Message: " + document.getElementById("message").value
//   }).then(
//   message => alert("Message sent Succesfully")
//   );
  
//   }


// // Swiper slider
// var Swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     autoplay: {
//         delay: 3500,
//     },

// });

// // counter design
// document.addEventListener("DOMContentLoaded", () => {
//  function counter(id, start, end, duration) {
//      let obj = document.getElementById(id),
//      current = start,
//      range = end - start,
//      increment = end > start ? 1: -1,
//      step = Math.abs(Math.floor(duration / range)),
//      timer = setInterval(() => {
//          current += increment;
//          obj.textContent = current;
//          if(current == end){
//              clearInterval(timer);
//          }

//      }, step);
//  }
//  counter("count1", 0, 1285, 4000);
//  counter("count2", 10, 5245, 3000);
//  counter("count3", 0, 1280, 2000);
//  counter("count4", 0, 7550, 5000);
// })

