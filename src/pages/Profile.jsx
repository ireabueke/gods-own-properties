import { async } from "@firebase/util";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "auth.currentUser.name",
    email: "auth.currentUser.email",
  });
  const [changeDetail, setChangeDetail] = useState(false);
  const { name, email } = formData;
  const navigate = useNavigate();
  const auth = getAuth();
  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  };

  const applyChange = async () => {
    try {
      if (auth.currentUser.displayName != name) {
        // update user name in the firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // console.log(name);
        // update name in the firestore
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("profile detail updated");
    } catch (error) {
      toast.error("could not update profile detail");
    }
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
              onChange={onChange}
              disabled={!changeDetail}
              className={`w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 transition ease-in-out duration-300 rounded-md ${
                changeDetail && "bg-red-100 focus:bg-red-200"
              }`}
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
                Do you want to change your name?
                <span
                  className="font-bold text-red-500 hover:text-red-800 cursor-pointer transition ease-in-out duration-300 pl-2"
                  onClick={() => {
                    changeDetail && applyChange();
                    setChangeDetail((state) => !state);
                  }}
                >
                  {changeDetail ? "apply change" : "Edit"}
                </span>
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
