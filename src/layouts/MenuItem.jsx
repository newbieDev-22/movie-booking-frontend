import { Link } from "react-router-dom";

export default function MenuItem({ isActive, title, to }) {
  return (
    <Link
      to={to}
      className={`transition-all px-2 py-6 text-xl font-bold flex-1 flex justify-center items-center text-center ${
        isActive
          ? "bg-white text-black"
          : " hover:text-black hover:bg-gray-200 active:bg-gray-300"
      } `}
    >
      {title}
    </Link>
  );
}
