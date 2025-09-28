
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Typography } from "@mui/material";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
<Typography variant="h2" sx={{ color: 'yellow', textAlign: 'center', mt: 5 }}>
  Hello Star Wars Fans !
</Typography>

	);
}; 