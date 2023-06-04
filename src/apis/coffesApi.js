import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coffesApi = createApi({
  reducerPath: "coffes",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),

  endpoints(builder) {
    return {
      fetchCoffeId: builder.query({
        query: (coffeId) => ({ url: `/coffes/${coffeId}` }),
      }),
      fetchCoffes: builder.query({
        query: () => {
          return {
            url: "/coffes",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchCoffesQuery, useFetchCoffeIdQuery } = coffesApi;
export { coffesApi };
