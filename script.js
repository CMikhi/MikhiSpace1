const card = document.querySelector('.card');

card.addEventListener('mouseenter', () => {
    card.classList.add('opened');
});

card.addEventListener('click', () => {
    card.classList.toggle('opened');
});
