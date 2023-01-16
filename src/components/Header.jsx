import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navigate = useNavigate();
  function partRout(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  const [pageState, setPageState] = useState("Sign in");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setPageState("Profile") : setPageState("Sign in");
    });
  });
  return (
    <div className="bg-gray-100 border-b shadow-lg sticky top-0 z-50">
      <header className="flex justify-between  items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-4 cursor-pointer md:h-5"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`
              cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
              ${partRout("/") && "text-black border-b-red-500"}
              `}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`
              cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
              ${partRout("/offers") && "text-black border-b-red-500"}
              `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`
              cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
              ${
                partRout("/sign-in") ||
                (partRout("/profile") && "text-black border-b-red-500")
              }
              `}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
