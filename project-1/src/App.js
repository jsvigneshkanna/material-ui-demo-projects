import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TourCard from "./components/TourCard";
import NavBar from "./components/NavBar";

// JSON Data
import data from "./tourData";

function App() {
  const tourData = data;
  return (
    <div>
      <NavBar />
      <div className="App">
        <Container>
          <Grid container spacing={5}>
            {tourData.map((tour, idx) => {
              return <TourCard key={idx} name={tour.name} rating={tour.rating} price={tour.price} image={tour.image} />;
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default App;
