import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface gizmoProps {
  grid: boolean;
  camera: boolean;
}

const initialState: gizmoProps = {
  grid: false,
  camera: true,
};

const gizmoSlice = createSlice({
  name: "gizmos",
  initialState,
  reducers: {
    toggleGrid: (state, action: PayloadAction<boolean>) => {
      state.grid = !action.payload;
    },
    toggleCamera: (state, action: PayloadAction<boolean>) => {
      state.camera = !action.payload;
    },
  },
});

export const selectGrid = (state: RootState) => state.gizmos.grid;
export const selectCamera = (state: RootState) => state.gizmos.camera;

export const { toggleGrid, toggleCamera } = gizmoSlice.actions;

export default gizmoSlice.reducer;
