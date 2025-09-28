import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../FavContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import swlogo from "../assets/img/swlogo2.jpg";
import { Views } from "../pages/Views";

export const Navbar = ({ children }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const { favorites, deleteFav } = useContext(FavContext);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (name) => {
    deleteFav(name);
    handleClose();
  };

  return (
    <>
      <AppBar sx={{ color: "yellow", bgcolor: "black" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            component={Link}
            to="/"
          >
     <Avatar
  src={swlogo}
  sx={{ width: 200, height: 120 }}
  alt="Star Wars Logo"
/>


          </IconButton>
          <Box sx={{ minWidth: 120 }}>
            <Button
              variant="contained"
              sx={{ color: "black", bgcolor: "yellow" }}
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
            >
              <Typography>Favorites</Typography>
              <Typography
                sx={{
                  bgcolor: "black",
                  color: "yellow",
                  borderRadius: "50%",
                  ml: 1,
                  width: 25,
                  textAlign: "center",
                }}
              >
                {favorites.length}
              </Typography>
            </Button>
            <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
              {favorites.length === 0 && (
                <MenuItem disabled>No favorites</MenuItem>
              )}
              {favorites.map((favorite) => (
                <MenuItem key={`${favorite.uid}-${favorite.name}`}>
                  {favorite.name}
                  <IconButton
                    size="small"
                    color="inherit"
                    onClick={() => handleDelete(favorite.name)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      <hr style={{ border: 'none', height: '4px', backgroundColor: 'yellow', margin: 0 }} />
</AppBar>
      
    </>
  );
};
