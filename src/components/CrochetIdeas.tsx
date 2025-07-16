import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Logo from "../assets/logo.png";
import crochetIdeas from "../data/ideas";

export const CrochetIdeas = () => {
  return (
    <Box id="ideas" bgcolor="#f9f9f9" py={4}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Crochet Project Ideas
        </Typography>
        <Grid container spacing={2}>
          {crochetIdeas.map((idea, index) => (
            <Grid
              item
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={index}
            >
              <Card>
                <Box
                  sx={{
                    width: {
                      sm: "100%",
                    },
                  }}
                >
                  <Link href={`/ideas/${idea.path}`}>
                    <CardMedia component="img" image={Logo} alt={idea.title} />
                  </Link>
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {idea.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {idea.description.substring(0, 80) + "..."}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
