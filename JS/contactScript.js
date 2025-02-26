function sendMessage(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input values
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !message) {
    alert("Both fields are required!");
    return;
  }

  // Create the mailto link
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(message);
  const mailtoLink = `mailto:professionalsubhra70@gmail.com?subject=${subject}&body=${body}`;

  // Redirect to the mailto link
  window.location.href = mailtoLink;
}
