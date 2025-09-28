import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { getSpecieReq } from "../api/api"; // Używamy getSpecieReq zamiast getCreatureReq

export const DetailCreature = () => {
  const [creature, setCreature] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSpecieReq("creatures", id).then((data) => {
      setCreature(data);
    });
  }, [id]);

  if (!creature) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography color="white">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: "15px" }}>
      <Card sx={{ minWidth: 300, mr: 2 }}>
        {creature.image && (
          <CardMedia
            sx={{ height: 200 }}
            image={creature.image}
            title={creature.name}
          />
        )}
        <CardContent>
          <Typography variant="h5" gutterBottom>{creature.name}</Typography>
          <Typography>{creature.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => navigate("/")}
            size="small"
            variant="outlined"
          >
            Return
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
