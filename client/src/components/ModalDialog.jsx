import React from "react";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  table: {
    alignContent: "left",
    padding: "none",
    margin: 0,
    size: "small",
  },
  tablecell: {
    alignContent: "left",
    padding: "none",
    margin: 0,
    size: "small",
  },

  dialog:{
    backgroundColor:theme.palette.secondary.light
  },
  dialogTitle:{
    backgroundColor:theme.palette.primary.main,
    color:'#fffff2'
  },
  tablerowOdd:{
    backgroundColor:theme.tableRowsOdd,
  }

  
  
}));

function UnWrappedModalDialog(props) {
  const classes = useStyles();

  const data = props.data;
  // console.log("PROPS DATA!!!",props.data);
  // console.log("MODAL DATA!!!",data);
  // const [open, setOpen] = React.useState(props.open);
  // const [fullWidth, setFullWidth] = React.useState(true);
  // const [maxWidth, setMaxWidth] = React.useState('sm');

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleMaxWidthChange = (event) => {
  //   setMaxWidth(event.target.value);
  // };

  // const handleFullWidthChange = (event) => {
  //   setFullWidth(event.target.checked);
  // };
  //{`${data.name.first} ${data.name.last}`}
  return (
    <React.Fragment>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open max-width dialog
      </Button> */}
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={props.open}
        // onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        
      >
        <DialogTitle id="max-width-dialog-title" className={classes.dialogTitle}>{`${data.name.first} ${data.name.last}`}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText>{`Completed ${data.registered.age} years in Organization!`}</DialogContentText>
          <img
            src={data.picture.large}
            alt="user pic"
            width="200px"
            height="200px"
          />
          {/* <TableContainer component={Paper}> */}
          <Table className={classes.table} aria-label="simple table">
            {/* <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead> */}
            <TableBody>    
               <TableRow className={classes.tablerowOdd}>
                <TableCell>Username:</TableCell>
                <TableCell>{data.login.username}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Email :</TableCell>
                <TableCell>{data.email}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                <TableCell>Phone :</TableCell>
                <TableCell>{data.phone}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Cell :</TableCell>
                <TableCell>{data.cell}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                <TableCell>Street Number :</TableCell>
                <TableCell>{data.location.street.number}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Street Name :</TableCell>
                <TableCell>{data.location.street.name}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                <TableCell>City:</TableCell>
                <TableCell>{data.location.city}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>State :</TableCell>
                <TableCell>{data.location.state}</TableCell>
              </TableRow>
              <TableRow className={classes.tablerowOdd}>
                <TableCell>Country :</TableCell>
                <TableCell>{data.location.country}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Postal Code :</TableCell>
                <TableCell>{data.location.postcode}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                <TableCell>TimeZone:</TableCell>
                <TableCell>{`${data.location.timezone.offset} ${data.location.timezone.description}`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </DialogContent>
        <DialogActions className={classes.dialogTitle}>
          {/* <Button onClick={handleClose} color="primary"> */}
          <Button onClick={props.handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default function ModalDialog(props) {
  return (
    <ThemeProvider theme={props.theme}>
      {/* {console.log(props.theme.palette.primary.main)} */}
      <UnWrappedModalDialog {...props}/>
    </ThemeProvider>
  );
  }