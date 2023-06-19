import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import BasicTable from "./components/BasicTable";
import AddUser from "./components/AddUser";
import Update from "./components/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/basictable" element={<BasicTable/>}/>
          <Route path="/AddUser" element={<AddUser />}/>
          <Route path="/update/:id" element={<Update />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
