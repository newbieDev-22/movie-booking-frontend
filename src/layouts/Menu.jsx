import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import useAuth from "../hooks/useAuth";

const menuList = [
  { id: 1, title: "Home", to: "/" },
  { id: 3, title: "Showtime", to: "/showtime" },
  { id: 4, title: "Booking Histories", to: "/booking-history", isUser: true },
  { id: 5, title: "Edit Movies", to: "/edit-movie", isUser: false },
  { id: 6, title: "Edit Showtimes", to: "/edit-showtime", isUser: false },
];

export default function Menu() {
  const { pathName } = useLocation();
  const { authUser } = useAuth();
  const isUser = authUser ? true : false;
  const isAdmin = authUser?.isAdmin ? true : false;
  return (
    <>
      {isUser && (
        <nav className="flex justify-center gap-4 h-full px-20 ">
          {menuList.map((el) => {
            if (isAdmin === el.isUser) {
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
      )}
    </>
  );
}
