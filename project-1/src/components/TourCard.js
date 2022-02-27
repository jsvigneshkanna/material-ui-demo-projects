import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import SellIcon from "@mui/icons-material/Sell";

const TourCard = ({ name, rating, price, image }) => {
  console.log({ image });
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} marginTop={5}>
      <Paper elevation={24} className="tour-card">
        <img src={image} alt="place" className="place-image" />
        <Box
          paddingX={1}
          sx={{
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle" component="h3">
            {name}
          </Typography>
          <Box sx={{ display: "flex" }} className="tour-rating">
            <Rating name="read-only" value={rating} precision={0.25} size="small" readOnly />
            <Typography marginLeft={1} variant="body2" component="h3">
              {rating}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }} paddingY={1}>
            <SellIcon fontSize="small" sx={{ color: "rebeccapurple", marginRight: "10px" }} />
            <Typography variant="body1" component="p">
              Rs. {price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
