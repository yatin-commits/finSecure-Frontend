import { Link, Navigate, Route, Routes } from 'react-router-dom'

import AssetsPage from './pages/assets/AssetsPage'
import BankManagementPage from './pages/finance/BankManagementPage'
import CardManagementPage from './pages/finance/CardManagementPage'
import FinancePage from './pages/finance/FinancePage'
import HrPage from './pages/hr/HrPage'
import InsurancePage from './pages/insurance/InsurancePage'
import InvestmentManagementPage from './pages/finance/InvestmentManagementPage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import ReportsPage from './pages/finance/ReportsPage'
import SalaryProcessingPage from './pages/finance/SalaryProcessingPage'
import TimesheetPage from './pages/timesheet/TimesheetPage'
import TrainingPage from './pages/training/TrainingPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex flex-1 flex-wrap gap-2">
            <Link to="/hr" className="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              HR
            </Link>
            <Link to="/finance" className="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              FINANCE
            </Link>
            <Link to="/training" className="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              TRAINING
            </Link>
            <Link to="/timesheet" className="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              TIMESHEET
            </Link>
            <Link to="/assets" className="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              ASSETS
            </Link>
            <Link to="/insurance" className="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              INSURANCE
            </Link>
            <Link to="/profile" className="rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
              PROFILE
            </Link>
          </nav>

          <Link
            to="/login"
            className="rounded border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white"
          >
            Login
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="hr" element={<HrPage />} />
          <Route path="finance" element={<FinancePage />} />
          <Route path="finance/bank-management" element={<BankManagementPage />} />
          <Route path="finance/investment-management" element={<InvestmentManagementPage />} />
          <Route path="finance/card-management" element={<CardManagementPage />} />
          <Route path="finance/salary-processing" element={<SalaryProcessingPage />} />
          <Route path="finance/reports" element={<ReportsPage />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="timesheet" element={<TimesheetPage />} />
          <Route path="assets" element={<AssetsPage />} />
          <Route path="insurance" element={<InsurancePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/hr" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
