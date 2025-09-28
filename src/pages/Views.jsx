// src/pages/Views.jsx

import { Home } from "./Home";
import { Dashboard } from "../components/Dashboard";

export const Views = [
  { route: "/", component: <Home /> },
  { route: "/dashboard", component: <Dashboard /> },
];
