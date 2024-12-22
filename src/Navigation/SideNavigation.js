import React, { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { HiMegaphone } from "react-icons/hi2";
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { HiMiniTag } from "react-icons/hi2";
import { TbLogout2 } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
function SideNavigation() {
  const [navBar, setNavBar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleNavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <div
      className={`bg-gray-100 fixed top-0 z-30  transition-all ease-in-out lg:bg-gray-100/75 lg:sticky  h-screen  text-black ${
        navBar ? "left-0" : "-left-24"
      }`}
    >
      <button
        onClick={handleNavBar}
        className="bg-black/25 size-10 shadow rounded-full absolute top-2 -right-11 flex justify-center items-center lg:hidden"
      >
        <TbChevronRight
          className={`text-3xl text-accent-500 transition-all ease-in-out duration-300 ${
            navBar ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className="flex flex-col h-full">
        <h2 className="font-bold text-accent-500 text-2xl my-3 px-5 mb-6">
          Evvo
        </h2>
        <ul className="space-y-2">
          <li
            className="px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <HiHome
              className={`text-2xl  mx-auto ${
                location.pathname == "/" ? "text-black" : "text-gray-400"
              }`}
            />
          </li>
          <li
            className="relative px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer"
            onClick={() => navigate("/notification")}
          >
            <HiMegaphone
              className={`text-2xl  mx-auto ${
                location.pathname == "/notification"
                  ? "text-black"
                  : "text-gray-400"
              }`}
            />
            <span
              className={`size-1 rounded-full  block absolute top-2 right-9  ${
                location.pathname == "/notification"
                  ? "bg-red-400"
                  : "bg-gray-400"
              }`}
            ></span>
          </li>
          <li className="px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer">
            <HiEnvelope className="text-2xl text-gray-400 mx-auto" />
          </li>
          <li className="px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer">
            <HiMiniDocumentCheck className="text-2xl text-gray-400 mx-auto" />
          </li>
          <li className="px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer">
            <HiMiniTag className="text-2xl text-gray-400 mx-auto" />
          </li>
          <li className="px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer">
            <HiMiniInformationCircle className="text-2xl text-gray-400 mx-auto" />
          </li>
        </ul>

        <ul className="mt-auto">
          <li
            className="px-5 py-4 min-h-11 capitalize hover:bg-red-100 cursor-pointer"
            onClick={logout}
          >
            <TbLogout2 className="text-2xl text-red-500 mx-auto" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavigation;
