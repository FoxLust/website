window.onload = function() {
  var container = document.querySelector('.container');
  container.addEventListener('animationend', function() {
    var elements = container.getElementsByClassName('fade-in');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
    }
  });
}
