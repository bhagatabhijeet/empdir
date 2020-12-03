import { Container } from "@material-ui/core";
import CustomFlipCard from "./FlipCard";

export default function CardLayout(props) {
  let data = props.data;

  //OrigCount and FilterCount variables to hold total and filtered row count
  const origCount = data.length;
  let filterCount = origCount;

  if (props.filter) {
    // filter first,last,email and username ONLY
    data = data.filter(
      (d) =>
        d.name.first.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.name.last.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.email.toLowerCase().includes(props.filter.toLowerCase()) ||
        d.login.username.toLowerCase().includes(props.filter.toLowerCase())
    );
    filterCount = data.length;
  }
  return (
    <Container style={{ backgroundColor: props.theme.palette.secondary.light }}>
      <p style={{ fontSize: "12px" }}>
        Showing {filterCount} of {origCount} records
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data.length ? (
          data.map((d, index) => (
            <CustomFlipCard
              key={d._id}
              avatar={d.name.first[0] + d.name.last[0]}
              title={d.name.first + " " + d.name.last}
              image={d.picture.large}
              theme={props.theme}
              country={d.location.state + ", " + d.location.country}
              data={d}
            />
          ))
        ) : (
          <h1>No Records</h1>
        )}
      </div>
    </Container>
  );
}