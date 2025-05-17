import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarComponents from './components/NavbarComponents';
import FooterComponents from './components/FooterComponents';
import HalamanLogin from './components/HalamanLogin';
import LoginPage from './pages/LoginPage';
import ManajemenbukuPage from './pages/ManajemenbukuPage';
import ManajemenanggotaPage from './pages/ManajemenanggotaPage';
import SideBar from './components/SideBar';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/' || location.pathname === '/HalamanLogin';

  return (
    <>
      {!hideLayout && <NavbarComponents />}

      <div className="d-flex">
        {!hideLayout && <SideBar />}
        <div className="flex-grow-1 p-3" style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/HalamanLogin" element={<HalamanLogin />} />
            <Route path="/Manajemenbuku" element={<ManajemenbukuPage />} />
            <Route path="/Manajemenanggota" element={<ManajemenanggotaPage />} />
          </Routes>
        </div>
      </div>

      {!hideLayout && <FooterComponents />}
    </>
  );
}

export default App;
