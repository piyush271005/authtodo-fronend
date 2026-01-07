import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuth } from "../checkauth/checkauth.js";

export const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const result = await checkAuth();
      setIsAuth(result);
      setLoading(false);
    };
    verify();
  }, []);

  if (loading) return null;

  if (!isAuth) {
    return <Navigate to="/Home" replace />;
  }

  return children;
};

export const PublicRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const result = await checkAuth();
      setIsAuth(result);
      setLoading(false);
    };
    verify();
  }, []);

  if (loading) return null;

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
