import "./App.css";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import Search from "./pages/Search";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Registration from "./pages/Registrazione";

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
          <Route path="/search" element={<Search />} />
          <Route path="/registration" element={<Registration />} />
          {/**Questa non è completata */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
