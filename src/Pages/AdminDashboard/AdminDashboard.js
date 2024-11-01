import React from "react";
import AdminDashboardNav from "./AdminDashboardNav/AdminDashboardNav";
import AdminDashboardLeftNav from "./AdminDashboardLeftNav/AdminDashboardLeftNav";

const AdminDashboard = () => {
  return (
    <div className="w-full h-full relative bg-[#111]">
      {/*  Top Nav section  */}
      <AdminDashboardNav />
      {/*  Left Nav section  */}
      <AdminDashboardLeftNav />
    </div>
  );
};

export default AdminDashboard;
