import { configureStore } from "@reduxjs/toolkit";
import tarefasReducer from "../recursos/tarefas/tarefasSlice";

export const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
