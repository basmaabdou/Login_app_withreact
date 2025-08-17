import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Dashboard() {
  const { setIsLoggedIn, setUser } = useAuth(); // ✅ ناخدها من الكونتكست
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // نمسح بيانات اليوزر
    setIsLoggedIn(false); // نعمل لوج أوت
    navigate("/login"); // نرجع لصفحة اللوجين
  };

  return (
    <div>
      <h2>Dashboard Page</h2>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Logout
      </button>
    </div>
  );
}
