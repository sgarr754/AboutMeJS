// This part is the dark/light mode toggle button. 
// Once you click it, the screen will turn into dark mode.
// once you click it again it will turn into light mode.
// once you understand how this works, you can start attempting to build this into the React.js code
const body = document.body;
const toggleButton = document.querySelector('.toggle-mode');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// This is the animated skills bar
const skillsBars = document.querySelectorAll('.skill-bar');

const options = {
    threshold: 0.8
};

const skillObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.progress;
            observer.unobserve(entry.target);
        }
    });
}, options);

skillsBars.forEach(bar => {
    skillObserver.observe(bar);
});

// for the countdown
document.addEventListener('DOMContentLoaded', function() {
    // this is where you set the date you want to count down to
    const countDownDate = new Date("June 20, 2024 23:59:59").getTime();
  
    // this is where you will update the countdown every 1 second
    const x = setInterval(function() {

      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the remaining time
      const distance = countDownDate - now;
  
      // Calculate the days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown here
      document.getElementById("days").innerHTML = formatTime(days);
      document.getElementById("hours").innerHTML = formatTime(hours);
      document.getElementById("minutes").innerHTML = formatTime(minutes);
      document.getElementById("seconds").innerHTML = formatTime(seconds);
  
      // once the countdown is over, it will display an 'Expired' message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  
    // create a format for the time (add leading zero if needed)
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  });
  

  // This is for when someone wants to leave a message
  // They will insert their name and a message
  // once they click submit, their message will display with their name
  // they can leave as many messages as they would like
  function submitMessage() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
  
    if (name && message) {
        var messageList = document.getElementById('messageList');
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(name + ': ' + message));
        messageList.appendChild(li);
  
        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please enter both name and message.');
    }
  }

  // This is for the slideshow gallery
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls for the slideshow
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}