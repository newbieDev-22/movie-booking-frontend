import React from "react";
import useAuth from "../hooks/useAuth";

export default function LogOutItem() {
  const { logout } = useAuth();
  return (
    <div className="flex h-full gap-2 ">
      <button
        className="text-xl font-semibold h-full flex justify-center items-center px-8 hover:text-black hover:bg-white active:bg-gray-300 transition-all min-w-48"
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
}
