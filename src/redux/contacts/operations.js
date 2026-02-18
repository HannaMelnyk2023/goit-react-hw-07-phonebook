import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6991f4df8f29113acd3cdbe2.mockapi.io/api/contacts/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { thunkAPI }) => {
        try {
            const { data } = await axios.get('contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async (contact, { thunkAPI }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
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