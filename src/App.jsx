import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Home from "./pages/home/Home";
import EmployeeList from "./pages/employeelist/EmployeeList";
import CreateEmployee from "./pages/createemployee/CreateEmployee";
import Error from "./components/error/Error";
import Footer from "./components/footer/Footer";

/*  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --watch src/data/workers.json --port 3004",
    "deploy": "npm run build && node server.js"
  },*/

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
