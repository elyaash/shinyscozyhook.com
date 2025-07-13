import { Layout } from "../Layout";
import { Box, Typography, Stack } from "@mui/material";

export const AboutUs = () => {
  return (
    <Layout>
      <Box sx={{ m: 8 }}>
        <Stack spacing={2} direction="column" alignItems="center">
          <Typography variant="h3">Intro/About me</Typography>
          <Typography variant="h5" sx={{ mt: 5 }}>
            Welcome to shiny’s cozy hook! I’m Aashni, a girl who randomly
            decided to pick up this craft and fell in love with it. One random
            afternoon, I picked up the crochet hook and fell in love with the
            hobby. Unfortunately, the hustle of school made me too busy to
            continue learning but now I’m back more motivated than ever to make
            new projects. This blog is to share the fruits of my effort and
            maybe even teach something new to some who visit!
          </Typography>
        </Stack>
      </Box>
    </Layout>
  );
};
