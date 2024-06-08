import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import useAuth from "../hooks/useAuth";

const menuList = [
  { id: 1, title: "Home", to: "/" },
  { id: 3, title: "Showtimes", to: "/showtime" },
  { id: 4, title: "Booking Histories", to: "/booking-history", isUser: true },
  { id: 5, title: "Admin Panel", to: "/admin-panel", isUser: false },
];

export default function Menu() {
  const { pathName } = useLocation();
  const { authUser } = useAuth();
  return (
    <>
      {authUser ? (
        <nav className="flex justify-center gap-4 h-full px-20 ">
          {menuList.map((el) => {
            if (authUser?.isAdmin === el.isUser) {
              return;
            }
            return (
              <MenuItem
                key={el.id}
                title={el.title}
                to={el.to}
                isActive={pathName === el.to}
              />
            );
          })}
        </nav>
      ) : null}
    </>
  );
}
