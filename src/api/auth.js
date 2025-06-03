export function logout() {
    localStorage.removeItem("accessToken");
    window.location.href = "/loginpage"; // or wherever your login route is
  }
  