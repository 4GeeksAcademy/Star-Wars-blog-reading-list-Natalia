import { getAllLocationsReq } from "../api/api";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavIcon from "@mui/icons-material/Favorite";
import { FavContext } from "../FavContext";
import { useNavigate } from "react-router-dom";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const { addFav, deleteFav, isFav } = useContext(FavContext);
  const navigate = useNavigate();

  const refreshData = () => {
    getAllLocationsReq().then((data) => {
      setLocations(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
      {locations.map((location) => (
        <Card key={location._id} sx={{ minWidth: 300, mr: 2 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={location.image}
            title="location"
          />
          <CardContent>
            <Typography>{location.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                navigate(`/locations/${location._id}`);
              }}
              size="small"
              variant="contained"
              sx={{ color: "black", bgcolor: "yellow" }}
            >
              Learn more!
            </Button>
            <IconButton>
              <FavIcon
                sx={{
                  color: isFav(location._id, location.name)
                    ? "yellow"
                    : "black",
                }}
                onClick={
                  isFav(location._id, location.name)
                    ? () => deleteFav(location.name)
                    : () => addFav(location._id, location.name)
                }
                fontSize="medium"
              />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
