emailjs.init("");

const contactForm = document.getElementById("contactForm");
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  const templateParams = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
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
