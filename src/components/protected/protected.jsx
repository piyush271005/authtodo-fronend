import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuth } from "../checkauth/checkauth.js";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[110px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[110px] -z-10 animate-pulse-slow delay-700" />

      <div className="flex flex-col items-center space-y-6 glass-panel px-10 py-12 rounded-3xl border border-slate-800/80 shadow-2xl max-w-sm text-center">
        {/* Animated outer ring and inner pulse */}
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute w-12 h-12 rounded-full border-4 border-violet-500/20 border-t-violet-500 animate-spin" />
          <div className="w-6 h-6 rounded-full bg-indigo-500/30 animate-ping" />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Focusly
          </h3>
          <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-[240px]">
            Waking up secure cloud environment... This may take a moment.
          </p>
        </div>
      </div>
    </div>
  );
};

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

  if (loading) return <LoadingScreen />;

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

  if (loading) return <LoadingScreen />;

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
