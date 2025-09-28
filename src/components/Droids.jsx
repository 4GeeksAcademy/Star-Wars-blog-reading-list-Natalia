import { getAllDroidsReq } from "../api/api";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { FavContext } from "../FavContext";

export const Droids = () => {
  const [droids, setDroids] = useState([]);
  const { addFav, deleteFav, isFav } = useContext(FavContext);
  const navigate = useNavigate();

  const refreshData = () => {
    getAllDroidsReq().then((data) => {
      setDroids(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
      {droids.map((droid) => (
        <Card key={droid._id} sx={{ minWidth: 300, mr: 2 }}>
          <CardMedia sx={{ height: 140 }} image={droid.image} title="droid" />
          <CardContent>
            <Typography>{droid.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => navigate(`/droids/${droid._id}`)}
              size="small"
              variant="contained"
              sx={{ color: "black", bgcolor: "yellow" }}
            >
              Learn more!
            </Button>
            <IconButton
              onClick={
                isFav(droid._id, droid.name)
                  ? () => deleteFav(droid.name)
                  : () => addFav(droid._id, droid.name)
              }
            >
              <FavoriteIcon
                sx={{
                  color: isFav(droid._id, droid.name) ? "yellow" : "black",
                }}
                fontSize="medium"
              />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
