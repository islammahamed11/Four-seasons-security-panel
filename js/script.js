// تسجيل الدخول
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      // بيانات تسجيل دخول بسيطة
      if ((username === "admin" && password === "admin") || (username === "user" && password === "1234")) {
        localStorage.setItem("username", username);
        localStorage.setItem("role", username === "admin" ? "admin" : "user");
        window.location.href = "./home/index.html";
      } else {
        alert("بيانات الدخول غير صحيحة");
      }
    });
  }

  // التعامل مع عرض اسم المستخدم وتسجيل الخروج
  const username = localStorage.getItem("username");
  if (username) {
    const welcomeEl = document.getElementById("welcome");
    if (welcomeEl) {
      welcomeEl.textContent = `أهلاً ${username} (${localStorage.getItem("role")})`;
    }

    const logoutEl = document.getElementById("logout");
    if (logoutEl) {
      logoutEl.addEventListener("click", function () {
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        window.location.href = "../login/login.html";
      });
    }
  }

  // التحقق من صلاحيات المشاهدة
  const currentRole = localStorage.getItem("role");
  const settingsPage = window.location.pathname.includes("settings.html");
  const usersPage = window.location.pathname.includes("users.html");

  if ((settingsPage || usersPage) && currentRole !== "admin") {
    alert("ليس لديك صلاحية الدخول لهذه الصفحة.");
    window.location.href = "./index.html";
  }

  // حماية صفحات بعد تسجيل الخروج
  if (!username && !window.location.pathname.includes("login")) {
    window.location.href = "../login/login.html";
  }
});
