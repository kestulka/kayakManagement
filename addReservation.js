document
  .getElementById("confirmReservationBtn")
  .addEventListener("click", function () {
    const date = document.getElementById("dateInput").value;
    const time = document.getElementById("timeInput").value;
    const kayakType = document.getElementById("kayakSelect").value;
    const clientName = document.getElementById("clientNameInput").value;
    const clientPhone = document.getElementById("clientPhoneInput").value;
  });
