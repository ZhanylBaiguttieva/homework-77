import {Message} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store.ts';
import {fetchMessages} from './messagesThunks.ts';

interface MessagesState {
  items: Message[];
  fetchLoading: boolean;
}

const initialState: MessagesState = {
  items: [],
  fetchLoading: false,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.fetchLoading = true;
    });

    builder.addCase(fetchMessages.fulfilled, (state, {payload: items}) => {
      state.fetchLoading = false;
      state.items = items;
    });

    builder.addCase(fetchMessages.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const messagesReducer = messagesSlice.reducer;

export const selectMessages = (state: RootState) => state.messages.items;

export const selectFetchMessageLoading = (state: RootState) => state.messages.fetchLoading;