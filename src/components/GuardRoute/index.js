import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function GuardRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  return auth.token !== "" ? children : <Navigate to="/Login" replace />;
}

export default GuardRoute;
