import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import {MessageMutation} from '../../types';
import FileInput from '../FileInput.tsx';

const MessageForm = () => {
  const [state, setState] = useState<MessageMutation>({
    author: '',
    title: '',
    image: null,
  });

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setState(prevState => ({
        ...prevState, [name]: files[0]
      }));
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="author" label="Author"
            value={state.author}
            onChange={inputChangeHandler}
            name="author"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="title" label="Title"
            value={state.title}
            onChange={inputChangeHandler}
            name="title"
          />
        </Grid>
        <Grid item xs>
          <FileInput
            label="Image"
            name="image"
            onChange={fileInputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">Create</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MessageForm;