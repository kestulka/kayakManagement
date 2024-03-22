document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    eventSources: [
      {
        url: "http://localhost:3000/api/reservations",
        method: "GET",
        color: "red",
        textColor: "black",
      },
    ],
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    aspectRatio: 2,
    initialView: "dayGridMonth",
  });
  calendar.render();
});
