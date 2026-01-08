emailjs.init("");

const contactForm = document.getElementById("contactForm");
const submitButton = contactForm.querySelector('button[type="submit"]');

// Sanitize input to prevent XSS attacks and handle problematic characters
function sanitizeInput(input) {
  if (typeof input !== "string") return "";

  // Remove any HTML tags
  let sanitized = input.replace(/<[^>]*>/g, "");

  // Escape special HTML characters
  const escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };

  sanitized = sanitized.replace(/[&<>"'/]/g, (char) => escapeMap[char]);

  return sanitized;
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate input length
function validateLength(input, minLength, maxLength) {
  const length = input.length;
  return length >= minLength && length <= maxLength;
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Get and sanitize user inputs
  const rawName = document.getElementById("name").value.trim();
  const rawEmail = document.getElementById("email").value.trim();
  const rawMessage = document.getElementById("message").value.trim();

  // Validate inputs
  if (!validateLength(rawName, 1, 100)) {
    alert("Name must be between 1 and 100 characters.");
    submitButton.textContent = "Send";
    submitButton.disabled = false;
    return;
  }

  if (!isValidEmail(rawEmail) || !validateLength(rawEmail, 5, 254)) {
    alert("Please enter a valid email address.");
    submitButton.textContent = "Send";
    submitButton.disabled = false;
    return;
  }

  if (!validateLength(rawMessage, 10, 5000)) {
    alert("Message must be between 10 and 5000 characters.");
    submitButton.textContent = "Send";
    submitButton.disabled = false;
    return;
  }

  // Sanitize all inputs
  const sanitizedName = sanitizeInput(rawName);
  const sanitizedEmail = sanitizeInput(rawEmail);
  const sanitizedMessage = sanitizeInput(rawMessage);

  const templateParams = {
    name: sanitizedName,
    email: sanitizedEmail,
    message: sanitizedMessage,
    time: new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };

  emailjs
    .send("", "", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);

      submitButton.textContent = "Sent Successfully! ✓";
      submitButton.style.backgroundColor = "#10b981";

      contactForm.reset();

      setTimeout(() => {
        submitButton.textContent = "Send";
        submitButton.style.backgroundColor = "";
        submitButton.disabled = false;
      }, 3000);
    })
    .catch(function (error) {
      console.error("FAILED...", error);

      submitButton.textContent = "Failed to Send ✗";
      submitButton.style.backgroundColor = "#ef4444";

      setTimeout(() => {
        submitButton.textContent = "Send";
        submitButton.style.backgroundColor = "";
        submitButton.disabled = false;
      }, 3000);

      alert(
        "Failed to send message. Please try again or email me directly at saifquazi0@gmail.com",
      );
    });
});
