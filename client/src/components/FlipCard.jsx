import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import EmailIcon from '@material-ui/icons/Email';
// import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,    
    // height:200,
    // width:100,
    width:270,
    display:"inline-block",
    backgroundColor: theme.palette.secondary.dark,
    margin:10,
    color:theme.palette.text.primary
  },
  title:{
    fontWeight:700
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.status.danger,
  },
  icons:{
   color: theme.status.danger,
   fontSize:15
  }, 
}));

function FlipCard(props) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const onClickHandler=(event)=>{
    // alert(props.country);
    setOpen(true);
    
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={<span className={classes.title}>{props.title}</span>}
        subheader={props.country}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.data.name.first + " " + props.data.name.last}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"  style={{textAlign:'left',marginBottom:"5px"}}>
         {/* {`${props.data.location.city}, ${props.data.location.state}, ${props.data.location.country}`} */}
         <EmailIcon className={classes.icons}/><a style={{color:'#0d0e29',margin:"5px"}} href={`mailto:${props.data.email}`}>{`${props.data.email}`}</a>
        </Typography>
         {/* <Divider style={{marginBottom:"5px"}}/> */}
        <Typography variant="caption" color="textSecondary" component="p" style={{textAlign:'left',marginTop:"5px"}}>
         {/* {`${props.data.location.city}, ${props.data.location.state}, ${props.data.location.country}`} */}
         <PhoneAndroidIcon className={classes.icons}/><ArrowRightIcon className={classes.icons}/> {` ${props.data.cell}`}
         
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p" style={{textAlign:'left'}}>
         {/* {`${props.data.location.city}, ${props.data.location.state}, ${props.data.location.country}`} */}
         
         <PhoneIcon className={classes.icons}/><ArrowRightIcon className={classes.icons}/>{` ${props.data.phone}`}
        </Typography>
        {/* <CardActions disableSpacing> 
        More...        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={onClickHandler} style={{marginLeft:'auto'}}>More <AddCircleIcon/></Button>
      </CardActions>
 
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           para
          </Typography>
          <Typography paragraph>
            another para
          </Typography>
          <Typography paragraph>
           third para
          </Typography>         
        </CardContent>
      </Collapse> */}
    </Card>
    {open?<ModalDialog open={open} handleClose={handleClose} data={props.data}/>:null}
    </>
  );
}

export default function CustomFlipCard(props) {
  return (
    <ThemeProvider theme={props.theme}>
      {/* {console.log(props.theme.palette.primary.main)} */}
      <FlipCard {...props}/>
    </ThemeProvider>
  );
}