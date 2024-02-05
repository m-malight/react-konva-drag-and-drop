import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import Task from "./task";

export default function SingleKanban({ name, size, color }) {
  return (
    <div className="h-[76vh] p-1.5 mt-2">
      {/* Top Layer*/}
      <div className="flex justify-between items-center">
        <div className="flex relative items-center">
          <GoDotFill color={color || "orange"} />
          <h2 className="font-bold ml-0.5">{name || "To Do"}</h2>
          <div className="bg-white ml-4 w-6 text-center rounded-full font-bold">
            {size || 3}
          </div>
        </div>
        <BsThreeDotsVertical />
      </div>
      {/* Second Layer */}
      <div className="bg-white flex items-center rounded-md justify-center p-1 mt-4">
        <MdAdd color="blue" />
        <h2 className="text-blue-600 font-bold">Add New Task</h2>
      </div>
      {/*Last layer */}
      <div className="h-[85%] overflow-y-scroll">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
