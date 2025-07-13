import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export const Footer = () => {
  return (
    <Box bgcolor="#222" color="white" py={1} textAlign="center">
      <Typography variant="body2">
        © {new Date().getFullYear()} The Joy of Crocheting | Follow us on
        Instagram
      </Typography>
      <Typography variant="body2">
        <Link href="/about-us" m={1}>
          About US
        </Link>
        |
        <Link href="/contact-us" m={1}>
          Contact Us
        </Link>
      </Typography>
    </Box>
  );
};
