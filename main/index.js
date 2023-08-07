
/*window.addEventListener('scroll', () => {
  var title = document.getElementById('title');
  var menu = document.getElementById('nav');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  var windowHeight = window.innerHeight;
  var maxScroll = windowHeight ; // Adjust this value to control the speed of the transition

  var scrollProgress = Math.min(scrollTop / maxScroll, 1); // Calculate scroll progress as a value between 0 and 1

  if(scrollProgress > .15)  {
    scrollProgress = 1;
  }
  var titleHeight = (1 - scrollProgress) * 100 + 'vh'; // Decrease title height as scroll progresses
  var menuHeight = scrollProgress * 100 + 'vh'; // Increase menu height as scroll progresses
  console.log("title: " + titleHeight + " menu: " + menuHeight);




  title.style.height = titleHeight;
  menu.style.height = menuHeight;
})
*/

//sets an initia
let rotation = 0;
window.onwheel = e => {
  var title = document.getElementById('title');
  var menu = document.getElementById('nav');
  var windowHeight = window.innerHeight;
  var titleHeight = title.clientHeight;
  var scroller = document.getElementById('scroller');

  if(e.deltaY >= 0){
    // Scrolling Down with mouse
    //each scroll down input makes the title div 1/10 of its original height
    title.style.height = titleHeight - (windowHeight/10) + 'px';
    rotation += 7;
  } else {
    // Scrolling Up with mouse
    //does the reverse of the scrolling down conditional
    title.style.height = titleHeight + (windowHeight/10) + 'px';
    rotation -= 7;
  }
  //prevents the menu div from getting larger than the entire screen
  var newHeight = parseInt(title.style.height.substring(0,title.style.height.indexOf('p')));
  if(newHeight >= windowHeight) {
    //makes it so scroll features don't apply when at the top
    title.style.height = windowHeight + "px";
    rotation = 0;
  }
  //if(newHeight <= windowHeight/10 && newHeight != 0) title.style.height = "0px";

  //rotates the div whenever there's a scroll
  scroller.style.transform = 'rotate(' + rotation + 'deg)';

}




document.addEventListener('DOMContentLoaded', function() {
  
  // from hyperplexed paralax thing https://codepen.io/Hyperplexed/pen/bGvejNY
  const nav = document.getElementById("nav");
  let menuItems = document.getElementsByClassName("menu-item");
  const poop = document.getElementById("title");

  Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
      item.onmouseover = () => {
        nav.dataset.activeIndex = index;
      }
    });

  //cursor

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