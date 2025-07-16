import { Box, Typography, Button } from "@mui/material";

export const HeroBanner = () => {
  return (
    <Box
      sx={{
        background:
          'url("/assets/crochet-hero-banner.png") center/cover no-repeat',
        color: "white",
        textAlign: "center",
        py: {
          xs: 2,
          md: 15,
        },
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Discover the Joy & Benefits of Crocheting
      </Typography>
      <Typography variant="h6" mt={2} mb={4}>
        A creative, calming hobby that stitches together health, happiness, and
        handmade charm.
      </Typography>
      <Button variant="contained" color="primary" href="#ideas" sx={{}}>
        Explore Projects
      </Button>
    </Box>
  );
};
