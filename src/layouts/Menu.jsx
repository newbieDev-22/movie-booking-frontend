import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import useAuth from "../hooks/useAuth";

const menuList = [
  { id: 1, title: "HOME", to: "/" },
  { id: 2, title: "SHOWTIMES", to: "/showtime" },
  { id: 3, title: "BOOKING HISTORIES", to: "/booking-history", isUser: true },
  { id: 4, title: "ADMIN PANEL", to: "/admin-panel", isUser: false },
];

export default function Menu() {
  const { pathname } = useLocation();
  const { authUser } = useAuth();
  return (
    <>
      {authUser ? (
        <nav className="flex justify-center gap-8 h-full px-32 transition-all">
          {menuList.map((el) => {
            if (authUser?.isAdmin === el.isUser) {
              return;
            }
            return (
              <MenuItem
                key={el.id}
                title={el.title}
                to={el.to}
                isActive={pathname === el.to}
              />
            );
          })}
        </nav>
      ) : null}
    </>
  );
}
