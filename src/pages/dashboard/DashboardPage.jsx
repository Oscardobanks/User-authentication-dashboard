import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

import './DashboardPage.css'

const DashboardPage = () => {
  return (
    <div className="flex bg-purple-100">
      <Sidebar />
      <div className="flex-1 flex flex-col pt-5 dashboardBody">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;