import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Abouts from "./pages/Abouts";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";

import "./assets/css/main.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Abouts />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="events" element={<Events />} />
          <Route path="teachers" element={<Teachers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
