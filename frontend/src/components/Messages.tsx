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
    <Grid item container direction="row" spacing={1}>
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