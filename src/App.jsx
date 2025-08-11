import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./assets/css/mystyle.css";
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import {
  Introduction, StartHere, PostMan, PayoutIntegrationProcess, CreateOrder,
  OrderStatusQueryAPI, OrderNotificationAPI, MerchantBalanceQueryAPI, BankAccountValidate,
  OPayWalletValidate, BettingProviders, BettingCustomerValidate, SupportedBankList,
  HowtoGenerateRSAkeypair, MDUserGuideNigeria, ErrorCodes, SignatureSample
} from "./pages/index";
import { useTheme } from './context/ThemeContext';

const AppContent = ({ sidebarOpen, toggleSidebar, setSidebarOpen }) => {
  const location = useLocation();
  const { theme } = useTheme(); // Get current theme

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-slate-900 text-gray-200' : 'bg-[#F9FBFC] text-slate-900'}`}>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-gray-800 opacity-80 xl:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <TopNav toggleSidebar={toggleSidebar} />
      <SideNav sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="xl:pt-20 md:pt-15 min-xl:mr-115 md:mr-0 px-5 xl:ml-80 transition-all duration-200 min-sm:pt-16 max-sm:pt-16 pb-50">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/post-man" element={<PostMan />} />
          <Route path="/payout-integration-process" element={<PayoutIntegrationProcess />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/order-status-query-api" element={<OrderStatusQueryAPI />} />
          <Route path="/order-notification-api" element={<OrderNotificationAPI />} />
          <Route path="/merchant-balance-query-api" element={<MerchantBalanceQueryAPI />} />
          <Route path="/bank-account-validate" element={<BankAccountValidate />} />
          <Route path="/opay-wallet-validate" element={<OPayWalletValidate />} />
          <Route path="/betting-providers" element={<BettingProviders />} />
          <Route path="/betting-customer-validate" element={<BettingCustomerValidate />} />
          <Route path="/supported-bank-list" element={<SupportedBankList />} />
          <Route path="/how-to-generate-rsa-key-pair" element={<HowtoGenerateRSAkeypair />} />
          <Route path="/md-user-guide-nigeria" element={<MDUserGuideNigeria />} />
          <Route path="/error-codes" element={<ErrorCodes />} />
          <Route path="/signature-sample" element={<SignatureSample />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <Router>
      <AppContent
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        setSidebarOpen={setSidebarOpen}
      />
    </Router>
  );
};

export default App;
