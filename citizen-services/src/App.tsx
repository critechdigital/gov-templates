import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import ServiceDirectory from './pages/ServiceDirectory';
import AppointmentBooking from './pages/AppointmentBooking';
import ComplaintsFeedback from './pages/ComplaintsFeedback';
import NewsAnnouncements from './pages/NewsAnnouncements';
import Emergency from './pages/Emergency';
import AboutLGU from './pages/AboutLGU';

function App() {
  return (
    <Router basename="/citizen-services">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServiceDirectory />} />
          <Route path="/appointments" element={<AppointmentBooking />} />
          <Route path="/complaints" element={<ComplaintsFeedback />} />
          <Route path="/news" element={<NewsAnnouncements />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/about" element={<AboutLGU />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
