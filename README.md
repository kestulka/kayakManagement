# **Kayaks CRUD Guide**

## Create a kayak

- **Endpoint:** `/api/kayaks`
- **Method:** `POST`
- **Description:** `Creates a new kayak`
- **Request Body:** `Include the following fields:`

```json
{
  "name": "Example Kayak",
  "type": "Single",
  "availability": true
}
```

## Read All Kayaks

- **Endpoint:** `/api/kayaks`
- **Method:** `GET`
- **Description:** Retrieves all kayaks.

## Read a kayak by ID

- **Endpoint:** `/api/kayaks/:kayakId`
- **Method:** `GET`
- **Description:** Retrieves a reservation by its ID.

## Update a kayak

- **Endpoint:** `/api/kayaks/:kayakId`
- **Method:** `PUT`
- **Description:** Updates an existing kayak.
- **Request Body:** `Include the following fields:`

```json
{
  "name": "Updated Kayak Name",
  "type": "Double",
  "availability": false
}
```

## Delete a kayak

- **Endpoint:** `/api/kayaks/:kayakId`
- **Method:** `DELETE`
- **Description:** Deletes an existing kayak.

# **Clients CRUD Guide**

## Create a Client

- **Endpoint:** `/api/clients`
- **Method:** `POST`
- **Description:** `Creates a new client`
- **Request Body:** `Include the following fields:`

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890"
}
```

## Read All Clients

- **Endpoint:** `/api/clients`
- **Method:** `GET`
- **Description:** Retrieves all clients.

## Read a client by ID

- **Endpoint:** `/api/clients/:clientId`
- **Method:** `GET`
- **Description:** Retrieves a client by its ID.

## Update a client

- **Endpoint:** `/api/clients/:clientId`
- **Method:** `PUT`
- **Description:** Updates an existing client.
- **Request Body:** `Include the following fields:`

```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "+9876543210"
}
```

## Delete a client

- **Endpoint:** `/api/clients/:clientId`
- **Method:** `DELETE`
- **Description:** Deletes an existing client.

# **Reservations CRUD Guide**

## Create a Reservation

- **Endpoint:** `/api/reservations`
- **Method:** `POST`
- **Description:** `Creates a new reservation`
- **Request Body:** `Include the following fields:`

```json
{
  "kayak_id": "609c6e51b0cceb001f3445e5",
  "client_id": "609c6e51b0cceb001f3445e6",
  "date": "2024-03-20",
  "time": "10:00"
}
```

## Read All Reservations

- **Endpoint:** `/api/reservations`
- **Method:** `GET`
- **Description:** Retrieves all reservations.

## Read a Reservation by ID

- **Endpoint:** `/api/reservations/:reservationId`
- **Method:** `GET`
- **Description:** Retrieves a reservation by its ID.

## Update a Reservation

- **Endpoint:** `/api/reservations/:reservationId`
- **Method:** `PUT`
- **Description:** Updates an existing reservation.
- **Request Body:** `Include the following fields:`

```json
{
  "kayak_id": "609f2c2b0a09fe0a3e2f6e56",
  "client_id": "609f2c2b0a09fe0a3e2f6e57",
  "date": "2024-03-20",
  "time": "09:00"
}
```

## Delete a Reservation

- **Endpoint:** `/api/reservations/:reservationId`
- **Method:** `DELETE`
- **Description:** Deletes an existing reservation.
