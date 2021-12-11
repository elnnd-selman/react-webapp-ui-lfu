import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsSlider from './newsSlider';
import '../home.css';
const useStyles = makeStyles((theme) => ({
    root: {

   
        height: '690px',
        padding: '0 25px 40px 25px',
        overflow:'hidden'

    },
    item: {
        textAlign: 'center'
    }
}
)
);

function Gridl() {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3} className={classes.root}>
            
                <Grid item xs={3} className={classes.item}>

                    <div className="grid-title">College of Engineering and Computer Science</div>
                    <NewsSlider />

                </Grid>

                <Grid item xs={3} className={classes.item} >
                    <div className="grid-title">College of Law and International Relations</div>
                    <NewsSlider />
                </Grid>

                <Grid item xs={3} className={classes.item}>
                    <div className="grid-title">College of Education and Languages</div>
                    <NewsSlider />
                </Grid>

                <Grid item xs={3} className={classes.item}>
                    <div className="grid-title">College of Administration and Economics</div>
                    <NewsSlider />
                </Grid>


            </Grid>
        </>
    )
}

export default Gridl;