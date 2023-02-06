// Scene window
import Level from "../components/Level";
import { GizmoBar } from "../components/GizmoBar";
//

import { Inspector, Hierarchy, Assets } from "../components/windows";
import Toolbar from "../components/Toolbar";

//Slices
import { useSelector, useDispatch } from "react-redux";
import { selectGrid, selectCamera } from "../components/GizmoBar/gizmoSlice";

//Gizmos

const SceneWindow = () => {
  const camera = useSelector(selectCamera);
  const grid = useSelector(selectGrid);
  return (
    <>
      <GizmoBar />
      <Level cameraActive={camera} gridActive={grid} />
    </>
  );
};

export default function Editor() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="w-full">
          <Toolbar />
        </div>
        <div className="flex h-screen flex-row">
          <div className="w-3/12 h-full">
            <Hierarchy />
          </div>
          <div className="w-8/12 h-full flex flex-col">
            <div className="h-4/6">
              <SceneWindow />
            </div>
            <div className="h-2/6">
              <Assets />
            </div>
          </div>
          <div className="w-3/12 h-full">
            <Inspector />
          </div>
        </div>
      </div>
    </>
  );
}
