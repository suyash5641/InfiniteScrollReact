import { Box, CircularProgress } from "@mui/material";

export const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
