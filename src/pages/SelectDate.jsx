import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function SelectDate() {
  return (
    <div className="p-4">
      <h2 className="text-xl text-center font-bold mb-4">Choose a Date & Time</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        // events={events}
        // selectable={true}
        // select={handleSlotSelect}
        height="auto"
      />
    </div>
  );
}

