import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '99%',
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    border: '#192F59 solid 10px'
  },
  tab: {
    backgroundColor: '#192F59',
    display: 'flex',
    justifyContent: 'space-between',
  }
  , tabsItem: {
    fontSize: 21,
    marginLeft: 30,
    marginRight: 30,
    color: 'white'

  },
  icon: {
    fontSize: 50,
    color: 'white'


  },
  indicator: {
    backgroundColor: 'white',
    color: 'white',
  },
  colortab: {
    color: 'white'
  },
  grid: {
    padding: 30.

  },
  gridItem: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TabPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Tabs
          className={classes.tab}
          value={value}
          onChange={handleChange}
          classes={{
            indicator: classes.indicator,
            textColor: classes.colortab,
          }}

          aria-label="scrollable force tabs example"
          centered
        >
          <Tab className={classes.tabsItem} label="Youtube" icon={<YouTubeIcon className={classes.icon} />} {...a11yProps(0)} />
          <Tab className={classes.tabsItem} label="instagram" icon={<InstagramIcon className={classes.icon} />} {...a11yProps(1)} />
          <Tab className={classes.tabsItem} label="Facebook" icon={<FacebookIcon className={classes.icon} />} {...a11yProps(2)} />
          <Tab className={classes.tabsItem} label="LinkedIn" icon={<LinkedInIcon className={classes.icon} />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.TabPanel} value={value} index={0}>

        <Grid className={classes.grid} container spacing={3}>
          <Grid className={classes.gridItem} item xs={6}>
            <ReactPlayer width={700} height={400} controls url='https://youtu.be/Ug-O_E_1Wg8' />
          </Grid>
          <Grid className={classes.gridItem} item xs={6}>
            <ReactPlayer width={700} height={400} controls url='https://youtu.be/ZJE32Gr1d1c' />
          </Grid>
          <Grid className={classes.gridItem} item xs={6}>
            <ReactPlayer width={700} height={400} controls url='https://youtu.be/v2tsP5ZH3S0' />
          </Grid>
          <Grid className={classes.gridItem} item xs={6}>
            <ReactPlayer width={700} height={400} controls url='https://youtu.be/UxSeOsqW150' />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>

        <Grid className={classes.gridcard} container spacing={3}>
          <Grid className={classes.gridItemcard} item xs={6}>

            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    LFU
                  </Avatar>
                }
                title="Shrimp and Chorizo Paella"
          
              />
              <CardMedia
                className={classes.media}
                image="../../../../../images/1.png"
                title="Paella dish"
              />
              <CardContent>
                <Typography className={classes.typocard} variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
              </CardContent>


            </Card>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>

        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>

        Item Four
      </TabPanel>
  
    </div>
  );
}