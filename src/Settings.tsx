import { useTheme } from "./themeContext";

function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Settings Page</h2>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 15px",
          background: theme === "light" ? "#111827" : "#f9fafb",
          color: theme === "light" ? "#fff" : "#111827",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Settings;
