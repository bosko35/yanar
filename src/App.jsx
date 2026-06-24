import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Team from './pages/Team';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Calculators from './pages/Calculators';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';
import PetitionsPage from './pages/PetitionsPage';
import PetitionDetail from './pages/PetitionDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="font-sans antialiased bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmet/:slug" element={<ServiceDetail />} />
        <Route path="/ekibimiz" element={<Team />} />
        <Route path="/hesaplamalar" element={<Calculators />} />
        <Route path="/makaleler" element={<ArticlesPage />} />
        <Route path="/makale/:slug" element={<ArticleDetail />} />
        <Route path="/dilekceler" element={<PetitionsPage />} />
        <Route path="/dilekce/:slug" element={<PetitionDetail />} />
        <Route path="/randevu" element={<Appointment />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;