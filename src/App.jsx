import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Home from "./pages/home/Home";
import Employee from "./pages/employee/Employee";
import Add from "./pages/add/Add";
import Error from "./components/erreur/Error";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
