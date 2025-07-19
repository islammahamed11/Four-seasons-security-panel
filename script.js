function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "admin" && password === "3715662Lovely@") {
    localStorage.setItem("auth", "true");
    window.location.href = "index.html";
  } else {
    error.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
  }
}
