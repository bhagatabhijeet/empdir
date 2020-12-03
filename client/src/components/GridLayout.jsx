// import CustomFlipCard from "./FlipCard";
import { Container } from "@material-ui/core";
import React, { useState } from "react";
import HelpIcon from '@material-ui/icons/Help';
// import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { useEffect } from "react";
import ModalDialog from "./ModalDialog";

export default function GridLayout(props) {
  // let data = props.data;

  const origCount = props.data.length;
  // let filterCount = origCount;

  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);
  const [modalOpen,setModalOpen]=useState(false);
  const [selectedRowData,setSelectedRowData] = useState({
    gender: "",
    _id: "",
    name: {
        title : "",
        first: "",
        last : ""
    },
    location: {
        street: {
            number: 0,
            name: ""
        },
        city: "",
        state: "",
        country: "",
        postcode: 0,
        coordinates: {
            latitude: "",
            longitude: ""
        },
        timezone: {
            offset: "0:00",
            description: "Mountain Time (US & Canada)"
        }
    },
    email: "",
    login: {
        uuid: "",
        username: "",       
        salt: "",
        md5: "",
        sha1: "",
        sha256: ""
    },
    dob: {
        date: "",
        age: 0
    },
    registered: {
        date: "",
        age: 0
    },
    phone: "000 000 00 00",
    cell: "000 000 00 00",
    id: {
        name: "",
        value: ""
    },
    picture: {
        large: "large",
        medium: "medium",
        thumbnail: "thumbnail"
    },
    nat: ""
});

  let [rowData, setRowData] = useState([]);
  const [filterCount,setFilterCount]=useState(origCount);
  // if (props.filter) {
  //   console.log(props.filter, "filt here");
  //   data = data.filter(
  //     (d) =>
  //       d.name.first.toLowerCase().includes(props.filter.toLowerCase()) ||
  //       d.name.last.toLowerCase().includes(props.filter.toLowerCase()) ||
  //       d.email.toLowerCase().includes(props.filter.toLowerCase()) ||

  //       d.login.username.toLowerCase().includes(props.filter.toLowerCase())
  //   );
  //   // gridApi.setRowData(data);
  //   filterCount = data.length;
  //   console.log(filterCount,gridApi);
  // }
  // console.log('filter changed');
  
  const getFilteredData = () => {
    // console.log('getFilteredData Called');
    if (props.filter) {
      // console.log('im being filtered');
      const filtData=props.data.filter(
        (d) =>
        
        d.name.first.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.name.last.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.email.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.login.username.toLowerCase().includes(props.filter.toLowerCase())
        );
        // setFilterCount(filtData.length);
        // setRowData(filtData);
        return filtData;
      } else {
        // setRowData(data);
        // setFilterCount(data.length);
        return props.data;
      }
    };

    // setRowData(getFilteredData());

    useEffect(()=>{
      if(gridApi){
        const rows=getFilteredData();
        setFilterCount(rows.length)
        gridApi.setRowData(rows);
        // console.log("REFRESH!!!",gridApi);
      }
    });

  function onGridReady(params) {
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
    console.log(params.api);
    const t=getFilteredData();
    // console.log(t);
    setRowData(t);
    // if(gridApi){
    //   gridApi.refreshCells({force: true});
    //   console.log("REFRESH!!!");
    // }
    // console.log("here is my new fiter", props.filter);
    // setRowData(data);
    // params.api.redrawRows();
  }
  // console.log(props.filter, "filt");
  
  const rowClickHandler=(event)=>{
    // alert(event);
    // console.log(event);
    setModalOpen(true);
    setSelectedRowData(event.data);
    // console.log(selectedRowData);
  }

  const closeDialogHandler=(event)=>{
    setModalOpen(false);
  }

  return (
    <Container style={{ backgroundColor: props.theme.palette.secondary.light }}>
      <p style={{fontSize:"12px"}}>Showing {filterCount} of {origCount} records. <HelpIcon style={{fontSize:'15px'}}/> Double click on any row to see more details.</p>
      {/* <p style={{fontSize:"12px"}}>Click on any row to see more details</p> */}
      {/* <p style={{fontSize:"12px"}}>Showing {filterCount} of {origCount} records</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" ,justifyContent:'space-evenly'}}>
        {data.length?data.map((d, index) => (
          <CustomFlipCard
            key={d._id}
            avatar={d.name.first[0] + d.name.last[0]}
            title={d.name.first + " " + d.name.last}
            image={d.picture.large}
            theme={props.theme}
            country={d.location.state + ", " + d.location.country}
            data={d}
          />
        )):<h1>No Records</h1>}
      </div> */}
      <div
        className={
          props.theme.name === "custDark"
            ? "ag-theme-alpine-dark"
            : "ag-theme-alpine"
        }
        style={{ height: '60vh', width: "100%",marginBottom:'20px' }}
      >
        <AgGridReact onGridReady={onGridReady} rowData={rowData} onRowDoubleClicked={rowClickHandler}>
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
      {modalOpen?<ModalDialog open={modalOpen} handleClose={closeDialogHandler} data={selectedRowData} theme={props.theme}/>:null}
    </Container>
  );
}
