
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OrdinancesPage from './pages/OrdinancesPage';
import ResolutionsPage from './pages/ResolutionsPage';
import PendingLegislationPage from './pages/PendingLegislationPage';
import SessionCalendarPage from './pages/SessionCalendarPage';
import CommitteeDirectoryPage from './pages/CommitteeDirectoryPage';
import CouncilMembersPage from './pages/CouncilMembersPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ordinances" element={<OrdinancesPage />} />
            <Route path="/resolutions" element={<ResolutionsPage />} />
            <Route path="/pending-legislation" element={<PendingLegislationPage />} />
            <Route path="/sessions" element={<SessionCalendarPage />} />
            <Route path="/committees" element={<CommitteeDirectoryPage />} />
            <Route path="/council" element={<CouncilMembersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;