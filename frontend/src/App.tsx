import MessageForm from './components/Form/MessageForm.tsx';
import Messages from './components/Messages.tsx';
import {Grid, Typography} from '@mui/material';


function App() {

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h4">Messages</Typography>
      </Grid>
      <Grid item>
        <MessageForm/>
      </Grid>
      <Grid item container spacing={1}>
        <Messages/>
      </Grid>
    </Grid>
  )
}

export default App
