import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TourCard from "./components/TourCard";

// JSON Data
import data from "./tourData";
function App() {
  const tourData = data;
  return (
    <div className="App">
      <Container fixed>
        <Grid container spacing={5}>
          {tourData.map((tour, idx) => {
            return <TourCard key={idx} name={tour.name} rating={tour.rating} price={tour.price} image={tour.image} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
