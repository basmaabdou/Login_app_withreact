import { useAuth } from "./AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <p>No user data</p>;

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>Token: {user.token}</p>
    </div>
  );
}
