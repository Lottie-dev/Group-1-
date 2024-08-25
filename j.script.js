function displayWelcomeMessage() {
    const welcomeMessageElement = document.getElementById('welcome-message');
    const currentHour = new Date().getHours();
    let greeting = "Welcome!";
  
    if (currentHour >= 18) {
      greeting = "Good evening!";
    } else if (currentHour >= 12) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good morning!";
    }
  
    welcomeMessageElement.textContent = greeting;
  }


// Function to handle email submission
function submitEmail() {
    const emailInput = document.getElementById('email').value;
    const displayEmailElement = document.getElementById('display-email');
  
    if (emailInput) {
      displayEmailElement.textContent = "Thank you! Your email is: " + emailInput;
    } else {
      displayEmailElement.textContent = "Please enter a valid email.";
    }
  }

  // Call the displayWelcomeMessage function when the page loads
window.onload = displayWelcomeMessage;
