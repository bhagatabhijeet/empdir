import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

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
  dialog: {
    backgroundColor: theme.palette.secondary.light,
  },
  dialogTitle: {
    backgroundColor: theme.palette.primary.main,
    color: "#fffff2",
  },
  tablerowOdd: {
    backgroundColor: theme.tableRowsOdd,
  },
}));

function UnWrappedModalDialog(props) {
  const classes = useStyles();
  const data = props.data;

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={props.open}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle
          id="max-width-dialog-title"
          className={classes.dialogTitle}
        >{`${data.name.first} ${data.name.last}`}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText>{`Completed ${data.registered.age} years in Organization!`}</DialogContentText>
          <img
            src={data.picture.large}
            alt="user pic"
            width="200px"
            height="200px"
          />
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow className={classes.tablerowOdd}>
                {/** Show Username*/}
                <TableCell>Username:</TableCell>
                <TableCell>{data.login.username}</TableCell>
              </TableRow>

              <TableRow>
                {/** Show Email*/}
                <TableCell>Email :</TableCell>
                <TableCell>{data.email}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                {/** Show Phone*/}
                <TableCell>Phone :</TableCell>
                <TableCell>{data.phone}</TableCell>
              </TableRow>

              <TableRow>
                {/** Show Cell*/}
                <TableCell>Cell :</TableCell>
                <TableCell>{data.cell}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                {/** Show Street Number*/}
                <TableCell>Street Number :</TableCell>
                <TableCell>{data.location.street.number}</TableCell>
              </TableRow>

              <TableRow>
                {/** Show Street Name*/}
                <TableCell>Street Name :</TableCell>
                <TableCell>{data.location.street.name}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                {/** Show City*/}
                <TableCell>City:</TableCell>
                <TableCell>{data.location.city}</TableCell>
              </TableRow>

              <TableRow>
                {/** Show State*/}
                <TableCell>State :</TableCell>
                <TableCell>{data.location.state}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                {/** Show Country*/}
                <TableCell>Country :</TableCell>
                <TableCell>{data.location.country}</TableCell>
              </TableRow>

              <TableRow>
                {/** Show Postal Code*/}
                <TableCell>Postal Code :</TableCell>
                <TableCell>{data.location.postcode}</TableCell>
              </TableRow>

              <TableRow className={classes.tablerowOdd}>
                {/** Show Timezone*/}
                <TableCell>TimeZone:</TableCell>
                <TableCell>{`${data.location.timezone.offset} ${data.location.timezone.description}`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>          
        </DialogContent>
        <DialogActions className={classes.dialogTitle}>          
          <Button onClick={props.handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
// ThemedProvider wrapped Modal Dialog
export default function ModalDialog(props) {
  return (
    <ThemeProvider theme={props.theme}>      
      <UnWrappedModalDialog {...props} />
    </ThemeProvider>
  );
}
