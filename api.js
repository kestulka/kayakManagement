async function getAllClients() {
  try {
    const response = await fetch("http://localhost:3000/api/clients");
    if (!response.ok) {
      throw new Error("Failed to fetch clients");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching clients:", error);
  }
}

async function getClientById(clientId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/clients/${clientId}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch client");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching client:", error);
  }
}

export { getAllClients, getClientById };
