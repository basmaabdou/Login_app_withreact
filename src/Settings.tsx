import React from "react";

type SettingsProps = {
  onToggleTheme: () => void;
};

function Settings({ onToggleTheme }: SettingsProps) {
  return (
    <div>
      <h2>Settings Page</h2>
      {/* 👇 زر بسيط لتغيير الثيم مثلاً */}
      <button onClick={onToggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Settings;
