import React from "react";
import { Typography, Grid, Divider, Box, Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#dff3fc",
  },
  footerGrid: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      className={classes.footerGrid}
    >
      <Box lg={4} textAlign="center">
        <Box mb={3}>
          <Link
            href="https://github.com/bhagatabhijeet/empdir"
            color="inherit"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </Box>
        <Box mb={3}>
          <Typography variant="caption">MIT License</Typography>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <Box lg={4} textAlign="center">
        <Box mb={3}>
          <Typography variant="caption" display="block">
            About
          </Typography>
          <Typography variant="caption">
            EmpDir is simple Employee search Application developed using React,
            Mongo, Express
          </Typography>
        </Box>
        <Divider />
        <Typography variant="caption">
          Data Courtesy :{" "}
          <Link href="https://randomuser.me/" color="inherit" target="_blank">
            randomuser.me/
          </Link>
        </Typography>
        <Box mb={3}>
          <Typography variant="caption">
            &copy; EmpDir - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <Box lg={4} textAlign="center">
        <Box mb={3}>
          <Typography variant="caption" display="block">
            Developed By
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/bhagatabhijeet"
              color="inherit"
              target="_blank"
            >
              Abhijeet Bhagat
            </Link>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

// Wrap Footer in ThemeProvider
export default function CustomFooter(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <Footer {...props} />
    </ThemeProvider>
  );
}
