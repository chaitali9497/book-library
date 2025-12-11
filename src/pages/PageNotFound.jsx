import { Link, useLocation } from "react-router-dom";
import "./PageNotFound.css";

 function PageNotFound() {
  const loc = useLocation();

  return (
    <div className="notfound">
      <h1>404 - Page Not Found</h1>
      <p>Invalid URL: {loc.pathname}</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}
export default PageNotFound;