import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllDetailsReq } from "../api/api";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

export const Details = () => {
  const [detail, setDetail] = useState(null);
  const { type, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getAllDetailsReq(type, id)
        setDetail(response);
        console.log(response);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    getDetails();
  }, [type, id]);

  if (!detail) {
    return (
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography color="white">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 12, justifyContent: "center", display: "flex" }}>
      <Card
  sx={{
    width: 500,
    mr: 2,
    boxShadow: "0px 0px 20px 4px rgba(229, 220, 45, 0.83)",
    borderRadius: 2, 
  }}
>

        {detail.image && (
          <CardMedia
            sx={{ height: 300 }}
            image={detail.image}
            title={detail.name}
          />
        )}
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h5" gutterBottom>
            {detail.name}
          </Typography>
          <Typography>{detail.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center", mb: 2, }}>
          <Button
            onClick={() => navigate(-1)}
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
