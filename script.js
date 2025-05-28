
window.addEventListener('scroll', () => {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    let scrollY = window.scrollY;

    if (scrollY > 10) {
        overlay.style.opacity = 0.5;
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    } else {
        overlay.style.opacity = 0;
        content.style.opacity = 0;
        content.style.transform = 'translateY(30px)';
    }
});
