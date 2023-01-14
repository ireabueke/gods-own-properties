import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "Emmanuel",
    email: "umeozokwere@gmail.com",
  });
  const { name, email } = formData;
  const navigate = useNavigate();
  const auth = getAuth();
  const logOut = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <section className="mx:w-6xl flex justify-center items-center flex-col">
        <h1 className="text-center text-3xl font-bold mt-6">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 transition ease-in-out rounded-md"
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 transition ease-in-out rounded-md"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p>
                Do you want to
                <span className="font-bold text-red-500 hover:text-red-800 cursor-pointer transition ease-in-out duration-300">
                  {" "}
                  change{" "}
                </span>
                your name?
              </p>
              <p
                className=" font-bold text-blue-500 hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out"
                onClick={logOut}
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
