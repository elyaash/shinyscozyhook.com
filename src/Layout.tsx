import type { ReactNode } from "react";
import { Box } from "@mui/material";
import { Footer } from "./components/Footer";
import AppBar from "./components/AppBar";
import { ErrorBoundary } from "./components/ErrorBoundary";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ m: 2 }}>
      <AppBar />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </Box>
  );
};
