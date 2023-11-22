import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const reminders = useSelector((state) => state.reminders.reminders);
  const events = reminders.map((reminder) => ({
    title: reminder.name,
    start: new Date(reminder.startDate),
    end: new Date(reminder.endDate),
  }));

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "20px" }}
      />
    </div>
  );
};

export default CalendarView;
