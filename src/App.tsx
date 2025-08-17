import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./login";
import Dashboard from "./dashboard";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Settings from "./Settings";
import NotFound from "./NotFound";
import Layout from "./Layout";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./themeContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Layout حوالين الصفحات المحمية */}
            <Route element={<Layout />}>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}
