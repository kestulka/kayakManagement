async function fetchAndDisplayReservations() {
  try {
    const reservationsResponse = await fetch(
      "http://localhost:3000/api/reservations",
    );
    const reservations = await reservationsResponse.json();

    if (reservations.length === 0) {
      console.error("No reservations found");
      return;
    }

    let reservationsHTML = "<h1> Reservations List </h1>";

    for (const reservation of reservations) {
      const kayakResponse = await fetch(
        `http://localhost:3000/api/kayaks/${reservation.kayak_id}`,
      );
      const kayak = await kayakResponse.json();

      const clientResponse = await fetch(
        `http://localhost:3000/api/clients/${reservation.client_id}`,
      );
      const client = await clientResponse.json();

      reservationsHTML += `
    <div class="reservation-item">
    <h5>Reservation ID: ${reservation._id}</h5>
  
    <ul>
      <li> Date: ${new Date(reservation.date).toLocaleDateString()}</li>
      <li> Time: ${reservation.time}</li>
      <li> Kayak: ${kayak.name}</li>
      <li> Client: ${client.clientName}</li>
      <li> Client Phone: ${client.clientPhone}</li>
    </ul>
    <button class="delete-button" data-reservation-id="${
      reservation._id
    }">Delete</button>
    </div>
    `;
    }

    document.getElementById("reservations-info").innerHTML = reservationsHTML;

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", deleteReservation);
    });
  } catch (error) {
    console.error("error fetching reservations", error);
  }
}

async function deleteReservation(event) {
  const reservationId = event.target.dataset.reservationId;

  const confirmDelete = confirm("You sure about deleting this reservation?");
  if (!confirmDelete) {
    return;
  }

  try {
    const deleteResponse = await fetch(
      `http://localhost:3000/api/reservations/${reservationId}`,
      {
        method: "DELETE",
      },
    );

    if (deleteResponse.ok) {
      event.target.parentNode.remove();
      console.log("Reservation deleted successfully");
    } else {
      console.error("Failed to delete reservation.");
    }
  } catch (error) {
    console.error("Error deleting reservation:", error);
  }
}

fetchAndDisplayReservations();
