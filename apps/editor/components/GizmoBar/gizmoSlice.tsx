import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

interface gizmoProps {
  grid: boolean;
}

const initialState: gizmoProps = {
  grid: false,
};

const gizmoSlice = createSlice({
  name: "gizmos",
  initialState,
  reducers: {
    toggleGrid: (state, action: PayloadAction<boolean>) => {
      state.grid = !action.payload;
    },
  },
});

export const selectGrid = (state: RootState) => state.gizmos.grid;

export const { toggleGrid } = gizmoSlice.actions;

export default gizmoSlice.reducer;
