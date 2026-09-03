document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const formWrapper = document.getElementById("formWrapper");
  const successPopup = document.getElementById("successPopup");
  const errorBox = document.getElementById("errorMessage");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Field Values
    const name = document.getElementById("fullName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;

    let errors = [];

    // 1. Check for empty fields
    if (!name || !roll || !email || !department) {
      errors.push("All fields are required.");
    }

    // 2. Check Roll Number length (exactly 9 characters)
    if (roll && roll.length !== 9) {
      errors.push("Roll Number must be exactly 9 characters long.");
    }

    // If validation fails
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
      errorBox.classList.remove("hidden");
      return;
    }

    // Success State
    errorBox.classList.add("hidden");
    formWrapper.classList.add("hidden");
    successPopup.classList.remove("hidden");
  });
});