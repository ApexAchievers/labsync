import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function SelectDate() {
  return (
    <div className="p-4">
      <h2 className="text-xl text-center font-bold mb-4">
        Choose a Date & Time
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        selectable={true}
        slotDuration="00:30:00"
        // select={handleSlotSelect}
        height={500} 
        slotMinTime="08:00:00" // 
        slotMaxTime="17:00:00" // 
      />

      <div className="flex justify-center mt-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
