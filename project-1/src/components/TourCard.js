import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const TourCard = ({ name, rating, price, image }) => {
  console.log({ image });
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper elevation={12}>
        <img src={image} alt="place image" />
      </Paper>
    </Grid>
  );
};

export default TourCard;
