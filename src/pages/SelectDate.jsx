import React, { useEffect, useState } from 'react';
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = globalizeLocalizer(globalize);

export default function SelectDate() {
  const [events, setEvents] = useState([]);

  // Fetch booked appointments from backend
  useEffect(() => {
    async function fetchBooked() {
      try {
        const res = await fetch('/api/booked'); // Replace with your actual API
        const data = await res.json();
        setEvents(data); // Ensure backend returns [{ start: ..., end: ..., title: ... }]
      } catch (err) {
        console.error('Error fetching bookings:', err);
      }
    }

    fetchBooked();
  }, []);

  // Helper to check if slot is already booked
  const isSlotBooked = (start, end) => {
    return events.some(
      (event) =>
        (start >= new Date(event.start) && start < new Date(event.end)) ||
        (end > new Date(event.start) && end <= new Date(event.end))
    );
  };

  // Handle user click on time slot
  const handleSelectSlot = ({ start, end }) => {
    if (isSlotBooked(start, end)) {
      alert('This slot is already booked.');
      return;
    }

    // Call backend API to book this slot
    fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ start, end }),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Appointment booked!');
        setEvents((prev) => [...prev, { start, end, title: 'Booked' }]);
      })
      .catch(() => alert('Booking failed.'));
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Select a Date and Time
      </h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          step={30} // 30-minute intervals
          timeslots={2} // splits each hour into 2 clickable slots
          defaultView="week"
          views={['day', 'week']}
          style={{ height: 400 }}
        />
      </div>

      <div className="text-center mt-4">
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
