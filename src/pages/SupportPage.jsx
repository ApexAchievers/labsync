// src/pages/Support.jsx
import React from "react";

const Support = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🆘 Support</h1>

      <p className="mb-6">
        We're here to help! Whether you're having trouble booking a test,
        accessing your results, or just have a question — our team is ready to
        assist you.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 Frequently Asked Questions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Booking lab tests</li>
          <li>Receiving your test results</li>
          <li>Technician schedules</li>
          <li>Cancelling or rescheduling a test</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📧 Need more help?</h2>
        <p>Email us at: <a href="mailto:support@labsync.com" className="text-blue-600 underline">support@labsync.com</a></p>
        <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours on weekdays.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💬 Live Chat</h2>
        <p>Click the chat icon at the bottom right to speak with us in real time.</p>
        <p className="text-sm text-gray-500">Available: Mon–Fri, 9:00 AM – 5:00 PM</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">🏥 Urgent Medical Concerns</h2>
        <p>Please contact your healthcare provider directly. LabSync is not a replacement for emergency medical services.</p>
      </div>
    </div>
  );
};

export default Support;
