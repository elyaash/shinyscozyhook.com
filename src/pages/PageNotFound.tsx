import { Layout } from "../Layout";
import { Box, Typography, Stack } from "@mui/material";
import PageNotFoundSvg from "../assets/not-found.svg";

export const PageNotFound = () => {
  return (
    <Layout>
      <Box
        sx={{
          m: 5,
        }}
      >
        <Stack spacing={2} direction="column" alignItems="center">
          <img src={PageNotFoundSvg} width={200} />
          <Typography variant="h5">Page Not Found</Typography>
        </Stack>
      </Box>
    </Layout>
  );
};
