import React from "react";
import useAuth from "../hooks/useAuth";

export default function UserMenuItem() {
  const { logout } = useAuth();
  return (
    <div className="flex h-full gap-2" onClick={logout}>
      <div className="text-xl font-semibold h-full flex items-center px-8 hover:text-black hover:bg-white active:bg-gray-300">
        Log out
      </div>
    </div>
  );
}
