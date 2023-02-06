import { useSelector, useDispatch } from "react-redux";
import {
  selectGrid,
  toggleGrid,
  toggleCamera,
  selectCamera,
} from "./gizmoSlice";

export const GizmoBar = () => {
  const grid = useSelector(selectGrid);
  const camera = useSelector(selectCamera);

  const dispatch = useDispatch();

  return (
    <div className=" h-fit-content w-fit-content relative">
      <div className="absolute z-middle top-[5px] right-[5px]  rounded-sm">
        <button
          className={`text-dark-window-text p-window mr-1 ${
            grid ? "bg-gray-700" : "bg-dark-window"
          }`}
          onClick={() => dispatch(toggleGrid(grid))}
        >
          Grid
        </button>
        <button
          className={`text-dark-window-text p-window ${
            camera ? "bg-gray-700" : "bg-dark-window"
          }`}
          onClick={() => dispatch(toggleCamera(camera))}
        >
          Camera
        </button>
      </div>
    </div>
  );
};
