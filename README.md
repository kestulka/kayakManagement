# **Kayaks CRUD Guide**

## Create a kayak

- **Endpoint:** `/api/kayaks/`
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

- **Endpoint:** `/api/kayaks/`
- **Method:** `GET`
- **Description:** Retrieves all kayaks.

## Read a kayak by ID

- **Endpoint:** `/api/kayaks/:kayakId`
- **Method:** `GET`
- **Description:** Retrieves a kayak by its ID.

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

- **Endpoint:** `/api/clients/`
- **Method:** `POST`
- **Description:** `Creates a new client`
- **Request Body:** `Include the following fields:`

```json
{
  "clientName": "John Doe",
  "clientPhone": "+1234567890"
}
```

## Read All Clients

- **Endpoint:** `/api/clients/`
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
  "clientName": "Updated Name",
  "clientPhone": "+9876543210"
}
```

## Delete a client

- **Endpoint:** `/api/clients/:clientId`
- **Method:** `DELETE`
- **Description:** Deletes an existing client.

# **Reservations CRUD Guide**

## Create a Reservation

- **Endpoint:** `/api/reservations/`
- **Method:** `POST`
- **Description:** `Creates a new reservation`
- **Request Body:** `Include the following fields:`

```json
{
  "kayak_id": "65f993f454749dff575a385f",
  "client_id": "65f9954847aa4e831b3af8da",
  "date": "2024-03-20",
  "time": "10:00"
}
```

## Read All Reservations

- **Endpoint:** `/api/reservations/`
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
  "kayak_id": "65f993f454749dff575a385f",
  "client_id": "65f9954847aa4e831b3af8da",
  "date": "2024-03-20",
  "time": "09:00"
}
```

## Delete a Reservation

- **Endpoint:** `/api/reservations/:reservationId`
- **Method:** `DELETE`
- **Description:** Deletes an existing reservation.
