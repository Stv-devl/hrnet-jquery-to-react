import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Home from "./pages/home/Home";
import Labour from "./pages/labour/Labour";
import Add from "./pages/add/Add";
import Error from "./components/error/Error";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/labour" element={<Labour />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
