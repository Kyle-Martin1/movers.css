////////// Custom Cursor
var cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', function(e) {

      cursor.setAttribute('style', 'top: ' + (e.pageY - 5) + 'px;' + 'left: ' + (e.pageX - 5) + 'px;');

});




////////// Overlay Menu
document.querySelector('.hamburger').addEventListener('click', () => {

    document.querySelector('.navOverlay').classList.toggle('open');
    document.querySelector('.specialAnimationsLink').style.visibility = "visible";
    document.querySelector('.entryAnimationsLink').style.visibility = "visible";
    document.querySelector('.exitAnimationsLink').style.visibility = "visible";
    document.querySelector('.githubLink').style.visibility = "visible";
    document.querySelector('.hamburger').classList.toggle('is-active');


});

document.querySelector('.navLinks').addEventListener('click', () => {

    document.querySelector('.navOverlay').classList.toggle('open');
    document.querySelector('.hamburger').classList.toggle('is-active');

});
