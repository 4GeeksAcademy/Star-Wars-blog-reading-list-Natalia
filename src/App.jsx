import { Routes, Route } from "react-router-dom";
import { Views } from "./pages/Views";
import { Layout } from "./pages/Layout"; 
import stars from './assets/img/stars.gif';
import { Details } from "./components/Details";



export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${stars})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
        color: "yellow",
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          {Views.map((page, index) => (
            <Route
              key={index}
              path={page.route === "/" ? "" : page.route.slice(1)}
              element={page.component}
            />
          ))}

          {/* DETAILS dla Learn More */}
         <Route path=":type/:id" element={<Details />} />



          <Route path="*" element={<h1 style={{ color: 'yellow' }}>Not found!</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
