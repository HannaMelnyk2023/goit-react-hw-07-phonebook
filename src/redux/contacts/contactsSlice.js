import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6991f4df8f29113acd3cdbe2.mockapi.io/api/contacts/' }),
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `contacts`,
        }),
    }),
})
export const { useFetchContactsQuery } = contactsApi;