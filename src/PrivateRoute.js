import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const token = localStorage.getItem("student-user");

 if (!token) {
   return <Navigate to="/" replace />;
 }
 return children;
}
export default PrivateRoute;