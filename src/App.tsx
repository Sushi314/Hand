import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AbstractSection from './components/AbstractSection';
import ExperimentSection from './components/ExperimentSection';
import MethodSection from './components/MethodSection';
import ReferencesSection from './components/ReferencesSection';
import InterviewsSection from './components/InterviewsSection';
import DiscussionSection from './components/DiscussionSection';
import ConclusionSection from './components/ConclusionSection';
import ResultsSection from './components/ResultsSection';
import LimitationsSection from './components/LimitationsSection';

const App: React.FC = () => {
  return (
    <div className="mobile-container">
      <Navbar />
      <header id="home">
        <h1>Disrupting Social Norms: The Decline of the Handshake</h1>
        <p><strong>Sasha Petruccelli</strong></p>
        <p>Northampton Community College</p>
        <p>SOCA 103G: Principles of Sociology</p>
        <p>Professor Earl Page</p>
        <p>March 16, 2025</p>
      </header>
      <main>
        <AbstractSection />
        <ExperimentSection />
        <MethodSection />
        <ResultsSection />
        <LimitationsSection />
        <InterviewsSection />
        <DiscussionSection />
        <ConclusionSection />
        <ReferencesSection />
      </main>
      <footer>
        <p>&copy; 2025 Sasha Petruccelli</p>
      </footer>
    </div>
  );
};

export default App;
