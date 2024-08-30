import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners"; 
import { UrlState } from "@/context"; 

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const { loading, isAuthenticated } = UrlState();

  useEffect(() => {
    if (!isAuthenticated && loading === false) {
      navigate("/auth");
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) return <BarLoader width={"100%"} color="#36d7b7" />;
  if (isAuthenticated) return <>{children}</>;

  return null;
};

export default RequireAuth;
