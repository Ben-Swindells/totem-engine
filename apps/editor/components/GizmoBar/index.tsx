import { useSelector, useDispatch } from "react-redux";
import { selectGrid, toggleGrid } from "./gizmoSlice";

export const GizmoBar = () => {
  const grid = useSelector(selectGrid);
  const dispatch = useDispatch();
  return (
    <div className=" h-fit-content w-fit-content relative">
      <div className="absolute z-middle top-[5px] right-[5px] bg-dark-window rounded-sm">
        <button
          className="text-dark-window-text p-window"
          onClick={() => dispatch(toggleGrid(grid))}
        >
          Grid
        </button>
      </div>
    </div>
  );
};
