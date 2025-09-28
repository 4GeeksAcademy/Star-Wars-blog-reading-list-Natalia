import { getAllCharactersReq } from "../api/api";
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

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites, addFav, deleteFav, isFav } =
    useContext(FavContext);
  let navigate = useNavigate();

 const refreshData = () => {
  getAllCharactersReq().then((data) => {
    setCharacters(data);
  });
};

  useEffect(refreshData, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        {characters.map((character) => (
          <Card key={character._id} sx={{ minWidth: 300, mr: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={character.image}
              title="character"
            ></CardMedia>
            <CardContent>
              <Typography>{character.name}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate(`/characters/${character._id}`);
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
                    color: isFav(character._id, character.name)
                      ? "yellow"
                      : "black",
                  }}
                  onClick={
                    isFav(character._id, character.name)
                      ? () => deleteFav(character.name)
                      : () => addFav(character._id, character.name)
                  }
                  fontSize="medium"
                />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
