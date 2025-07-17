import { Clock3, Loader2 } from 'lucide-react';



export default function TrackingWidget({ position = 2, waitTime = "10-15 mins", testName = "Blood Test", live = true }) {
  const progressPercent = position <= 5 ? (5 - position) * 20 : 0;

  return (
    <div className="bg-white border rounded-xl p-5 shadow-md w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Live Queue Tracking</h3>
        <Clock3 className="w-5 h-5 text-orange-500" />
      </div>

      {/* Test Info */}
      <p className="text-sm text-gray-600 mb-2">Test: <span className="font-medium text-gray-800">{testName}</span></p>

      {/* Position Display */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-4xl font-bold text-orange-500">{position}</span>
        <p className="text-sm text-gray-600">people ahead of you</p>
      </div>

      {/* Estimated Wait Time */}
      <div className="text-sm text-gray-500 mb-2 flex justify-between">
        <span>Estimated wait</span>
        <span className="font-semibold text-gray-700">{waitTime}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
        <div className="h-2 bg-orange-400 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
      </div>

      {/* Live Status */}
      <div className="flex items-center text-xs text-green-600">
        {live ? (
          <>
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Live tracking active
          </>
        ) : (
          <>
            <Loader2 className="w-3 h-3 mr-1 animate-spin" />
            Syncing...
          </>
        )}
      </div>
    </div>
  );
}
