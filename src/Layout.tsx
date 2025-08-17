import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

import { useTheme } from "./themeContext";
import { colors } from "./theme";

function Layout() {
  const { theme } = useTheme();
  const bgColor = theme === "light" ? colors.background : "#1f2937";
  const textColor = theme === "light" ? colors.text : "#f9fafb";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          padding: "10px 20px",
          background: theme === "light" ? colors.primary : "#111827",
          color: "#fff",
        }}
      >
        <Link
          to="/dashboard"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          Profile
        </Link>
        <Link
          to="/settings"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          Settings
        </Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer
        style={{
          padding: "10px 20px",
          textAlign: "center",
          background: theme === "light" ? colors.secondary : "#111827",
          color: "#fff",
        }}
      >
        © 2025 My App
      </footer>
    </div>
  );
}

export default Layout;
