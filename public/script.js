var formid = document.getElementById("myform");

formid.addEventListener("submit", (event) => {
  event.preventDefault();

  var nameInput = document.querySelector('input[name="name"]');
  var emailInput = document.querySelector('input[name="email"]');
  var subjectInput = document.querySelector('input[name="subject"]');
  var msgInput = document.querySelector(".text-area-box");

  var nameid = nameInput.value;
  var emailid = emailInput.value;
  var subjectid = subjectInput.value;
  var msgid = msgInput.value;

  document.querySelectorAll(".error").forEach((er) => (er.textContent = ""));
  document.querySelectorAll(".input-box, .text-area-box").forEach((input) => {
    input.classList.remove("input-error");
  });

  let valid = true;

  // Name Validation
  if (nameid.trim() === "") {
    document.getElementById("error-name").textContent = "Please fill your name";
    nameInput.classList.add("input-error");
    valid = false;
  }

  // Email Validation (Basic required check + simple format check)
  if (emailid.trim() === "") {
    document.getElementById("error-email").textContent =
      "Please fill your email address";
    emailInput.classList.add("input-error");
    valid = false;
  } else if (!isValidEmail(emailid)) {
    document.getElementById("error-email").textContent =
      "Please enter a valid email format (e.g., example@domain.com)";
    emailInput.classList.add("input-error");
    valid = false;
  }

  // Subject Validation
  if (subjectid.trim() === "") {
    document.getElementById("error-subject").textContent =
      "Please enter your Subject";
    subjectInput.classList.add("input-error");
    valid = false;
  }

  // Message Validation
  if (msgid.trim() === "") {
    document.getElementById("error-mssgg").textContent =
      "Please enter your message";
    msgInput.classList.add("input-error");
    valid = false;
  }

  if (valid) {
    console.log("Form data submitted:");
    console.log("Name:", nameid);
    console.log("Email:", emailid);
    console.log("Subject:", subjectid);
    console.log("Message:", msgid);

    formid.reset();
    alert("Message Sent Successfully!");
  }
});

// Helper function for basic email format validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});
