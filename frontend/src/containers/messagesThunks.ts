import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi.ts';
import {Message, MessageMutation} from '../types';

export const fetchMessages = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const messagesResponse = await axiosApi.get<Message[] | null>('/messages');
    const messages =  messagesResponse.data;

    if (!messages) {
      return [];
    }
    return messages;
  });

export const createMessage = createAsyncThunk<void, MessageMutation>(
  'messages/create',
  async (messageMutation) => {
    const formData = new FormData();
    const keys = Object.keys(messageMutation) as (keyof MessageMutation)[];
    keys.forEach(key => {
      const value = messageMutation[key];

      if (value !== null) {
        formData.append(key, value);
      }
    });
    await axiosApi.post('/messages', formData);
  }
);