import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BankManagementPage() {
  const [updateCount, setUpdateCount] = useState(0)

  const bankDetails = {
    accountHolderName: 'John Doe',
    accountNumber: 'XXXX XXXX 1234',
    ifscCode: 'BANK0001234',
    lastUpdated: '14 Apr 2026',
  }

  const handleUpdate = () => {
    if (updateCount < 3) {
      setUpdateCount(updateCount + 1)
    }
  }

  return (
    <div className="space-y-8 p-6">
      <Link
        to="/finance"
        className="inline-block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700"
      >
        Back to Finance Home
      </Link>

      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Bank Management</h1>
        <p className="mt-1 text-sm text-slate-600">
          Add, update, and view bank account details.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-lg border border-slate-300 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Add Bank Account</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Account holder name"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Account number"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="IFSC code"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <button
              type="button"
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              Save Account
            </button>
          </div>
        </section>

        <section className="rounded-lg border border-slate-300 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Update Bank Account</h2>
          <p className="mb-4 text-sm text-slate-600">
            Updated today: {updateCount}/3
          </p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Update account holder name"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Update account number"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Update IFSC code"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none"
            />
            <button
              type="button"
              onClick={handleUpdate}
              disabled={updateCount >= 3}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {updateCount >= 3 ? 'Limit Reached' : 'Update Account'}
            </button>
          </div>
        </section>
      </div>

      <section className="rounded-lg border border-slate-300 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Bank Details</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Account Holder Name</p>
            <p className="mt-1 font-medium text-slate-900">{bankDetails.accountHolderName}</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Account Number</p>
            <p className="mt-1 font-medium text-slate-900">{bankDetails.accountNumber}</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">IFSC Code</p>
            <p className="mt-1 font-medium text-slate-900">{bankDetails.ifscCode}</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Last Updated</p>
            <p className="mt-1 font-medium text-slate-900">{bankDetails.lastUpdated}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
