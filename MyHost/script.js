const nav = document.getElementById('navigation-bar');
const navBtn = document.getElementById('nav-btn');
 const dropDown = document.getElementById('drop-menu');

function scrollNav() {
    if (window.scrollY > 10){
    nav.style.position = 'fixed';
    nav.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    } else {
    nav.style.position = 'sticky';
    nav.style.boxShadow = 'none';
    }

 };
 window.addEventListener('scroll', scrollNav);

 
 document.addEventListener("DOMContentLoaded", () => {
    navBtn.addEventListener("click", (e) => {
        if (window.getComputedStyle(dropDown).display === "flex") {
            dropDown.style.display = "none"
        } else {
            dropDown.style.display = "flex"
            dropDown.style.position = 'fixed';
            nav.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'
            dropDown.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.preventDefault();
        }

    })
    document.addEventListener("click", (e) => {
        if (!navBtn.contains(e.target) && !dropDown.contains(e.target)) {
            dropDown.style.display = 'none'
        }
    })
 })