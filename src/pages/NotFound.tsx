import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background noise-overlay">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-black text-gradient-primary">404</h1>
        <p className="mb-6 text-xl text-text-muted">Oops! This page doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
