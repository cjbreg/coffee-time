import React from "react";
import Card from "./layout/Card";
import { MotiPressable } from "moti/interactions";

const PressableCard = (props: { children: JSX.Element | JSX.Element[] }) => {
  const { children } = props;
  return (
    <MotiPressable
      animate={({ hovered, pressed }) => {
        "worklet";
        return {
          opacity: pressed ? 0.7 : hovered ? 0.8 : 1,
          scale: pressed ? 0.97 : 1,
        };
      }}
    >
      <Card>{children}</Card>
    </MotiPressable>
  );
};

export default PressableCard;
