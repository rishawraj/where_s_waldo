// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import Dashboard from "./Dashboard";

// export default function PrivateRoute({ children }) {
//   console.log(children);
//   const { currentUser } = useAuth();
//   return currentUser ? children : <Navigate to="/login" />;
// }

import React from "react";

type Props = {};

export default function PrivateRoute({}: Props) {
  return <div>PrivateRoute</div>;
}
