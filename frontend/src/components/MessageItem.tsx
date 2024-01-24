import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, styled} from '@mui/material';
import {apiURL} from '../constants.ts';

const ImageCardMedia = styled(CardMedia) ({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  author: string | null;
  title: string
  image: string | null;
}

const MessageItem: React.FC<Props> = ({author,title, image}) => {
  const cardAuthor = author || 'Anonymous';
  const cardImage = apiURL + '/' + image || '';

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card sx={{height: '100%'}}>
        <ImageCardMedia image={cardImage} title={title} />
        <CardHeader title={cardAuthor} />
        <CardContent>
          <strong>
              posted: "{title}"
          </strong>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default MessageItem;