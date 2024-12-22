import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiShootingStarFill } from "react-icons/pi";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
function HomeTabs({ heading, description }) {
  return (
    <div className="border border-gray-100 rounded-xl p-5 py-7 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-lg lg:text-2xl font-bold ">
          {heading <= 9 ? "0" + heading : heading}
        </h1>
        <div
          className={`size-10  rounded-full flex justify-center items-center ${
            description === "Sick Leave"
              ? "bg-red-50"
              : description === "Casual Leave"
              ? "bg-emerald-50"
              : description === "Earned Leave"
              ? "bg-amber-50"
              : description === "Total Leave"
              ? "bg-indigo-50"
              : ""
          }`}
        >
          {description === "Sick Leave" ? (
            <FaHandHoldingHeart className="text-lg text-red-500" />
          ) : description === "Casual Leave" ? (
            <BiSolidPlaneAlt className="text-lg text-emerald-500" />
          ) : description === "Earned Leave" ? (
            <PiShootingStarFill className="text-xl text-amber-500" />
          ) : description === "Total Leave" ? (
            <BsFillBookmarkPlusFill className="text-base text-indigo-500" />
          ) : (
            ""
          )}
        </div>
      </div>
      <p className="text-sm font-normal text-black/50 mt-1">{description}</p>
    </div>
  );
}

export default HomeTabs;
