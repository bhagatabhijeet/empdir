import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
// Icons
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import EmailIcon from "@material-ui/icons/Email";
import ModalDialog from "./ModalDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 270,
    display: "inline-block",
    backgroundColor: theme.palette.secondary.dark,
    margin: 10,
    color: theme.palette.text.primary,
  },
  title: {
    fontWeight: 700,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: theme.status.danger,
  },
  icons: {
    color: theme.status.danger,
    fontSize: 15,
  },
}));

// The name Flipcard is to indicate that in future we want to add flip transition animation to the card
function FlipCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // Event handler for close dialog
  const onClickHandler = (event) => {
    setOpen(true);
  };

  // Event handler for dialog to open
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
          title={<span className={classes.title}>{props.title}</span>}
          subheader={props.country}
        />
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.data.name.first + " " + props.data.name.last}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textAlign: "left", marginBottom: "5px" }}
          >
            <EmailIcon className={classes.icons} />
            <a
              style={{ color: "#0d0e29", margin: "5px" }}
              href={`mailto:${props.data.email}`}
            >{`${props.data.email}`}</a>
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            component="p"
            style={{ textAlign: "left", marginTop: "5px" }}
          >
            <PhoneAndroidIcon className={classes.icons} />
            <ArrowRightIcon className={classes.icons} /> {` ${props.data.cell}`}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            component="p"
            style={{ textAlign: "left" }}
          >
            <PhoneIcon className={classes.icons} />
            <ArrowRightIcon className={classes.icons} />
            {` ${props.data.phone}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            size="small"
            onClick={onClickHandler}
            style={{ marginLeft: "auto" }}
          >
            More <AddCircleIcon />
          </Button>
        </CardActions>
      </Card>
      {open ? (
        <ModalDialog open={open} handleClose={handleClose} data={props.data} />
      ) : null}
    </>
  );
}

// ThemeProvider Wrapped FlipCard
export default function CustomFlipCard(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <FlipCard {...props} />
    </ThemeProvider>
  );
}
