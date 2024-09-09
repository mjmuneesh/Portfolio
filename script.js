
//2. cursor animation

function cursoranimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".crsr", {
      x: dets.x,
      y: dets.y,
    });
  });
}

//3. colour change effect intro part

// Function to change text color randomly
function changeColor() {
  // Select the <p> element
  const introText = document.getElementById("introText");

  // Array of colors to choose from 67C6E3
  const colors = ["#e421e9",  "#E92163"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  introText.style.color = randomColor;
}
// Initial color change
changeColor();
setInterval(changeColor, 1000);

cursoranimation();


//4.projects section 

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".Projects",
    scroller: "body",
    start: "top 20%",
    end: "top -100%",
    scrub: 3,
    pin: ".Project-section-whole",
    stagger: 5,
    scrub:1,
    // markers: true
  }
});

// Select all Projects items
let projects = gsap.utils.toArray(".Projects");

// Loop through each project and animate it
projects.forEach((project, index) => {
  let delay = index === 2 ? 1 : 0; // Add a delay for the third project (index 2)
  
  tl.to(project, {
    yPercent: -104 * index, 
    duration: 2,
    ease: "none" // Keep it linear for smooth stacking
  }, index * 0.5 + delay); // Stagger the animations and add delay
});


// On refresh function 

// Check the flag on page load
window.addEventListener('load', function() {
  if (!localStorage.getItem('redirected')) {
      localStorage.setItem('redirected', 'true'); // Set the flag
      window.location.href = "/loader.html"; // Replace with your desired URL

  } else {
      localStorage.removeItem('redirected'); // Clear the flag for future refreshes
  }
});
