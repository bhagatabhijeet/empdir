import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import HelpIcon from "@material-ui/icons/Help";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import ModalDialog from "./ModalDialog";

export default function GridLayout(props) {
  // Lenth of fetched data to show on screen
  const origCount = props.data.length;

  // Get the gridApi for ag_grid
  const [gridApi, setGridApi] = useState(null);

  // State for modal dialog
  const [modalOpen, setModalOpen] = useState(false);

  // State for selected Row data
  const [selectedRowData, setSelectedRowData] = useState({
    gender: "",
    _id: "",
    name: {
      title: "",
      first: "",
      last: "",
    },
    location: {
      street: {
        number: 0,
        name: "",
      },
      city: "",
      state: "",
      country: "",
      postcode: 0,
      coordinates: {
        latitude: "",
        longitude: "",
      },
      timezone: {
        offset: "0:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "",
    login: {
      uuid: "",
      username: "",
      salt: "",
      md5: "",
      sha1: "",
      sha256: "",
    },
    dob: {
      date: "",
      age: 0,
    },
    registered: {
      date: "",
      age: 0,
    },
    phone: "000 000 00 00",
    cell: "000 000 00 00",
    id: {
      name: "",
      value: "",
    },
    picture: {
      large: "large",
      medium: "medium",
      thumbnail: "thumbnail",
    },
    nat: "",
  });

  let [rowData, setRowData] = useState([]);

  // filtered data length to show on screen
  const [filterCount, setFilterCount] = useState(origCount);

  // Util function to filter data as per the filter text entererd on settings bar
  const getFilteredData = () => {
    if (props.filter) {
      const filtData = props.data.filter(
        // filter ONLY first(name), last(name),username and email
        (d) =>
          d.name.first.toLowerCase().includes(props.filter.toLowerCase()) ||
          d.name.last.toLowerCase().includes(props.filter.toLowerCase()) ||
          d.email.toLowerCase().includes(props.filter.toLowerCase()) ||
          d.login.username.toLowerCase().includes(props.filter.toLowerCase())
      );
      return filtData;
    } else {
      return props.data;
    }
  };

  // Every render use the api.setRowData
  useEffect(() => {
    if (gridApi) {
      const rows = getFilteredData();
      setFilterCount(rows.length);
      gridApi.setRowData(rows);
    }
  });

  // onGridReady Event handler
  function onGridReady(params) {
    setGridApi(params.api);
    const t = getFilteredData();
    setRowData(t);
  }

  // Double click handler for grid rows
  const rowClickHandler = (event) => {
    setModalOpen(true);
    setSelectedRowData(event.data);
  };

  // Event handler for the Modal Dialog close
  const closeDialogHandler = (event) => {
    setModalOpen(false);
  };

  return (
    <Container style={{ backgroundColor: props.theme.palette.secondary.light }}>
      <p style={{ fontSize: "12px" }}>
        Showing {filterCount} of {origCount} records.{" "}
        <HelpIcon style={{ fontSize: "15px" }} /> Double click on any row to see
        more details.
      </p>
      <div
        className={
          props.theme.name === "custDark"
            ? "ag-theme-alpine-dark"
            : "ag-theme-alpine"
        }
        style={{ height: "60vh", width: "100%", marginBottom: "20px" }}
      >
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          onRowDoubleClicked={rowClickHandler}
        >
          <AgGridColumn
            type="leftAligned"
            field="picture.thumbnail"
            headerName="Picture"
            cellRenderer={(params) =>
              "<img src='" + params.value + "' alt='user'/>"
            }
          ></AgGridColumn>
          <AgGridColumn
            field="name.first"
            headerName="Firstname"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="name.last"
            headerName="Lastname"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="email"
            headerName="Email"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="phone"
            headerName="Phone"
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field="cell"
            headerName="Cell"
            sortable={true}
            filter={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
      {modalOpen ? (
        <ModalDialog
          open={modalOpen}
          handleClose={closeDialogHandler}
          data={selectedRowData}
          theme={props.theme}
        />
      ) : null}
    </Container>
  );
}
