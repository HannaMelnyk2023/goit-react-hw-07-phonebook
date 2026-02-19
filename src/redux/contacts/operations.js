import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://699734ab7d1786436576a262.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { thunkAPI }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { thunkAPI }) => {
        try {
            const { data } = await axios.post('/contacts', newContact);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { thunkAPI }) => {
        try {
            await axios.delete(`/contacts/${contactId}`);
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
