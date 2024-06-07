import { Link } from "react-router-dom";
import Menu from "./Menu";
import { LogoIcon } from "../icons";
import { RIGHT_MENU_ITEM } from "../constants";
import GusetMenuItem from "./GusetMenuItem";
import UserMenuItem from "./UserMenuItem";
import useAuth from "../hooks/useAuth";

const rightMenuMapping = {
  [RIGHT_MENU_ITEM.GUEST]: <GusetMenuItem />,
  [RIGHT_MENU_ITEM.USER]: <UserMenuItem />,
};

export default function Header() {
  const { authUser } = useAuth();
  const isUser = authUser ? RIGHT_MENU_ITEM.USER : RIGHT_MENU_ITEM.GUEST;
  console.log(isUser);

  return (
    <header className="grid grid-cols-8 bg-black text-white px-2 justify-between ">
      <button className="flex items-center ml-8">
        <div className="h-20">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
      </button>
      <div className=" col-span-6 grid-flow-row px-8 mx-4 items-center justify-evenly">
        <Menu />
      </div>
      <button className="flex justify-end items-center mr-8 ">
        {rightMenuMapping[isUser]}
      </button>
    </header>
  );
}
