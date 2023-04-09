import { apiSlice } from "../api/apiSlice";

export const lifeStyleSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPostLifeStyle: builder.query({
      query: () => "/lifestyle",
      providesTags: (result, error, arg) => ["LifeStyle"],
      keepUnusedDataFor: 120,
    }),
    getSingleLifeStyle: builder.query({
      query: (id) => `/lifestyle/${id}`,
      providesTags: (result, error, arg) => ["SingleLifeStyle"],
      keepUnusedDataFor: 120,
    }),
    deleteLifeStyle: builder.mutation({
      query: (id) => ({
        url: `/lifestyle/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => ["LifeStyle"],
    }),
    createLifeStyle: builder.mutation({
      query: (data) => ({
        url: `/lifestyle`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => ["LifeStyle"],
    }),
    editPost: builder.mutation({
      query: (data) => ({
        url: `/lifestyle/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => ["LifeStyle"],
      keepUnusedDataFor: 120,
    }),
  }),
});
// export hooks
export const {
  useGetPostLifeStyleQuery,
  useGetSingleLifeStyleQuery,
  useDeleteLifeStyleMutation,
  useCreateLifeStyleMutation,
  useEditPostMutation,
} = apiSlice;
