// components/SearchBar.jsx
import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  TextField,
  CircularProgress,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {
  getAllCharactersReq,
  getAllCreaturesReq,
  getAllDroidsReq,
  getAllLocationsReq,
  getAllOrganizationsReq,
  getAllSpeciesReq,
  getAllVehiclesReq,
} from "../api/api";

export const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
const [
  characters,
  creatures,
  droids,
  locations,
  organizations,
  species,
  vehicles,
] = await Promise.all([
  getAllCharactersReq(),
  getAllCreaturesReq(),
  getAllDroidsReq(),
  getAllLocationsReq(),
  getAllOrganizationsReq(),
  getAllSpeciesReq(),
  getAllVehiclesReq(),
]);

      const allData = [
        ...characters.map((c) => ({
          label: c.name,
          id: c._id,
          type: "characters",
        })),
        ...creatures.map((c) => ({
          label: c.name,
          id: c._id,
          type: "creatures",
        })),
        ...droids.map((c) => ({
          label: c.name,
          id: c._id,
          type: "droids",
        })),
         ...locations.map((c) => ({
          label: c.name,
          id: c._id,
          type: "locations",
        })),
        ...organizations.map((c) => ({
          label: c.name,
          id: c._id,
          type: "organizations",
        })),
         ...species.map((c) => ({
          label: c.name,
          id: c._id,
          type: "species",
        })),
      ];
      setOptions(allData);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleSelect = (event, value) => {
    if (value) {
      navigate(`/${value.type}/${value.id}`);
    }
  };

  return (
    <Autocomplete
      sx={{
        minWidth: 300,
        bgcolor: "black",
        borderRadius: 2,
        boxShadow: "0 0 5px yellow",
        "& .MuiInputBase-root": {
          color: "yellow",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "yellow",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "yellow",  // bez zmiany na biały
        },
        "& .MuiSvgIcon-root": {
          color: "yellow",
        },
      }}
      loading={loading}
      options={options}
      onChange={handleSelect}
      noOptionsText="No results"
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search the galaxy..."
          variant="outlined"
          size="small"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "yellow" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
