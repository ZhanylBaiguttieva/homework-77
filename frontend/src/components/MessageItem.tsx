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

  if(image){
    image  = apiURL + '/' + image;
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card>
        <CardHeader title={title}/>
        <ImageCardMedia image={image} title={title} />
        <CardContent>
          <strong>
            {author}
          </strong>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default MessageItem;