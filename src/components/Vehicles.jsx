import { getAllVehiclesReq } from "../api/api";
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

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]); 
  const { favorites, addFav, deleteFav, isFav } = useContext(FavContext);
  const navigate = useNavigate();

  const refreshData = () => {
    getAllVehiclesReq().then((data) => {
      setVehicles(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
      {vehicles.map((vehicle) => (
        <Card key={vehicle._id} sx={{ minWidth: 300, mr: 2 }}>
          <CardMedia sx={{ height: 140 }} image={vehicle.image} title="specie" />
          <CardContent>
            <Typography>{vehicle.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                navigate(`/vehicles/${vehicle._id}`);
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
                  color: isFav(vehicle._id, vehicle.name) ? "yellow" : "black",
                }}
                onClick={
                  isFav(vehicle._id, vehicle.name)
                    ? () => deleteFav(vehicle.name)
                    : () => addFav(vehicle._id, vehicle.name)
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
