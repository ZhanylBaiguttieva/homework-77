import MessageForm from './components/Form/MessageForm.tsx';
import Messages from './components/Messages.tsx';
import {Grid, Typography} from '@mui/material';
import {useAppDispatch} from "./app/hooks.ts";
import {MessageMutation} from "./types";
import {createMessage} from "./containers/messagesThunks.ts";


function App() {
  const dispatch = useAppDispatch();

  const onFormSubmit = async (messageMutation: MessageMutation) => {
    await dispatch(createMessage(messageMutation));
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">Messages</Typography>
      </Grid>
      <Grid item>
        <MessageForm onSubmit={onFormSubmit}/>
      </Grid>
      <Grid item container spacing={1}>
        <Messages/>
      </Grid>
    </Grid>
  )
}

export default App
