import { getAllCreaturesReq } from "../api/api";
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
import FavIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { FavContext } from "../FavContext";

export const Creatures = () => {
  const [creatures, setCreatures] = useState([]);
  const { addFav, deleteFav, isFav } =
    useContext(FavContext);
  let navigate = useNavigate();

  const refreshData = () => {
    getAllCreaturesReq().then((data) => {
      setCreatures(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
        {creatures.map((creature) => (
          <Card key={creature._id} sx={{ minWidth: 300, mr: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={creature.image}
              title="creature"
            ></CardMedia>
            <CardContent>
              <Typography>{creature.name}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate(`/creatures/${creature._id}`);
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
                    color: isFav(creature._id, creature.name)
                      ? "yellow"
                      : "black",
                  }}
                  fontSize="medium"
                  onClick={
                    isFav(creature._id, creature.name)
                      ? () => {
                          deleteFav(creature.name);
                        }
                      : () => {
                          addFav(creature._id, creature.name);
                        }
                  }
                />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
