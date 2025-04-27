document.querySelector('.slider').addEventListener('wheel', (event) => {
    event.preventDefault();
    const slider = event.currentTarget;
    slider.scrollLeft += event.deltaY;
});
