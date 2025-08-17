import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/dashboard">Go Back to Dashboard</Link>
    </div>
  );
}

export default NotFound;
