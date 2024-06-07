import { Link } from "react-router-dom";

export default function MenuItem({ isActive, title, to }) {
  return (
    <Link
      to={to}
      className={`px-2 py-6 text-xl font-semibold flex-1 flex justify-center items-center text-center ${
        isActive ? "" : "hover:bg-[#8c82fc] active:bg-[#5e50fb]"
      } `}
    >
      {title}
    </Link>
  );
}
