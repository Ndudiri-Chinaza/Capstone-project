import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/pages/Features";
import Login from "./components/pages/Login";
import Pricing from "./components/pages/Pricing";



function App() {


  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/features" element={<Features/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>

    </div>

  

    </>
  );
}

export default App;
