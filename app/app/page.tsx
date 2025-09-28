'use client';
import { Home } from 'lucide-react';
function ProgressInline({ value = 0, className = "" }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div className="h-full bg-gray-900 rounded-full" style={{ width: `${clamped}%` }} />
    </div>
  );
}
export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white">
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Home className="shrink-0" />
          <div className="flex-1">
            <h1 className="text-base font-semibold">Westwater Renovation</h1>
            <p className="text-xs text-gray-500">Contractor Dashboard</p>
          </div>
          <span className="text-xs text-gray-600">65%</span>
        </div>
        <div className="max-w-md mx-auto px-4 pb-3">
          <ProgressInline value={65} className="h-2" />
        </div>
      </div>
      <main className="max-w-md mx-auto p-4 space-y-4">
        <div className="p-4 rounded-xl border shadow">
          <h3 className="font-semibold mb-1">Schedule</h3>
          <p className="text-sm text-gray-600">Next milestone: Electrical inspection</p>
        </div>
      </main>
    </div>
  );
}