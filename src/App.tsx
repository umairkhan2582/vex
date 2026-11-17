import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ByokModal } from './components/ByokModal';
import { LandingPage } from './pages/LandingPage';
import { SandboxPlayground } from './pages/SandboxPlayground';
import { AuthPage } from './pages/AuthPage';
import { DocsPage } from './pages/DocsPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { LegalPages } from './pages/LegalPages';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isByokOpen, setIsByokOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      setCurrentPath(hash);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-200">
      <Navbar 
        currentPath={currentPath} 
        navigate={navigate} 
        openByokModal={() => setIsByokOpen(true)} 
      />

      <main className="flex-1 flex flex-col">
        {currentPath === '/' && <LandingPage navigate={navigate} />}
        {currentPath === '/sandbox' && <SandboxPlayground openByokModal={() => setIsByokOpen(true)} />}
        {currentPath === '/login' && <AuthPage mode="login" navigate={navigate} />}
        {currentPath === '/signup' && <AuthPage mode="signup" navigate={navigate} />}
        {currentPath === '/docs' && <DocsPage />}
        {currentPath === '/tutorials' && <TutorialsPage navigate={navigate} />}
        {currentPath === '/terms' && <LegalPages type="terms" />}
        {currentPath === '/privacy' && <LegalPages type="privacy" />}
        {currentPath === '/acceptable-use' && <LegalPages type="acceptable-use" />}
      </main>

      <Footer navigate={navigate} />

      <ByokModal 
        isOpen={isByokOpen} 
        onClose={() => setIsByokOpen(false)} 
      />
    </div>
  );
};