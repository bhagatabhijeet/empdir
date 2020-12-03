import React from "react";
import { Typography, Grid, Switch,Divider,Box } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#dff3fc",
  },
  footerGrid: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const SettingsBar = (props) => {
  const classes = useStyles();
  return (
    <>
      <hr style={{ margin: 0 }} />
      <Grid
        container
        direction="column"        
        className={classes.footerGrid}
      >
        <Grid item>
          <SettingsIcon /> Settings Bar
        </Grid>
      </Grid>      
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.footerGrid}
      >
        <Box lg={4} textAlign="center">
          Theme
          <Box mb={3}>
            Dark
            <Switch
              checked={props.checked}
              onChange={props.toggleThemeHandler}
              name="mycheckbox"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Light
          </Box>        
        </Box>
        <Divider orientation="vertical" flexItem className={classes.divider} />

        <Box lg={4} textAlign="center">
          Layout
          <Box mb={3}>
            Card
            <Switch
              checked={props.layoutChecked}
              onChange={props.toggleLayoutHandler}
              name="mycheckbox2"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            Grid
          </Box>        
        </Box>
        <Divider orientation="vertical" flexItem className={classes.divider} />

        <Box lg={4} textAlign="center">
          Filter(s)
          <Box mb={3} style={{display:'flex',flexDirection:'column'}}>
            <input type="text" placeholder="Username | Firstname | Lastname | email" 
            onChange={props.filterHandler}/>
            <Typography variant='caption' style={{color:'yellowgreen'}}>
              <HelpIcon style={{fontSize:'15px'}}/>filters for any match of username, firstname, lastname or email
            </Typography>
          </Box>        
        </Box>
        <Divider orientation="vertical" flexItem className={classes.divider} />
      </Grid>      
    </>
  );
};

// Using Theme Provider to pass down the theme
export default function ThemedSettingsBar(props) {
  return (
    <ThemeProvider theme={props.theme}>      
      <SettingsBar {...props} />
    </ThemeProvider>
  );
}
