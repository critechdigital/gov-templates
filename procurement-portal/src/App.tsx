import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import BidOpportunities from './pages/BidOpportunities';
import BidDetail from './pages/BidDetail';
import AwardedContracts from './pages/AwardedContracts';
import BACComposition from './pages/BACComposition';
import ProcurementPlan from './pages/ProcurementPlan';
import SupplierRegistration from './pages/SupplierRegistration';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/opportunities" element={<BidOpportunities />} />
          <Route path="/opportunities/:id" element={<BidDetail />} />
          <Route path="/awarded-contracts" element={<AwardedContracts />} />
          <Route path="/bac-composition" element={<BACComposition />} />
          <Route path="/procurement-plan" element={<ProcurementPlan />} />
          <Route path="/supplier-registration" element={<SupplierRegistration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;