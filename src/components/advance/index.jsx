import React, { useState, useRef, useEffect } from "react";
import { GoGear } from "react-icons/go";
import { VscBellDot } from "react-icons/vsc";
import { CgProfile, CgUserlane } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdAdd, MdSpaceDashboard } from "react-icons/md";
import { TbLayoutBoard, TbTable } from "react-icons/tb";
import { LiaListAltSolid } from "react-icons/lia";
import { SiClickhouse } from "react-icons/si";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { LuTimer } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RiBarChart2Line } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import Kanban from "./components/kanban";
import Projects from "./components/projects";
import TeamMembers from "./components/teammembers";

export default function Index() {
  return (
    <div className="grid grid-cols-12 gap-1 h-[99vh] w-screen p-1">
      <div className="bg-white col-span-1 flex justify-center">
        <div className="flex flex-col items-center h-[95%] p-2 border-2 w-[50%] border-gray-300 mt-2 rounded-md  bg-white justify-between">
          <div className="bg-blue-600 p-2 rounded-md">
            <CgUserlane color="white" size={18} />
          </div>
          <div className="py-2 px-4">
            <GrAppsRounded color="gray" size={18} />
          </div>
          <div className="py-2 px-4 border-l-2 border-l-blue-600">
            <MdSpaceDashboard color="blue" size={18} />
          </div>
          <div className="py-2 px-4">
            <LuTimer color="gray" size={18} />
          </div>
          <div className="py-2 px-4">
            <SlCalender color="gray" size={18} />
          </div>
          <div className="py-2 px-4">
            <RiBarChart2Line color="gray" size={18} />
          </div>
          <div className="py-2 px-4">
            <IoChatbubblesOutline color="gray" size={18} />
          </div>
          <div className="py-2 px-4">
            <GoQuestion color="gray" size={18} />
          </div>
          <div className="py-2 px-4">
            <IoExitOutline color="gray" size={18} />
          </div>
        </div>
      </div>
      <div className="bg-white grid grid-rows-12 col-span-2">
        {/* Platforms */}
        <div className="h-[30vh] row-span-4">
          <h2 className="font-bold pl-1 text-gray-800 mb-1">Projects</h2>
          <div className="h-[87%] overflow-y-scroll">
            <Projects
              name={"Piper Enterprise"}
              bg_color={"blue"}
              color={"white"}
            />
            <Projects
              name={"Web Platform"}
              bg_color={"white"}
              color={"gray"}
              border_color={"gray"}
            />
            <Projects
              name={"Mobile Loop"}
              bg_color={"white"}
              color={"gray"}
              border_color={"gray"}
            />
            <Projects
              name={"Wiro Mobile App"}
              bg_color={"white"}
              color={"gray"}
              border_color={"gray"}
            />
          </div>
        </div>
        {/* Team members */}
        <div className="h-[40vh] row-span-5">
          <h2 className="font-bold pl-1 text-gray-800">Team members</h2>
          <div className="h-[87%] overflow-y-scroll">
            <TeamMembers name={"Koren Smith"} online={true} time={"08:43:23"} />
            <TeamMembers
              name={"Steve Mcconell"}
              online={false}
              time={"04:43:23"}
            />
            <TeamMembers
              name={"Sarah Green"}
              online={false}
              time={"04:43:23"}
            />
            <TeamMembers name={"Bred Smith"} online={true} time={"08:43:23"} />
            <TeamMembers
              name={"Alice Cornell"}
              online={true}
              time={"08:43:23"}
            />
          </div>
        </div>
        {/* Time */}
        <div className="p-1 row-span-3">
          <h2 className="font-bold text-gray-800">Time</h2>
          <div className="border-2 p-1 rounded-md border-gray-300">
            <h2 className="text-gray-300 font-bold">TOTAL HOURS</h2>
            <h2 className="font-bold">23.7 hours</h2>
            <div className="text-gray-300 flex items-center font-bold text-xs">
              <HiMiniArrowTrendingUp color="green" size={20} className="mr-1" />
              <span className="text-green-400 mr-1">2.5%</span>from last week
            </div>
          </div>
          <div className="flex items-center border-2 border-blue-300 border-dashed rounded-md justify-center mt-2 p-2 mx-1">
            <MdAdd color="blue" />
            <h2 className="text-blue-700 font-bold text-xs">Add Member</h2>
          </div>
        </div>
      </div>
      {/* Kanban */}
      <div className="grid grid-rows-11 col-span-9 h-[inherit]">
        <div className="row-span-2">
          {/*First Layer */}
          <div className="flex justify-between bg-white">
            <div className="flex bg-gray-200 rounded-md ml-2 pl-2 mt-1 mb-1 items-center">
              <CiSearch />
              <input type="search" className="p-1 outline-none bg-gray-200" />
            </div>
            <div className="flex items-center px-1">
              <GoGear color="gray" className="mr-2" size={18} />
              <VscBellDot color="red" className="mr-2" size={18} />
              <CgProfile color="gray" className="mr-2" size={18} />
              <h2 className="font-bold">solisoma</h2>
            </div>
          </div>
          <div className="bg-white mt-1">
            {/*Second Layer */}
            <div className="flex justify-between">
              <div className="flex bg-white rounded-md ml-2  mt-1 items-center">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <SiClickhouse size={20} />
                </div>
                <div>
                  <h2 className="text-gray-600 font-bold ml-3">
                    Piper Enterprise
                  </h2>
                  <div className="p-1 w-[20vw] border-b-4 border-blue-800 ml-3"></div>
                </div>
                <h2 className="text-gray-400 ml-4 font-bold text-xs">
                  100% complete
                </h2>
              </div>
              <div className="flex items-center px-1">
                <CgProfile color="gray" className="mr-2" size={18} />
                <div className="bg-blue-800 flex items-center rounded-md justify-center p-1.5 mr-2">
                  <MdAdd color="white" />
                  <h2 className="text-white font-bold text-xs">Add Member</h2>
                </div>
              </div>
            </div>
            {/*Third Layer */}
            <div className="flex justify-between mt-4">
              <div className="flex bg-white rounded-md px-1.5 mt-1 items-center">
                <h2 className="font-bold mr-8 px-2 py-1.5">Overview</h2>
                <h2 className="font-bold mr-8 border-b-2 px-2 py-1.5 border-blue-200">
                  Tasks
                </h2>
                <h2 className="font-bold mr-8 px-2 py-1.5">Notes</h2>
                <h2 className="font-bold mr-8 px-2 py-1.5">Questions</h2>
              </div>
              <div className="flex items-center px-1">
                <div className="flex items-center mr-4 font-bold py-1 px-2 rounded-md bg-blue-200">
                  <TbLayoutBoard color="blue" size={20} />
                  <span className="text-blue-600 ml-1">Board</span>
                </div>
                <div className="flex items-center mr-4 font-bold py-1 px-2">
                  <TbTable color="gray" size={18} />
                  <span className="text-gray-600 ml-1">Table</span>
                </div>
                <div className="flex items-center mr-4 font-bold py-1 px-2">
                  <LiaListAltSolid color="gray" size={18} />
                  <span className="text-gray-600 ml-1">List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Kanban />
      </div>
    </div>
  );
}
