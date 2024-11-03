import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PremiumCard from "./components/PremiumCard";
import Trends from "./components/Trends";

function App() {
  return (
    <>
      <div className=" bg-black text-white">
        <div className="container mx-auto grid grid-cols-4 px-32">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <div>
            <div className="sticky right-0 top-2">
              <PremiumCard />
              <Trends />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
