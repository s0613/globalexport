import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Models } from './pages/Models';
import { Price } from './pages/Price';
import { Quote } from './pages/Quote';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          onClick={handleLinkClick}
        >
          GlobalExport
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/'
                ? 'text-cyan-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            홈
          </Link>
          <Link
            to="/models"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/models'
                ? 'text-cyan-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            수출 인기모델
          </Link>
          <Link
            to="/price"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/price'
                ? 'text-cyan-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            실시간 시세
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/about'
                ? 'text-cyan-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            회사소개
          </Link>
          <Link
            to="/quote"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
              location.pathname === '/quote'
                ? 'bg-cyan-600 border-cyan-600 text-white'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-white'
            }`}
            onClick={handleLinkClick}
          >
            견적 조회
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label="메뉴 열기"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`text-base font-medium transition-colors py-2 ${
                location.pathname === '/'
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              홈
            </Link>
            <Link
              to="/models"
              className={`text-base font-medium transition-colors py-2 ${
                location.pathname === '/models'
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              수출 인기모델
            </Link>
            <Link
              to="/price"
              className={`text-base font-medium transition-colors py-2 ${
                location.pathname === '/price'
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              실시간 시세
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors py-2 ${
                location.pathname === '/about'
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              회사소개
            </Link>
            <Link
              to="/quote"
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors border w-full text-center ${
                location.pathname === '/quote'
                  ? 'bg-cyan-600 border-cyan-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-white'
              }`}
              onClick={handleLinkClick}
            >
              견적 조회
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/price" element={<Price />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
