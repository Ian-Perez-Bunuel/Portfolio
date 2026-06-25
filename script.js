const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const projectCards = document.querySelectorAll(".project-card");

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


projectCards.forEach((card) => {
    const images = card.querySelectorAll(".project-images img");
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add("active");
    }, 3000);
});