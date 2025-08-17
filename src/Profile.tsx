import { useAuth } from "./AuthContext";
import { useTheme } from "./themeContext";
import { colors } from "./theme";
import FadeInWrapper from "./FadeInWrapper";

export default function Profile() {
  const { user } = useAuth();
  const { theme } = useTheme();

  if (!user) return <p>No user data</p>;

  const bgColor = theme === "light" ? "#fff" : "#374151"; // خلفية Card
  const textColor = theme === "light" ? colors.text : "#f9fafb"; // نص فاتح في Dark

  return (
    <FadeInWrapper>
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "30px",
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: "10px",
          boxShadow:
            theme === "light"
              ? "0 2px 10px rgba(0,0,0,0.1)"
              : "0 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        <h2>Profile Page</h2>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Token: {user.token}</p>
      </div>
    </FadeInWrapper>
  );
}
