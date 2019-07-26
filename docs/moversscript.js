////////// Custom Cursor
var cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', function(e) {

    cursor.setAttribute('style', 'top: ' + (e.pageY - 5) + 'px;' + 'left: ' + (e.pageX - 5) + 'px;');

});
