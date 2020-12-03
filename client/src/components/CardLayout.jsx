import CustomFlipCard from './FlipCard';
import {Container } from "@material-ui/core";

export default function CardLayout(props) {
  let data = props.data;
  
  const origCount=data.length;
  let filterCount=origCount;
  // console.log(props.filter, "filt");
  if (props.filter) {
    // console.log(props.filter, "filt here");
    data = data.filter(
      (d) =>
        d.name.first.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.name.last.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.email.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.login.username.toLowerCase().includes(props.filter.toLowerCase())
    );
    filterCount= data.length;
    // console.log(data);
  }
  return (
    <Container style={{ backgroundColor: props.theme.palette.secondary.light }}>
      <p style={{fontSize:"12px"}}>Showing {filterCount} of {origCount} records</p>
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
      </div>
    </Container>
  );
}