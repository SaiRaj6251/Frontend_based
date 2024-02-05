import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Authentication from "./pages/Authentication";
import Loading from "./pages/Loading.jsx";
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Authentication />}></Route>
        <Route path="/load" element={<Loading />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
