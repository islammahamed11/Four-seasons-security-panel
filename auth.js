// قائمة المستخدمين
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "security", password: "sec123", role: "security" },
  { username: "supervisor", password: "sup123", role: "supervisor" },
];

// تسجيل الدخول
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "بيانات الدخول غير صحيحة";
  }
}

// التأكد من تسجيل الدخول والصلاحية
function checkLogin(requiredRoles = []) {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user || (requiredRoles.length > 0 && !requiredRoles.includes(user.role))) {
    window.location.href = "login.html";
  }
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

// جلب المستخدم الحالي
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}
