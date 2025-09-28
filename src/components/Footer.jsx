import { Box, Link, Typography } from "@mui/material";

export const Footer = () => (
  <Box component="footer" sx={{ mt: 'auto', py: 3, textAlign: 'center', bgcolor: '#121212', color: 'yellow' }}>
    <Typography variant="body2">
      © 2025 |{" "}
      <Link href="https://github.com/NatiSen" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
        GitHub
      </Link>
    </Typography>
  </Box>
);
