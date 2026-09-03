document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const formWrapper = document.getElementById("formWrapper");
  const successPopup = document.getElementById("successPopup");
  const errorBox = document.getElementById("errorMessage");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Values
    const name = document.getElementById("fullName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim().toUpperCase();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;

    let errors = [];

    // 1. Presence Validation
    if (!name || !roll || !email || !department) {
      errors.push("All fields are required.");
    }

    // 2. Format Validation for Roll Number (e.g., 26IM10036)
    const rollRegex = /^\d{2}[A-Z]{2}\d{5}$/;
    if (roll && !rollRegex.test(roll)) {
      errors.push("Roll Number must match format 26XX10001 (9 characters).");
    }

    // Handle Failures
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
      errorBox.classList.remove("hidden");
      return;
    }

    // Handle Success
    errorBox.classList.add("hidden");
    formWrapper.classList.add("hidden");
    successPopup.classList.remove("hidden");
  });
});