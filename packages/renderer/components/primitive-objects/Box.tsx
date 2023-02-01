import { useState } from "react";

interface BoxProps {
  color?: string;
}

export const Box = ({ color = "black" }: BoxProps) => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
