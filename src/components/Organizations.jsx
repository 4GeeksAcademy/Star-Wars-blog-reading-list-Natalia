import { getAllOrganizationsReq } from "../api/api";
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

export const Organizations = () => {
  const [organizations, setOrganizations] = useState([]);
  const { addFav, deleteFav, isFav } = useContext(FavContext);
  const navigate = useNavigate();

  const refreshData = () => {
    getAllOrganizationsReq().then((data) => {
      setOrganizations(data);
    });
  };

  useEffect(refreshData, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", overflow: "auto" }}>
      {organizations.map((organization) => (
        <Card key={organization._id} sx={{ minWidth: 300, mr: 2 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={organization.image}
            title="organization"
          />
          <CardContent>
            <Typography>{organization.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                navigate(`/organizations/${organization._id}`);
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
                  color: isFav(organization._id, organization.name)
                    ? "yellow"
                    : "black",
                }}
                onClick={
                  isFav(organization._id, organization.name)
                    ? () => deleteFav(organization.name)
                    : () => addFav(organization._id, organization.name)
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
