import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { colors } from "./theme";
import { useTheme } from "./themeContext";

function Login() {
  const { setIsLoggedIn, setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser({
          email,
          password,
          token: data.token,
        });
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };
  const { theme } = useTheme();

  const bgColor = theme === "light" ? "#fff" : "#374151"; // خلفية Card
  const textColor = theme === "light" ? colors.text : "#f9fafb"; // نص فاتح في Dark

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: bgColor,
        borderRadius: "10px",
        color: textColor,
        boxShadow:
          theme === "light"
            ? "0 2px 10px rgba(0,0,0,0.1)"
            : "0 2px 10px rgba(0,0,0,0.5)",
      }}
    >
      <h2 style={{ color: colors.primary, textAlign: "center" }}>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          border: `1px solid ${colors.border}`,
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          border: `1px solid ${colors.border}`,
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          background: colors.primary,
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Login
      </button>
      {error && (
        <p style={{ color: colors.danger, marginTop: "10px" }}>{error}</p>
      )}
    </div>
  );
}

export default Login;
