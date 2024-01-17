import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// This variable handles request header informations
const apiHeader = { 'content-type': 'application/json' };

const createRequest = (url: string) => ({ url, headers: apiHeader });

export const postApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: builder => ({
    fetchPosts: builder.query({
      query: () => createRequest('products'),
    }),
  }),
});

export const { useFetchPostsQuery } = postApi;
