import { Scene } from "renderer";
import { OrbitControls, Grid } from "renderer";

interface LevelProps {
  cameraType?: string;
  cameraActive: boolean;
  gridActive: boolean;
}

const CameraType: React.FC<{ cameraType?: string }> = ({ cameraType }) => {
  if (cameraType === "Orbit") {
    return <OrbitControls />;
  } else return <OrbitControls />;
};

const Level: React.FC<LevelProps> = ({
  cameraType,
  cameraActive = true,
  gridActive = false,
}) => {
  return (
    <>
      <Scene>
        {gridActive ? <Grid size={{ x: 10, y: 20 }} color="red" /> : <></>}
        {cameraActive ? <CameraType cameraType={cameraType} /> : <></>}
      </Scene>
    </>
  );
};

export default Level;
