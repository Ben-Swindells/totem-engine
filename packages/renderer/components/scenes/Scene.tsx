import { Canvas } from "@react-three/fiber";

//Primitive objects
import { Box } from "../primitive-objects";

interface SceneProps {
  children: React.ReactNode;
}

export const Scene: React.FC<SceneProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight />
        <Box color="pink" />
        {children}
      </Canvas>
    </div>
  );
};
