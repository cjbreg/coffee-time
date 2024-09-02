// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Machine } from "./types";

// Define a service using a base URL and expected endpoints
export const machineApi = createApi({
  reducerPath: "machineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://darkroastedbeans.coffeeit.nl/",
  }),
  endpoints: (builder) => ({
    getMachineById: builder.query<Machine, string>({
      query: (id) => `coffee-machine/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMachineByIdQuery } = machineApi;
