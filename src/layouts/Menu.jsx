import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import useAuth from "../hooks/useAuth";

const menuList = [
  { id: 1, title: "HOME", to: "/" },
  { id: 2, title: "BOOKING HISTORIES", to: "/booking-history", isUser: true },
  { id: 3, title: "EDIT MOVIE", to: "/edit-movie", isUser: false },
  { id: 4, title: "EDIT THEATER", to: "/edit-theater", isUser: false },
];

export default function Menu() {
  const { pathname } = useLocation();
  const { authUser } = useAuth();
  return (
    <>
      {authUser ? (
        <nav className="flex justify-center gap-20 h-full px-28 transition-all">
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
