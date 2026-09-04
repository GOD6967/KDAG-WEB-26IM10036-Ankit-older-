document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  if (!form) return;

  const formWrapper = document.getElementById("formWrapper");
  const errorMessage = document.getElementById("errorMessage");
  const successPopup = document.getElementById("successPopup");

  const fullNameInput = document.getElementById("fullName");
  const rollNumberInput = document.getElementById("rollNumber");
  const emailInput = document.getElementById("email");
  const departmentInput = document.getElementById("department");

  const rollNumberPattern = /^\d{2}[A-Za-z]{2}\d{5}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = fullNameInput.value.trim();
    const rollNumber = rollNumberInput.value.trim();
    const email = emailInput.value.trim();
    const department = departmentInput.value.trim();

    const errors = [];

    if (!fullName) errors.push("Full Name is required.");
    if (!rollNumber) errors.push("Roll Number is required.");
    if (!email) errors.push("Email is required.");
    if (!department) errors.push("Please select a Department.");

    if (rollNumber && rollNumber.length !== 9) {
      errors.push("Roll Number must be exactly 9 characters long (e.g. 26XX10001).");
    } else if (rollNumber && !rollNumberPattern.test(rollNumber)) {
      errors.push("Roll Number must be in the format 26XX10001 (2 digits, 2 letters, 5 digits).");
    }

    if (email && !emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (errors.length > 0) {
      errorMessage.innerHTML = errors.join("<br>");
      errorMessage.classList.remove("hidden");
      return;
    }

    errorMessage.classList.add("hidden");
    errorMessage.innerHTML = "";
    formWrapper.classList.add("hidden");
    successPopup.classList.remove("hidden");
  });
});