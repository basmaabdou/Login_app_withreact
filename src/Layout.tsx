import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Layout() {
  const { setIsLoggedIn, setUser } = useAuth(); // ✅ ناخدها من الكونتكست
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // نمسح بيانات اليوزر
    setIsLoggedIn(false); // نعمل لوج أوت
    navigate("/login"); // نرجع لصفحة اللوجين
  };

  return (
    <div>
      {/* 🔼 Navbar */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/settings">Settings</Link> |{" "}
        <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* 🔽 مكان الصفحات */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      {/* 🔽 Footer */}
      <footer
        style={{ padding: "10px", background: "#eee", marginTop: "20px" }}
      >
        <p>© 2025 My App</p>
      </footer>
    </div>
  );
}

export default Layout;
