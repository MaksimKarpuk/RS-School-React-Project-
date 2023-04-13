import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const personsAPI = createApi({
  reducerPath: 'personsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api',
  }),
  endpoints: (build) => ({
    fetchAllPersons: build.query({
      query: (search) => ({
        url: '/people',
        params: {
          search,
        },
      }),
    }),
  }),
});

export default personsAPI;
