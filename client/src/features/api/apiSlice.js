import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["LifeStyle", "SingleLifeStyle"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050/" }),
  endpoints: (builder) => ({}),
});
