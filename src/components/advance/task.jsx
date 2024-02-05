import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaListAltSolid } from "react-icons/lia";
import { TiEyeOutline } from "react-icons/ti";
import { BiMessageAltDots } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";

export default function Task({ task_name }) {
  return (
    <div className="bg-white h-[31vh] mt-2 rounded-md p-2">
      {/* First Layer */}
      <div className="flex items-center justify-between">
        <h2 className="bg-orange-200 text-center font-bold rounded-full py-0.5 px-1.5 text-orange-500 text-xs">
          {task_name || "UX stages"}
        </h2>
        <BsThreeDotsVertical />
      </div>
      {/* Second Layer */}
      <div className="mt-2">
        <h2 className="font-bold">WireFraming</h2>
        <p className="text-gray-600 text-xs">
          Create low-fidelity designs that outline the basic structureand layout
          of the product or service....
        </p>
        <div className="flex items-center border-2 border-gray-300 rounded-md p-0.5 mt-2 w-[35%] font-bold">
          <LiaListAltSolid color="gray" />
          <span className="pl-2 text-gray-600">{"0/8"}</span>
        </div>
      </div>
      {/* Last Layer */}
      <div className="flex border-t-2 mt-3 justify-end border-gray-300">
        <div className="flex items-center mt-0.5 font-bold p-1">
          <TiEyeOutline color="gray" />
          <span className="text-gray-600">{"2"}</span>
        </div>
        <div className="flex items-center mt-0.5 font-bold p-1">
          <BiMessageAltDots color="gray" />
          <span className="text-gray-600">{"0"}</span>
        </div>
        <div className="flex items-center mt-0.5 font-bold p-1">
          <GrAttachment color="gray" />
          <span className="text-gray-600">{"0"}</span>
        </div>
      </div>
    </div>
  );
}
