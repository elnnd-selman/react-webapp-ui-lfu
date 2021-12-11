import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import { dataAlumni } from '../../../data-Alumni'
import './m.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#192F59",
    marginTop:20
 
  },
  gridList: {
    backgroundColor: "#192F59",
    width: 1500,
   
  },
  gridListItem: {
    backgroundColor: "#192F59",
    height: 200


  }
}));


export default function ImageGridList() {
  const classes = useStyles();
  console.log(dataAlumni);
  const num = Math.floor(Math.random() * 2) + 1;
  console.log(num);

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={2}>
        {dataAlumni.map((tile) => (
          <GridListTile className={classes.gridListItem} key={tile.id} cols={tile.cols || 1} rows={tile.rows}>
            <img className='imglist' src={tile.src} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}