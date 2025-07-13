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
    <Box id="ideas" bgcolor="#f9f9f9" py={8}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Crochet Project Ideas
        </Typography>
        <Grid container spacing={4}>
          {crochetIdeas.map((idea, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Link href={`/ideas/${idea.path}`}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "160px",
                    }}
                    image={Logo}
                    alt={idea.title}
                  />
                </Link>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {idea.title}
                  </Typography>
                  <Typography variant="body2" mt={1} width={200}>
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
