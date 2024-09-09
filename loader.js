//1. loading animation

function loadingAnimation() {
    var tl = gsap.timeline();
  
    tl.from(".lines h2, .lines h5,  .lines #Name", {
      y: 100,
      opacity: 0,
      stagger: 0.4,
      duration: 0.7,
      delay: 0.5,
    });
  
    tl.to("#loader", {
      opacity: 0,
      duration: 0.5,
      delay: 3.7,
      onComplete: function () {
        window.location.href = "/index.html";
      },
    });
  
    // tl.from("#main #page1", {
    //   delay: 0.6,
    //   duration: 0.5,
    //   y: 1600,
    //   opacity: 0,
    // });
  }

  if (localStorage.getItem("visited") === "true") {
    localStorage.removeItem("visited");
    window.location.href = "loader.html";
} else {
    localStorage.setItem("visited", "true");
    // setTimeout(function() {
    //     window.location.href = "index.html";
    // }, 30000);
}

  loadingAnimation()