import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import { Box } from "@mui/material";
export const MainCarousel = () => {
  return (
    <Box sx={{ height: "50%", ml: 5, mr: 5 }}>
      <Carousel
        centerMode={false}
        showThumbs={false}
        centerSlidePercentage={100}
      >
        <div>
          <img src={image1} height={400} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image2} height={400} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image3} height={400} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={image4} height={400} />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </Box>
  );
};
