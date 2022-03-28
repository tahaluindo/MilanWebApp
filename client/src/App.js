import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Events from './pages/Events'
import Sponsors from './pages/Sponsors'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Team from './pages/Team'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
