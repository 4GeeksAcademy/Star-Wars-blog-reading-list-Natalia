import { getAllSpeciesReq } from "../api/api";
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

export const Species = () => {
  const [species, setSpecies] = useState([]); 
  const { favorites, addFav, deleteFav, isFav } = useContext(FavContext);
  const navigate = useNavigate();

  const refreshData = () => {
    getAllSpeciesReq().then((data) => {
      setSpecies(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
      {species.map((specie) => (
        <Card key={specie._id} sx={{ minWidth: 300, mr: 2 }}>
          <CardMedia sx={{ height: 140 }} image={specie.image} title="specie" />
          <CardContent>
            <Typography>{specie.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                navigate(`/species/${specie._id}`);
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
                  color: isFav(specie._id, specie.name) ? "yellow" : "black",
                }}
                onClick={
                  isFav(specie._id, specie.name)
                    ? () => deleteFav(specie.name)
                    : () => addFav(specie._id, specie.name)
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
