import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Financings from './pages/Financings';
import FinancingDetail from './pages/FinancingDetail';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import Contact from './pages/Contact';
import HotMoney from './pages/HotMoney';
import PascalesPerspective from './pages/PascalesPerspective';
import Subscribe from './pages/Subscribe';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="services" element={<Services />} />
          <Route path="financings" element={<Financings />} />
          <Route path="financings/:slug" element={<FinancingDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="contact" element={<Contact />} />
          <Route path="insights/hot-money" element={<HotMoney />} />
          <Route path="insights/pascales-perspective" element={<PascalesPerspective />} />
          <Route path="subscribe" element={<Subscribe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
