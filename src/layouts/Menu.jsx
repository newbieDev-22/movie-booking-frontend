import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menuList = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Upcoming Movies", to: "/upcoming" },
  { id: 3, title: "Showtime", to: "/showtime" },
  { id: 4, title: "Booking History", to: "/booking-history" },
  { id: 5, title: "Edit Movies", to: "/edit-movie", isUser: false },
  { id: 6, title: "Edit Showtimes", to: "/edit-showtime", isUser: false },
];

export default function Menu() {
  const { pathName } = useLocation();
  const isUser = false;
  const isAdmin = true;
  return (
    <>
      {isUser && (
        <nav className="flex justify-center gap-4 h-full">
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
