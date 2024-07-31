let offset = 0;

const sliderLine = document.querySelector('.slider-line');
const image = document.querySelector('img');
const buttonPrev = document.querySelector('.slider-prev');
const buttonNext = document.querySelector('.slider-next');
const pointer = document.querySelector('.pointer');

const quantityImage = document.querySelectorAll('img').length;

const imageWidth = image.offsetWidth;
const sliderLineWidth = imageWidth * quantityImage;

sliderLine.style.width = `${sliderLineWidth}px`;

function displayButton(offset) {
    buttonNext.style.display = (offset == sliderLineWidth - imageWidth) ? 'none' : 'block';
    buttonPrev.style.display = (offset == 0) ? 'none' : 'block';
}
displayButton(offset);

function renderPointer(quantityPointer) {
    pointer.innerHTML = '';
    for (i = 0; i < quantityPointer; i++) {
        const itemPointer = document.createElement('div');
        itemPointer.dataset.value = i * imageWidth;
        itemPointer.classList.add(itemPointer.dataset.value == offset ? 'pointer__item--mod' : 'pointer__item');
        pointer.append(itemPointer);
    }
}
renderPointer(quantityImage);

buttonNext.addEventListener('click', function () {
    offset += imageWidth;
    displayButton(offset);
    renderPointer(quantityImage);
    sliderLine.style.left = `${-offset}px`;
});

buttonPrev.addEventListener('click', function () {
    offset -= imageWidth;
    displayButton(offset);
    renderPointer(quantityImage);
    sliderLine.style.left = `${-offset}px`;
});

pointer.addEventListener('click', function (event) {
    if (event.target.classList.contains('pointer__item')) {
        offset = Number(event.target.dataset.value);
        displayButton(offset);
        renderPointer(quantityImage);
        sliderLine.style.left = `${-offset}px`;
    };
});