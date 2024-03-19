// api.js

const apiUrl = "http://localhost:3000/api";

// Function to fetch all clients
async function getAllClients() {
  try {
    const response = await fetch(`${apiUrl}/clients`);
    if (!response.ok) {
      throw new Error("Failed to fetch clients");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching clients:", error);
  }
}

// Function to fetch a client by ID
async function getClientById(clientId) {
  try {
    const response = await fetch(`${apiUrl}/clients/${clientId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch client");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching client:", error);
  }
}

// Add similar functions for fetching data from other controllers (e.g., reservations, kayaks)

export { getAllClients, getClientById };
