import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls as OrbitController } from "three/examples/jsm/controls/OrbitControls";

export const OrbitControls = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitController(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
