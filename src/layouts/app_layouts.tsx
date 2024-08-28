import { Outlet } from "react-router-dom";
import Header from "@/components/Header";


const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
      <Outlet />

      </main>

      <div className="p-10 text-center bg-gray-700 mt-10 ">
        &copy; {new Date().getFullYear()} dotly. All rights reserved.
      </div>
    </div>
  );
};

export default AppLayout;
