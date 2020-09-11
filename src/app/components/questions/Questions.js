import React from 'react';
import Question from '../question/Question';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';


const qs = [
    {
        QTitle: "\"Huh. I would've thought it was the other way around.\"",
        QContent: "Who Trigger though was the \"duck\"?",
        QOpts: {opts:["Chandler", "Joey", "Phobe", "Ross"], value:"Joey"},
        QCover: "https://y.yarn.co/51c42ac9-c7f2-436f-b3b8-38a879940edd_screenshot.jpg"
    },
    {
        QTitle: "\"I'm a doctor not a mathematician\"",
        QContent: "Which soap opera did Joey have a role on?",
        QOpts: {opts:["Days Of Our Lives", "General Hospital", "Brave and Beautiful", "All My Children"], value:"Days Of Our Lives"},
        QCover: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/friends-drake-ramoray-days-of-our-lives.jpg?q=50&fit=crop&w=960&h=500"
    },
    {
        QTitle: "\"Huh. I would've thought it was the other way around.\"",
        QContent: "Who Trigger though was the \"duck\"?",
        QOpts: {opts:["Chandler", "Joey", "Phobe", "Ross"], value:"Joey"},
        QCover: "https://y.yarn.co/51c42ac9-c7f2-436f-b3b8-38a879940edd_screenshot.jpg"
    },
    {
        QTitle: "\"Huh. I would've thought it was the other way around.\"",
        QContent: "Who Trigger though was the \"duck\"?",
        QOpts: {opts:["Chandler", "Joey", "Phobe", "Ross"], value:"Joey"},
        QCover: "https://y.yarn.co/51c42ac9-c7f2-436f-b3b8-38a879940edd_screenshot.jpg"
    }
]

export default function AutoGrid() {
  return (
    <Container>
        <Grid
            spacing={10}
            container
            direction="column"
            justify="space-around"
            alignItems="center">
            {qs.map((q,idx)=>
                <Grid key={idx} item xs>
                    <Question key={idx} {...q}/>
                </Grid>
            )}
        </Grid>
    </Container>
  );
}