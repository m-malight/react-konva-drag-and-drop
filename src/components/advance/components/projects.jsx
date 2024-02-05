import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function Projects({ name, bg_color, border_color, color }) {
  return (
    <div
      className={`bg-${bg_color}-800 border-2 border-${border_color}-200 flex justify-between items-center rounded-md py-3 px-2 mx-2 mt-1`}
    >
      <div className="flex items-center">
        <CgProfile color={color} className="mr-2" size={18} />
        <h2 className={`text-${color} font-bold text-xs`}>{name}</h2>
      </div>
      <BsThreeDotsVertical color={color} />
    </div>
  );
}
