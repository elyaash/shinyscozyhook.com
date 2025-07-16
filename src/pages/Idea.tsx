import { Layout } from "../Layout";
import { Box, Typography, Link, Grid } from "@mui/material";
import { useParams } from "react-router";
import crochetIdeas from "../data/ideas";
import { PageNotFound } from "./PageNotFound";

import PlaceholderImage from "../assets/logo.png";

export const Idea = () => {
  const params = useParams();

  const idea = crochetIdeas.find((item) => item.path === params["idea"]);

  if (!idea) return <PageNotFound />;
  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image on the left */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              sx={{
                width: "100%", // Makes the image responsive within its grid item
                height: "auto", // Maintains aspect ratio
                display: "block", // Removes extra space below image
                borderRadius: 1, // Optional: adds slight rounded corners
              }}
              alt="Descriptive alt text for the image"
              src={PlaceholderImage} // Replace with your image URL
            />
          </Grid>

          {/* Content/Text on the right */}
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              {idea?.title}
            </Typography>
            <Typography variant="h5" paragraph>
              {idea?.description}
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Link href={idea?.tutorial}>
                <Typography variant="h5" sx={{ mt: 5 }}>
                  {idea?.tutorial}
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};
