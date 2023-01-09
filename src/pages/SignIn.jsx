import React, { useState } from "react";
import { icons } from "react-icons";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  };

  const onClick = () => setShowPassword((state) => !state);
  return (
    <section>
      <h1 className="text-center text-3xl mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media.istockphoto.com/id/89490774/photo/handing-over-keys.jpg?s=612x612&w=0&k=20&c=zm3d1sU5XoS7aJyPI7lxlBZTMJZJ1dcPdrCGKxmxSd8="
            alt="house key"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out mb-6"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={onClick}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={onClick}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm md:text-lg">
              <p className="mb-6">
                Don't have a account?{" "}
                <Link
                  to="/sign-up"
                  className="text-red-500 hover:text-red-700 transition duration-300 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 "
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-500 px-7 py-3 text-sm text-white font-medium uppercase rounded shadow-md hover:bg-blue-600 transition duration-300 ease-in-out
          active:bg-blue-700 hover:shadow-lg"
            >
              Sign In
            </button>
            <div className="my-4 flex items-center  before:border-t  before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300">
              <p className="text-center mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
