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
import { getSpecieReq } from "../api/api";

export const DetailSpecie = () => {
  const [specie, setSpecie] = useState(null);
  const { species, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSpecieReq(species, id).then((data) => {
      setSpecie(data);
    });
  }, [species, id]);

  if (!specie) {
    return (
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography color="white">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: "15px", justifyContent: "center", display: "flex" }}>
      <Card sx={{ width: 500, mr: 2 }}>
        {specie.image && (
          <CardMedia sx={{ height: 250 }} image={specie.image} title={specie.name} />
        )}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
            {specie.name}
          </Typography>
          <Typography>{specie.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => navigate("/")}
            size="small"
            variant="contained"
            sx={{ color: "black", bgcolor: "yellow" }}
          >
            Return
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
