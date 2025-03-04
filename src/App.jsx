import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar";
import Header from "./components/header";
import About from "./components/about";
import MeetOurBrands from "./components/brands";
import Footer from "./components/footer";
import CakeGallery from "./components/CakeGallery";
import FoodGallery from "./components/FoodGallery";
import GrillGallery from "./components/GrillsGallery";

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire App in BrowserRouter */}
      <Navbar />
      <main className="mt-16 p-4"> {/* Content below navbar */}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <MeetOurBrands />
            </>
          } />
          <Route path="/cake-gallery" element={<CakeGallery />} />
          <Route path="/food-gallery" element={<FoodGallery/>} />
          <Route path="/grills-gallery" element={<GrillGallery/>} />


        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;

