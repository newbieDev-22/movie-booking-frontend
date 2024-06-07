import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainContainer() {
  return (
    <div className="max-h-screen max-w-screen box-border">
      <Header />
      <Outlet />
    </div>
  );
}
