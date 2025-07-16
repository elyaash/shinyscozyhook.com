import { Container, Box, Typography, Grid } from "@mui/material";
import { HeroBanner } from "../components/HeroBanner";
import { CrochetIdeas } from "../components/CrochetIdeas";
import { Layout } from "../Layout";

export const Home = () => {
  return (
    <Layout>
      <Box sx={{ m: 1 }}>
        <HeroBanner />
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" gutterBottom>
            Why Crochet?
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: "🧠", text: "Reduces stress & anxiety" },
              { icon: "❤️", text: "Boosts mental health" },
              { icon: "🧵", text: "Improves dexterity" },
              { icon: "🧑‍🎨", text: "Sparks creativity" },
              { icon: "🎁", text: "Creates thoughtful gifts" },
              { icon: "🌿", text: "Eco-friendly crafting" },
            ].map((item, index) => (
              <Grid
                item
                size={{
                  xs: 6,
                  sm: 4,
                  md: 2,
                }}
                key={index}
              >
                <Box textAlign="center" px={2}>
                  <Typography variant="h3">{item.icon}</Typography>
                  <Typography variant="subtitle1" mt={1}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <CrochetIdeas />
    </Layout>
  );
};
