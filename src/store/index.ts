import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: { todoSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
