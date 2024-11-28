import React from "react";
import { GoArrowUpRight } from "react-icons/go";
function HomeTabs({ heading, description }) {
  return (
    <div className="border border-gray-100 rounded-xl p-5 py-7 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-lg lg:text-2xl font-bold ">
          {heading <= 9 ? "0" + heading : heading}
        </h1>
        <div className="size-10 bg-green-50 rounded-full flex justify-center items-center">
          <GoArrowUpRight className="text-lg text-green-500" />
        </div>
      </div>
      <p className="text-sm font-normal text-black/50 mt-1">{description}</p>
    </div>
  );
}

export default HomeTabs;
