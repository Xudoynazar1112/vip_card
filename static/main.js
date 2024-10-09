document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function () {
        const icon = this.querySelector('.icon');
        icon.classList.toggle('active');
    });
});
let currentIndex = 0;

function autoScroll() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    currentIndex++;

    // Loop back to the first slide after the last one
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    // Scroll to the next image
    slider.scrollTo({
        left: currentIndex * slider.clientWidth,
        behavior: 'smooth'
    });

    // Update navigation dots (optional)
    const navLinks = document.querySelectorAll('.slider-nav a');
    navLinks.forEach(link => link.style.opacity = 0.1);
    navLinks[currentIndex].style.opacity = 1;
}

// Set the interval to change the image every 3 seconds
setInterval(autoScroll, 3000);


// Main pagedagi hamkorlarning rasmlarini aylantirib turadigan kod (xatoliklari bor)

// const partner = document.querySelector('.partner');
// const partnerCount = document.querySelectorAll('img').length;
// const partnerWidth = document.querySelector('img').clientWidth;
//
// let currentPartnerIndex = 0;
//
// function goToPartner(index) {
//     partner.style.transform = `translateX(-${index * partnerWidth}px)`;
// }
// function nextPartner() {
//     currentPartnerIndex = (currentPartnerIndex + 1) % partnerCount;
//     goToPartner(currentPartnerIndex);
// }
// setInterval(nextPartner, 3000);



