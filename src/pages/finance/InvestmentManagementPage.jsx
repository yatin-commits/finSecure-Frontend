import { Link } from 'react-router-dom'

export default function InvestmentManagementPage() {
  return (
    <div className="space-y-6 p-6">
      <Link
        to="/finance"
        className="inline-block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700"
      >
        Back to Finance Home
      </Link>
      <h1 className="text-2xl font-semibold text-slate-900">Investment Management</h1>
    </div>
  );
}
