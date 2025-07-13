import { Layout } from "../Layout";
import { Box, Typography, Stack } from "@mui/material";

export const ErrorPage = () => {
  return (
    <Layout>
      <Box sx={{ m: 8 }}>
        <Stack spacing={2} direction="column" alignItems="center">
          <Typography variant="h3">OOPS!</Typography>
          <Typography variant="h5" sx={{ mt: 5 }}>
            Something Went Wrong...Please try again later
          </Typography>
        </Stack>
      </Box>
    </Layout>
  );
};
