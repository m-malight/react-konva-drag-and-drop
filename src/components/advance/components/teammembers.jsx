import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export default function TeamMembers({ name, online, time }) {
  return (
    <div className="border-2 border-gray-200 flex justify-between items-center rounded-md py-1 px-2 mx-2 mt-1">
      <div className="flex items-center">
        <CgProfile color="gray" className="mr-2" size={18} />
        <div>
          <h2 className="text-gray-600 font-bold">{name}</h2>
          <div className="flex items-center">
            <GoDotFill size={10} color={online ? "green" : "orange"} />
            <span className="text-gray-800 font-bold text-xs">
              online - {time}
            </span>
          </div>
        </div>
      </div>
      <IoIosArrowDown color="gray" size={20} />
    </div>
  );
}
