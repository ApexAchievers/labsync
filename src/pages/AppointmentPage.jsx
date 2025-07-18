import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Book A Lab Appointment</h1>
      <AppointmentForm />
    </div>
  );
};

export default AppointmentPage;
