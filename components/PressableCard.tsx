import React from "react";
import Card from "./layout/Card";
import { MotiPressable, MotiPressableProps } from "moti/interactions";

interface IPressableCard extends MotiPressableProps {}

const PressableCard = (props: IPressableCard) => {
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
      {...props}
    >
      <Card>{children}</Card>
    </MotiPressable>
  );
};

export default PressableCard;
