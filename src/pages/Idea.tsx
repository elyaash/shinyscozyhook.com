import { Layout } from "../Layout";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import crochetIdeas from "../data/ideas";
import { PageNotFound } from "./PageNotFound";

export const Idea = () => {
  const params = useParams();

  const idea = crochetIdeas.find((item) => item.path === params["idea"]);

  if (!idea) return <PageNotFound />;
  return (
    <Layout>
      <Box sx={{ m: 8 }}>
        <Typography variant="h5">{idea?.title}</Typography>
        <Typography sx={{ mt: 5 }}>{idea?.description}</Typography>
      </Box>
    </Layout>
  );
};
