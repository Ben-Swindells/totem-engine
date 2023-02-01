import { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "./cameras";

const Box = () => {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <mesh
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const Scene = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
};
