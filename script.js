// белая/темная тема
const nightThemeBtn = document.getElementById("night-theme-btn")

nightThemeBtn.addEventListener("click", function() {
    document.body.classList.toggle("night-theme")

    const theme = localStorage.getItem("theme")

    if (theme === "night-theme") {
        localStorage.setItem("theme", "")
    } else {
        localStorage.setItem("theme", "night-theme")
    }
})

// бургер меню
var menu = document.getElementById('menu');
var closeIcon = document.getElementById("closeIcon");

menu.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
} 

// анимации плавного появления
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.price-animation, .works-animation, .skills-animation');

for (let elm of elements) {
  observer.observe(elm);
}