import React from "react";
import useAuth from "../hooks/useAuth";

export default function GuestMenuItem() {
  const { setLoginOpen, setRegisterOpen } = useAuth();
  return (
    <div className="flex h-full gap-6">
      <div
        className="w-1/2 text-xl font-semibold flex items-center justify-center px-4 hover:text-black hover:bg-white active:bg-gray-300 transition-all min-w-48"
        onClick={() => setRegisterOpen(true)}
      >
        Register
      </div>
      <div
        className="w-1/2 text-xl font-semibold flex items-center justify-center px-4 hover:text-black hover:bg-white active:bg-gray-300 transition-all min-w-48"
        onClick={() => setLoginOpen(true)}
      >
        Log in
      </div>
    </div>
  );
}
