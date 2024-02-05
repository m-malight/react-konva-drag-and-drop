import React, { useState } from "react";
import { Stage, Layer, Rect, Circle, Star, Group } from "react-konva";

export default function App({ shape, width, height, onDrag }) {
  const get_positions = [...Array(20)].map((_, inx) => ({
    id: inx.toString(),
    x: Math.random() * width,
    y: Math.random() * height,
    isdragging: false,
  }));

  const get_group_positions = (() => {
    const groups = [];
    let i = 0;
    while (i < get_positions.length - 1) {
      let child = {
        id: i.toString(),
        data: [get_positions[i], get_positions[i + 1]],
        isdragging: false,
      };
      groups.push(child);
      i += 2;
    }
    return groups;
  })();

  const [positions, setPositions] = useState(get_positions);
  const [groupPositions, setGroupPositions] = useState(get_group_positions);

  function handleDragStart(e) {
    const id = e.target.id();
    setPositions(
      positions.map((position) => ({
        ...position,
        isdragging: id === position.id ? true : false,
      }))
    );
    onDrag(true);
  }

  function handleDragEnd() {
    setPositions(
      positions.map((position) => ({
        ...position,
        isdragging: false,
      }))
    );
    onDrag(false);
  }

  function handleGroupDragStart(e) {
    const id = e.target.id();
    setGroupPositions(
      groupPositions.map((position) => ({
        ...position,
        isdragging: id === position.id ? true : false,
      }))
    );
    onDrag(true);
  }

  function handleGroupDragEnd() {
    setGroupPositions(
      groupPositions.map((position) => ({
        ...position,
        isdragging: false,
      }))
    );
    onDrag(false);
  }

  return (
    <Stage width={width} height={height}>
      <Layer>
        {shape === "Square"
          ? positions.map((position) => (
              <Rect
                key={position.id}
                id={position.id}
                x={position.x}
                y={position.y}
                width={80}
                height={80}
                shadowOffsetX={position.isdragging ? 12 : 6}
                shadowOffsetY={position.isdragging ? 12 : 6}
                scaleX={position.isdragging ? 1.2 : 1}
                scaleY={position.isdragging ? 1.2 : 1}
                draggable
                fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                fillLinearGradientEndPoint={{ x: 200, y: 0 }}
                fillLinearGradientColorStops={[
                  0,
                  `${position.isdragging ? "#56ab2f" : "red"}`,
                  1,
                  `${position.isdragging ? "#a8e063" : "red"}`,
                ]}
                shadowBlur={10}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            ))
          : shape === "Circle"
          ? positions.map((position) => (
              <Circle
                key={position.id}
                id={position.id}
                x={position.x}
                y={position.y}
                radius={position.isdragging ? 50 : 40}
                shadowOffsetX={position.isdragging ? 12 : 6}
                shadowOffsetY={position.isdragging ? 12 : 6}
                scaleX={position.isdragging ? 1.2 : 1}
                scaleY={position.isdragging ? 1.2 : 1}
                draggable
                fillRadialGradientStartPoint={{ x: 0, y: 0 }}
                fillRadialGradientStartRadius={0}
                fillRadialGradientEndPoint={{ x: 0, y: 0 }}
                fillRadialGradientEndRadius={50}
                fillRadialGradientColorStops={[
                  0,
                  "green",
                  0.5,
                  `${position.isdragging ? "red" : "green"}`,
                  1,
                  `${position.isdragging ? "blue" : "green"}`,
                ]}
                shadowBlur={10}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            ))
          : shape === "Star"
          ? positions.map((position) => (
              <Star
                key={position.id}
                id={position.id}
                x={position.x}
                y={position.y}
                innerRadius={50}
                outerRadius={30}
                shadowOffsetX={position.isdragging ? 12 : 6}
                shadowOffsetY={position.isdragging ? 12 : 6}
                scaleX={position.isdragging ? 1.2 : 1}
                scaleY={position.isdragging ? 1.2 : 1}
                draggable
                fillRadialGradientStartPoint={{ x: 0, y: 0 }}
                fillRadialGradientStartRadius={0}
                fillRadialGradientEndPoint={{ x: 0, y: 0 }}
                fillRadialGradientEndRadius={50}
                fillRadialGradientColorStops={[
                  0,
                  `${position.isdragging ? "#FF5E3A" : "yellow"}`,
                  1,
                  `${position.isdragging ? "#FF2A68" : "yellow"}`,
                ]}
                shadowBlur={10}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            ))
          : groupPositions.map((child) => (
              <Group
                id={child.id}
                key={child.id}
                draggable={true}
                onDragStart={handleGroupDragStart}
                onDragEnd={handleGroupDragEnd}
              >
                {child.data.map((position) => {
                  const view =
                    shape === "GSquare" ? (
                      <Rect
                        key={position.id}
                        id={position.id}
                        x={position.x}
                        y={position.y}
                        width={80}
                        height={80}
                        shadowOffsetX={child.isdragging ? 12 : 6}
                        shadowOffsetY={child.isdragging ? 12 : 6}
                        scaleX={child.isdragging ? 1.2 : 1}
                        scaleY={child.isdragging ? 1.2 : 1}
                        fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                        fillLinearGradientEndPoint={{ x: 200, y: 0 }}
                        fillLinearGradientColorStops={[
                          0,
                          `${child.isdragging ? "#56ab2f" : "red"}`,
                          1,
                          `${child.isdragging ? "#a8e063" : "red"}`,
                        ]}
                        shadowBlur={10}
                      />
                    ) : shape === "GCircle" ? (
                      <Circle
                        key={position.id}
                        id={position.id}
                        x={position.x}
                        y={position.y}
                        radius={child.isdragging ? 50 : 40}
                        shadowOffsetX={child.isdragging ? 12 : 6}
                        shadowOffsetY={child.isdragging ? 12 : 6}
                        scaleX={child.isdragging ? 1.2 : 1}
                        scaleY={child.isdragging ? 1.2 : 1}
                        fillRadialGradientStartPoint={{ x: 0, y: 0 }}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndPoint={{ x: 0, y: 0 }}
                        fillRadialGradientEndRadius={50}
                        fillRadialGradientColorStops={[
                          0,
                          "green",
                          0.5,
                          `${child.isdragging ? "red" : "green"}`,
                          1,
                          `${child.isdragging ? "blue" : "green"}`,
                        ]}
                        shadowBlur={10}
                      />
                    ) : (
                      <Star
                        key={position.id}
                        id={position.id}
                        x={position.x}
                        y={position.y}
                        innerRadius={50}
                        outerRadius={30}
                        shadowOffsetX={child.isdragging ? 12 : 6}
                        shadowOffsetY={child.isdragging ? 12 : 6}
                        scaleX={child.isdragging ? 1.2 : 1}
                        scaleY={child.isdragging ? 1.2 : 1}
                        fillRadialGradientStartPoint={{ x: 0, y: 0 }}
                        fillRadialGradientStartRadius={0}
                        fillRadialGradientEndPoint={{ x: 0, y: 0 }}
                        fillRadialGradientEndRadius={50}
                        fillRadialGradientColorStops={[
                          0,
                          `${child.isdragging ? "#FF5E3A" : "yellow"}`,
                          1,
                          `${child.isdragging ? "#FF2A68" : "yellow"}`,
                        ]}
                        shadowBlur={10}
                      />
                    );
                  return view;
                })}
              </Group>
            ))}
      </Layer>
    </Stage>
  );
}
