import {useAppDispatch, useAppSelector} from '../app/hooks.ts';
import {selectMessages} from '../containers/messagesSlice.ts';
import {useEffect} from 'react';
import {fetchMessages} from '../containers/messagesThunks.ts';
import {Grid} from '@mui/material';
import MessageItem from './MessageItem.tsx';


const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {messages.map(message => (
        <MessageItem
          key={message.id}
          author={message.author}
          title={message.title}
          image={message.image}
        />
      ))}
    </Grid>
  );
};

export default Messages;