var loader=document.getElementById('preloader');
window.addEventListener("load",function()
{
  loader.style.display="none";
});

// Theme change
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  // Functions to toggle themes
  const applyBrightTheme = () => {
    body.classList.add("bright-theme");
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "bright");
  };

  const applyDarkTheme = () => {
    body.classList.add("dark-theme");
    body.classList.remove("bright-theme");
    localStorage.setItem("theme", "dark");
  };

  // Load saved theme from localStorage or default to bright
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    applyDarkTheme();
  } else {
    applyBrightTheme();
  }

  // Add event listeners to icons
  sunIcon.addEventListener("click", applyDarkTheme); // Switch to dark theme
  moonIcon.addEventListener("click", applyBrightTheme); // Switch to bright theme
});



function sendMessage(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input values
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("msg").value.trim();

  // Basic validation
  if (!name || !message) {
    alert("Both fields are required!");
    return;
  }

  // Create the mailto link
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(message);
  const mailtoLink = `mailto:shawsubhra68@gmail.com?subject=${subject}&body=${body}`;

  // Redirect to the mailto link
  window.location.href = mailtoLink;
}
