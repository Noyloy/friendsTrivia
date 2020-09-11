import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import QuestionOptions from './QuestionOptions';
import Typography from '@material-ui/core/Typography';
import {environment as env} from '../../../environments/environment.prod';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth: 400
  },
});

export default function Question({QTitle, QContent, QOpts, QCover}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="friendsQuestionCover"
          height="300"
          image={!!QCover? QCover : env.constants.question.image}
          title="friendsQuestionCover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {QContent}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {QTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <QuestionOptions QOpts={QOpts}/>
    </Card>
  );
}