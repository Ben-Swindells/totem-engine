import { Canvas } from "@react-three/fiber";

//Cameras
import { OrbitControls } from "../cameras";

//Primitive objects
import { Box } from "../primitive-objects";

export const Scene = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Box color="pink" />
      </Canvas>
    </div>
  );
};
