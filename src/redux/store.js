import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from './services/pokemon';
import { contactsApi } from './contacts/contactsSlice';

export const store = configureStore({
    reducer: {

        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        pokemonApi.middleware,
        contactsApi.middleware,
    ],
})


setupListeners(store.dispatch)