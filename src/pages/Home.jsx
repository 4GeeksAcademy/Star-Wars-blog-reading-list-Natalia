import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Box, Typography } from "@mui/material";
import dashboardImg from "../assets/img/yoda.png"; 
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
     <Typography variant="h5" color="yellow" sx={{ mt: 3 }}>
  Welcome STAR WARS FANS, <br />
  May the Force be with you on this epic journey through the galaxy far, far away!
     </Typography>

      
      <br />
      {/* Yoda */}
      <Box sx={{ mt: 3 }}>
        <Link to="/dashboard" style={{ display: "inline-block" }}>
          <img
            src={dashboardImg}
            alt="Go to Dashboard"
            style={{ cursor: "pointer", maxWidth: "650px", width: "100%" }}
          />
        </Link>
      </Box>
      <hr />
      {/* Quote */}
      <Typography
        variant="h6"
        color="yellow"
        sx={{ fontStyle: "italic", mt: 3, maxWidth: 600, margin: "0 auto" }}
      >
        “Do. Or do not. There is no try.” – Yoda
      </Typography>
    </Box>
 
  );
};
