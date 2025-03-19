export const logout = () => {
    localStorage.removeItem("token"); // Remove token
    window.location.href = "/login"; // Redirect to login page
  };
  