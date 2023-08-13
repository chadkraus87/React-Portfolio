import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add below back to package.json before deploying
// "homepage": "https://github.com/chadkraus87/React-Portfolio"

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <img src={logo} alt="Logo" className="App-logo" />
        <Routes>
          <Route path="/" element={<h1>About</h1>} />
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/resume" element={<h1>Resume</h1>} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
