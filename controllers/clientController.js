const Client = require("../models/Client");

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};

async function getAllClients(req, res) {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getClientById(req, res) {
  try {
    const { clientId } = req.params;
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createClient(req, res) {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateClient(req, res) {
  try {
    const { clientId } = req.params;
    const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, {
      new: true,
    });
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteClient(req, res) {
  try {
    const { clientId } = req.params;
    const deletedClient = await Client.findByIdAndDelete(clientId);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json({ message: "Client deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
