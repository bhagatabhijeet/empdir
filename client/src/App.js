import React, { useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
// user created files
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemedSettingsBar from "./components/SettingsBar";
import CardLayout from "./components/CardLayout";
import GridLayout from "./components/GridLayout";
import { dark, light } from "./themes";
import "./App.css";

function App() {
  const [checked, setChecked] = React.useState(true);
  const [layoutChecked, setLayoutChecked] = React.useState(false); //false is Card and True is Grid
  const [fetchInProgress, setFetchInProgress] = React.useState(false);
  const [theme, setTheme] = React.useState(createMuiTheme(light));

  const [data, setData] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");

  //Event handler onChange in the filter inputbox
  const handleFilter = (event) => {    
    setFilterText(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      setFetchInProgress(true);
      const res = await axios.get("/api/employees");
      setFetchInProgress(false);
      setData(res.data);
    };
    // function to fetch data from /api/employees
    getData();
  }, []);

  // Note :- This is to set the background of the index.html
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.secondary.light;
  });  

  // event handler toggleTheme
  const toggleTheme = (event) => {    
    setChecked(!checked);
    const thm =
      theme.name === "custDark" ? createMuiTheme(light) : createMuiTheme(dark);
    setTheme(thm);    
  };

  // event handler toggleLayout
  const toggleLayout = () => {
    setLayoutChecked(!layoutChecked);
  };
 
  return (
    <div className="App">      
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

export default App;
