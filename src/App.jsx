import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { Views } from "./pages/Views";
import stars from './assets/img/stars.gif';
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url(${stars})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
        color: "yellow"
      }}
    >
      <ScrollToTop />
      <Navbar />
      
      {/* Main */}
      <div style={{ flex: 1 }}>
        <Routes>
          {Views.map((page, index) => (
            <Route key={index} path={page.route} element={page.component} />
          ))}
          <Route path="*" element={<h1 style={{ color: 'yellow' }}>Not found!</h1>} />
        </Routes>
      </div>

   
      <Footer />
    </div>
  );
};

    
   

