import "./App.css";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registrazione";
import BackgroundVideo from "../src/assets/video/SimpleAbstract.mp4";
import NavBar from "./components/navBar/NavBar";
import DetailsGame from "./pages/DetailsGame";
import Footer from "./components/Footer";

//extra extra ho creato la pagina search dei film
//extra extra hover riproduci con i dettagli del film

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Error />} />
          <Route path= "/detailsgame" element={<DetailsGame/>} />
        </Routes>
        <Footer />  
      </Router>
      <video src={BackgroundVideo} className="video-backgorund" autoPlay loop type="video/mp4"/>
    </div>
  );
}

export default App;
