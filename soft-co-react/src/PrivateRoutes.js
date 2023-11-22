import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default PrivateRoutes;
