import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, styled} from '@mui/material';
import {apiURL} from '../constants.ts';
import imageNotAvailable from '../assets/images/no-image-available.png';

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

  let cardImage = imageNotAvailable;

  if(image){
    cardImage = apiURL + '/' + image;
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={2}>
      <Card>
        <CardHeader title={author} />
        <CardContent>
          <strong>
          <ImageCardMedia image={cardImage} title={title} />
              Message is: {title}
          </strong>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default MessageItem;