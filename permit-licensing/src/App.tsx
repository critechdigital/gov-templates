import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import BusinessPermit from './pages/BusinessPermit';
import BuildingPermit from './pages/BuildingPermit';
import ApplicationTracker from './pages/ApplicationTracker';
import Requirements from './pages/Requirements';
import FeeSchedule from './pages/FeeSchedule';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/business-permit" element={<BusinessPermit />} />
          <Route path="/building-permit" element={<BuildingPermit />} />
          <Route path="/tracker" element={<ApplicationTracker />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/fee-schedule" element={<FeeSchedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;