import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Gold from './pages/Gold';
import AnnualReport from './pages/AnnualReport';
import Mining from './pages/projects/Mining';
import Agriculture from './pages/projects/Agriculture';
import OilAndGas from './pages/projects/OilAndGas';
import Philanthropy from './pages/projects/Philanthropy';
import Retirement from './pages/projects/Retirement';
import Register from './pages/auth/Register';
import RegistrationSuccess from './pages/auth/RegistrationSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:slug" element={<Team />} />
          <Route path="gold" element={<Gold />} />
          <Route path="annual-report" element={<AnnualReport />} />
          <Route path="mining" element={<Mining />} />
          <Route path="agriculture" element={<Agriculture />} />
          <Route path="oil-and-gas" element={<OilAndGas />} />
          <Route path="philanthropy" element={<Philanthropy />} />
          <Route path="retirement" element={<Retirement />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Auth routes outside of Layout */}
        <Route path="register" element={<Register />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/success" element={<RegistrationSuccess />} />
      </Routes>
    </Router>
  );
}

export default App
