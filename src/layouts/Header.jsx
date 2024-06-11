import { Link } from "react-router-dom";
import Menu from "./Menu";
import { LogoImage } from "../icons";
import LogOutItem from "./LogOutItem";

export default function Header() {
  return (
    <header className="bg-[#DC2026] min-w-[1275px] max-h-[72px]">
      <div className="flex text-white px-2 justify-between bg-gradient-to-b from-black to-[#000]/50 min-w-[1075px] max-h-[72px]">
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
          <LogOutItem />
        </button>
      </div>
    </header>
  );
}
