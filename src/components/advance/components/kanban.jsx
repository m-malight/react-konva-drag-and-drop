import React, { useState } from "react";
import SingleKanban from "./single-kanban";

export default function Kanban() {
  return (
    <div className="grid grid-cols-4 p-2 mt-3 h-[78vh]">
      <SingleKanban />
      <SingleKanban />
      <SingleKanban />
      <SingleKanban />
    </div>
  );
}
