// Initialize AOS (Animate on Scroll)
AOS.init();

// Smooth scroll to top
document.getElementById("myBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Optional: Add hover effects to team member cards
let teamMembers = document.querySelectorAll(".team-member");
teamMembers.forEach(member => {
  member.addEventListener("mouseenter", function() {
    this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  });
  member.addEventListener("mouseleave", function() {
    this.style.boxShadow = "none";
  });
});

function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
  }
