import { Link } from "react-router-dom";
import Menu from "./Menu";
import { LogoImage } from "../icons";
import { RIGHT_MENU_ITEM } from "../constants";
import GuestMenuItem from "./GuestMenuItem";
import UserMenuItem from "./UserMenuItem";
import useAuth from "../hooks/useAuth";

const rightMenuMapping = {
  [RIGHT_MENU_ITEM.GUEST]: <GuestMenuItem />,
  [RIGHT_MENU_ITEM.USER]: <UserMenuItem />,
};

export default function Header() {
  const { authUser } = useAuth();
  const isUser = authUser ? RIGHT_MENU_ITEM.USER : RIGHT_MENU_ITEM.GUEST;
  console.log(isUser);

  return (
    <header className="bg-[#DC2026] h-[72px]">
      <div className="flex text-white px-2 justify-between bg-gradient-to-b from-black to-[#000]/50 h-[72px]">
        <button className="flex items-center px-10">
          <div className="h-[72px] flex justify-center items-center">
            <Link to="/">
              <LogoImage />
            </Link>
          </div>
        </button>
        <div className="flex-1">
          <Menu />
        </div>
        <button className="flex justify-end items-center px-2">
          {rightMenuMapping[isUser]}
        </button>
      </div>
    </header>
  );
}
