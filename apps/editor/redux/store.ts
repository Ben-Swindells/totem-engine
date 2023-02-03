import { configureStore } from "@reduxjs/toolkit";

//Slices
import gizmoReducer from "../components/GizmoBar/gizmoSlice";

export const store = configureStore({
  reducer: {
    gizmos: gizmoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>