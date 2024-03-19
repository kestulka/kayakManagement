import { getAllClients, getClientById } from "./api";

// Example usage:
getAllClients().then((clients) => {
  // Handle the retrieved clients data
  console.log(clients);
});

getClientById("clientId").then((client) => {
  // Handle the retrieved client data
  console.log(client);
});
