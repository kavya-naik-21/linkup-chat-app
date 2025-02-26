import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#c7dfe9]">
      <div className="border-2 rounded-2xl h-11/12 w-2/4 bg-gray-700 text-white border-gray-700 shadow-gray-900 shadow-2xl flex flex-col justify-center items-center">
        <div className="text-center pb-2">
          <span className="font-bold text-2xl">WELCOME</span>
        </div>
        <div className="text-center pb-2">
          <span className="">Sign Up with new account</span>
        </div>
        <form
          className="w-3/4 pl-10 pr-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
            <label className="font-bold">Full Name</label>
            <div className="flex items-center mt-2">
              <FaUserAlt className="mr-2" />
              <input
                className="border-2 border-gray-200 rounded-sm px-4 py-1 w-full"
                type="text"
                id="username"
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label className="font-bold">Username</label>
            <div className="flex items-center mt-2">
              <FaUserAlt className="mr-2" />
              <input
                className="border-2 border-gray-200 rounded-sm px-4 py-1 w-full"
                type="text"
                id="username"
              />
            </div>
          </div>
          {/* Gender Selection */}
          <div className="flex flex-col mt-6">
            <label className="font-bold">Select Gender</label>
            <div className="flex space-x-6 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="radio"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="radio"
                />
                <span>Female</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label className="font-bold">Password</label>
            <div className="flex items-center mt-2">
              <RiLockPasswordFill className="mr-2" />
              <input
                className="border-2 border-gray-200 rounded-sm px-4 py-1 w-full"
                type="password"
                id="password"
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label className="font-bold">Confirm Password</label>
            <div className="flex items-center mt-2">
              <RiLockPasswordFill className="mr-2" />
              <input
                className="border-2 border-gray-200 rounded-sm px-4 py-1 w-full"
                type="password"
                id="confirm-password"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-[#009EE2] px-6 py-2 rounded-sm text-white text-md font-bold">
              SIGN UP
            </button>
          </div>
        </form>
        <div className="flex items-center w-3/4 my-6 pl-10 pr-10">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-white">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center">
          Already a user ? <span className="font-bold">Login Now</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
