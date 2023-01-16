import React from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();
  const signUpWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user);
      // //check if the user information is already in the firebase database if not add ithe user information

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          user: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <button
      type="button"
      onClick={signUpWithGoogle}
      className="flex justify-center items-center w-full bg-red-600 py-3 px-7 uppercase text-sm font-medium text-white hover:shadow-lg active:bg-red-800 shadow-md transition duration-200 ease-in-out rounded-md"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with google
    </button>
  );
}
