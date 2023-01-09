import React from "react";
import { icons } from "react-icons/lib";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <div className="flex justify-center items-center w-full bg-red-600 py-3 px-7 uppercase text-sm font-medium text-white hover:shadow-lg active:bg-red-800 shadow-md transition duration-200 ease-in-out rounded-md">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with google
    </div>
  );
}
