document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  nameError.textContent = name ? "" : "Name is required";
  emailError.textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email format";
  passwordError.textContent = password.length >= 6 ? "" : "Password must be at least 6 characters";
});