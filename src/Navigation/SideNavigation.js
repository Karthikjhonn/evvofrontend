import React from "react";
import { HiHome } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { HiMegaphone } from "react-icons/hi2";
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { HiMiniTag } from "react-icons/hi2";
import { TbLogout2 } from "react-icons/tb";
import { useAuth } from "../context/AuthContext";
function SideNavigation() {
  const { logout } = useAuth();
  return (
    <div className="w-   bg-gray-100/75 text-black">
      <div className="flex flex-col min-h-screen sticky top-0">
        <h2 className="font-bold text-accent-500 text-2xl my-3 px-5 mb-6">
          Evvo
        </h2>
        <ul className="space-y-2">
          <li className="px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer">
            <HiHome className="text-2xl mx-auto" />
          </li>
          <li className="px-5 py-2 min-h-11 capitalize hover:bg-gray-200 cursor-pointer">
            <HiMegaphone className="text-2xl text-gray-400 mx-auto" />
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
