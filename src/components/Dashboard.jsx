import { Box, Typography } from "@mui/material";
import { Characters } from "./Characters";
import { Creatures } from "./Creatures";
import { Droids } from "./Droids";

export const Dashboard = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ my: 2 }}>
        <Typography color="yellow" variant="h4" gutterBottom>
          Characters
        </Typography>
        <Characters />
      </Box>
      <Box sx={{ my: 3 }}>
        <Typography color="yellow" variant="h4" gutterBottom>
          Creatures
        </Typography>
        <Creatures />
      </Box>
      <Box sx={{ my: 3 }}>
        <Typography color="yellow" variant="h4" gutterBottom>
          Droids
        </Typography>
        <Droids />
      </Box>
    </Box>
  );
};
