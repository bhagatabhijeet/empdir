// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import { dark, light } from "./themes";
import { createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";
// import CustomFlipCard from "./components/FlipCard";
import Footer from "./components/Footer";
import ThemedSettingsBar from "./components/SettingsBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardLayout from "./components/CardLayout";
import GridLayout from "./components/GridLayout";

function App() {
  const [checked, setChecked] = React.useState(true);
  const [layoutChecked, setLayoutChecked] = React.useState(false); //false is Card and True is Grid
  const [fetchInProgress, setFetchInProgress] = React.useState(false);
  const [theme, setTheme] = React.useState(createMuiTheme(light));

  const [data, setData] = React.useState([]);

  const [filterText, setFilterText] = React.useState("");
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilterText(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setFetchInProgress(true);
      const res = await axios.get("/api/employees");
      setFetchInProgress(false);
      setData(res.data);
    };

    getData();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.secondary.light;
  });

  

  const toggleTheme = (event) => {
    // console.log("theme change=>", "before change", checked, theme.name);
    setChecked(!checked);
    const thm =
      theme.name === "custDark" ? createMuiTheme(light) : createMuiTheme(dark);
    setTheme(thm);
    // setState({
    //   ...state,
    //   checked: !state.checked,
    //   // name:state.name === "dark" ? "light" : "dark",
    //   // theme: state.name==="dark"?createMuiTheme(lightTheme):createMuiTheme(darkTheme),
    //   theme: state.theme.name==="custDark"?createMuiTheme(light):createMuiTheme(dark),
    // });
    // console.log("theme change=>", "after change", checked, theme.name);
  };

  const toggleLayout = () => {
    setLayoutChecked(!layoutChecked);
  };
  useEffect(() => {
    // console.log(state);
  }, []);
  return (
    <div className="App">
      {console.log("Render=>", theme.name, checked)}
      <CustomNavbar theme={theme} />
      <ThemedSettingsBar
        toggleThemeHandler={toggleTheme}
        theme={theme}
        checked={checked}
        toggleLayoutHandler={toggleLayout}
        layoutChecked={layoutChecked}
        filterHandler={handleFilter}
      />
      {fetchInProgress ? (
        <CircularProgress />
      ) : layoutChecked ? (
        <GridLayout
          data={data}
          theme={theme}          
          filter={filterText}
        />
      ) : (
        <CardLayout data={data} theme={theme} filter={filterText} />
      )}

      <Footer theme={theme} />
    </div>
  );
}

// function WrappedCardLayout(props){
//   const [filterText,setFilterText]=React.useState('');
//   const handleFilter=(event)=>{
//     console.log(event.target);
//     setFilterText(event.target.text);
//   };
//   return(
//     <Cardayout {...props} filterHandler={handleFilter} filter={filterText}/>
//   );
// }

// function GridLayout(props) {
//   const data = props.data;
//   return (
//     <Container>
//       <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
//         {/* {data.map((d,index)=>(<FlipCard key={d._id} avatar={d.name.first[0]+d.name.last[0]} title={d.name.first + '' + d.name.last} image={d.picture.large}/>))} */}
//         <h1>Grid Layout</h1>
//       </div>
//     </Container>
//   );
// }

export default App;
