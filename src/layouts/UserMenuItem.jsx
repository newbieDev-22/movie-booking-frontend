import React from "react";

export default function UserMenuItem({ onClick }) {
  return (
    <div className="flex h-full gap-2" onClick={onClick}>
      <div className="text-xl font-semibold h-full flex items-center px-8 hover:text-black hover:bg-white active:bg-gray-300">
        Log out
      </div>
    </div>
  );
}
