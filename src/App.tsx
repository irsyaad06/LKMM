import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import HomePage from "./pages/HomePage";
import StarfieldWarp from "./components/StarfieldWarp";
import Information from "./pages/Information";
import Timeline from "./pages/TimeLine";

function App() {
  return (
    <BrowserRouter>
      <StarfieldWarp>
        <div className="flex flex-col min-h-screen text-gray-100">
          <div className="p-5">
            <Navbar />
          </div>

          <main className="flex-1 container mx-auto px-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/informasi" element={<Information />} />
              <Route path="/timeline" element={<Timeline />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </StarfieldWarp>
    </BrowserRouter>
  );
}

export default App;
