import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from './comp/gridlist'
import './Alumni.css'
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 1
    },
    paper1: {
        backgroundColor: "transparent",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 500
    },
    paper: {
        backgroundColor: "transparent",
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
       
    },
    btn:{
        fontSize:30,
        padding:20,
        color:'white'
    }
}));

function Alumni() {
    const classes = useStyles();
    return (
        <>
            <div className="alumni">
                <div className="alumni-part1">
                    <Grid container spacing={3} className={classes.root}>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={0}  className={classes.paper1}>
                                <h1 className='title'>Alumni</h1>
                                <br />
                                <p className='paragraph'>Lorem ipsum dolor sit amet consect
                                tur adipisicing elit. Nemo aspernatur reprehenderit bletur adipisicing elit. Nemo s
                                apiente nisi quia aspernatur reprebletur adipisicing elit. Nemo sapiente nisi quia aspernatu
                                r reprehenderit bletur adipisicing elit.  sapiente nisi quia aspernatur reprehenderit bletur
                                adipisicing elit. Nemo sapiente ni reprehenderit bletur adipisicing elit. Nemo sapiente ni
                                si quia aspernatur reprehenderit blanditiis,  cum recusandae totam hic, dolorem quibusdam
                                
                             </p>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={0}  className={classes.paper1}>
                            <div className="imgd">
                                <img className="imgg" src="https://knu.edu.iq/news/images/296846843.JPG" alt=""/>
                            </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={0}  className={classes.paper}>
                              <Button variant="contained" color="primary" disableElevation className={classes.btn}>
                                   JOIN WITH US
                              </Button>
                            </Paper>
                        </Grid>
            

                    </Grid>
                   
                </div>
                <hr />
                <div className="alumni-part2">  <GridList /></div>

            </div>


        </>
    )
}

export default Alumni
