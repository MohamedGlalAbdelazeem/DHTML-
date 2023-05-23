let darkMode = document.getElementById('mode');
let icons = document.getElementById('icons');
 
 darkMode.onclick = function() {
  if (document.body.style.background === "darkcyan") {
    darkMode.style.color = "darkcyan";
    document.body.style.background = "white";
    
  } else {
    darkMode.style.color = "white";
    document.body.style.background = "darkcyan";
  }
};


var scrollButton = document.getElementById('scroll');
scrollButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  if (window.pageYOffset === 0) {
    scrollButton.style.display = 'none';
  } else {
    scrollButton.style.display = 'block';
  }
});

 
 