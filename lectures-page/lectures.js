




//custom curstor stuff
document.addEventListener('DOMContentLoaded', function() {
  
  var cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  var linkElements = document.querySelectorAll('.link, .cards-cta, a');
  linkElements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      cursor.classList.add('scale-up');
    });

    element.addEventListener('mouseleave', function() {
      cursor.classList.remove('scale-up');
    });
  });
});