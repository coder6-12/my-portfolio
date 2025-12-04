import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
// import Projects from "./pages/Projects";
import About from "./pages/About/About";
// import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route 
            path="/" 
            element={<Home />} />
            {/* <Route 
            path="/projects" 
            element={<Projects />} /> */}
            <Route 
            path="/about" 
            element={<About />} />
            {/* <Route 
            path="/contact" 
            element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;