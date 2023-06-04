import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { coffesApi } from "./coffesApi";

export const store = configureStore({
  reducer: {
    [coffesApi.reducerPath]: coffesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(coffesApi.middleware);
  },
});

setupListeners(store.dispatch);
export { useFetchCoffesQuery } from "./coffesApi";
