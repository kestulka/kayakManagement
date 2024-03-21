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
    initialView: "dayGridMonth",
  });
  calendar.render();
});
