import { getAllClients, getClientById } from "./api";

// Example usage:
getAllClients().then((clients) => {
  // Handle the retrieved clients data
  console.log(clients);
});

getAllClientById().then((clients) => {
  // Handle the retrieved clients data
  console.log(clients);
});
// Similar usage for other functions like getClientById
