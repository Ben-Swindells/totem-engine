import { configureStore, Store } from "@reduxjs/toolkit";

//Slices
import gizmoReducer from "../components/GizmoBar/gizmoSlice";

export const store:Store = configureStore({
  reducer: {
    gizmos: gizmoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>