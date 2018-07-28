

// his will find how many times you clicked in that page

document.addEventListener('keypress', function () {
    document.body.remove();
});

// This will show The string animationed

const lotsOfElements = document.querySelectorAll('.quizzing-quizzby');
const element = lotsOfElements[2];

element.addEventListener('animationend', function () {
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = 'purple'; 
});
