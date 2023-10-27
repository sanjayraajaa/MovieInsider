const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let position = 0;
let posterWidth = document.querySelector('.poster').offsetWidth + 10; // Calculate poster width

prevButton.addEventListener('click', () => {
    if (position < 0) {
        position += posterWidth;
        slider.style.transform = `translateX(${position}px)`;
    }
});

nextButton.addEventListener('click', () => {
    const maxPosition = -((slider.children.length - 5) * posterWidth); // Adjust 5 to the number of posters visible at once
    if (position > maxPosition) {
        position -= posterWidth;
        slider.style.transform = `translateX(${position}px)`;
    }
});
