import { useState } from 'react';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Exchange from './components/Exchange';
import Wallet from './components/Wallet';
import Profile from './components/Profile';
import AdminPanel from './components/AdminPanel';
import Staking from './components/Staking';
import TransactionHistory from './components/TransactionHistory';
import Notifications from './components/Notifications';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isAdmin] = useState(true); // Set to true to show admin panel

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'exchange':
        return <Exchange />;
      case 'wallet':
        return <Wallet />;
      case 'profile':
        return <Profile />;
      case 'admin':
        return <AdminPanel />;
      case 'staking':
        return <Staking />;
      case 'history':
        return <TransactionHistory />;
      case 'notifications':
        return <Notifications />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {currentPage === 'landing' ? (
        <div>
          <nav className="border-b border-[#2A3038] bg-[#0D1117] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <button onClick={() => setCurrentPage('landing')} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#00B86B] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-xl tracking-tight text-[#E0E3E7]">CryptoTrade</span>
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentPage('dashboard')}
                    className="px-6 py-2 rounded-lg bg-[#00B86B] text-white hover:bg-[#00995C] transition-all emerald-glow-hover"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </nav>
          {renderPage()}
        </div>
      ) : (
        <Layout currentPage={currentPage} onNavigate={setCurrentPage} isAdmin={isAdmin}>
          {renderPage()}
        </Layout>
      )}
      <Toaster />
    </>
  );
}