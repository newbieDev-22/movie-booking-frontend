import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

export default function AdminContainer() {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
}
