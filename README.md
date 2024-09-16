# Hotel Reservations API

Esta es una API RESTful para gestionar reservas en hoteles. Permite a los usuarios crear, leer, actualizar y eliminar reservas, así como buscar reservas según varios criterios.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [EndPoints](#endpoints)
  - [Crear Reserva](#crear-reserva)
  - [Obtener Todas las Reservas](#obtener-todas-las-reservas)
  - [Obtener Reserva Específica](#obtener-reserva-específica)
  - [Actualizar Reserva](#actualizar-reserva)
  - [Eliminar Reserva](#eliminar-reserva)
  - [Buscar Reservas](#buscar-reservas)


## Características

- Crear, leer, actualizar y eliminar reservas.
- Buscar reservas por hotel, tipo de habitación, número de huéspedes, fechas y estado de la reserva.


## Tecnologías Usadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- Swagger para documentación API

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/hotel-reservations.git
   cd hotel-reservations

2. Instala las dependencias:
    npm install

3. Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y agrega tus configuraciones:


PORT=3000
MONGODB_URI=mongodb://localhost:27017/hotel-reservations
MongoDB debe estar en ejecución.

## USO
Para iniciar el servidor, ejecutar:

node server.js

Acceder a la API en http://localhost:3000/api.

## Endpoints
Crear Reserva
Método: POST
URL: /reservas

Obtener Todas las Reservas
Método: GET
URL: /reservas

Obtener Reserva Específica
Método: GET
URL: /reservas/:id
Descripción: Obtiene una reserva por ID.

Actualizar Reserva
Método: PUT
URL: /reservas/:id

Eliminar Reserva
Método: DELETE
URL: /reservas/:id
Descripción: Elimina una reserva por ID.

Buscar Reservas
Método: GET
URL: /reservas/search

## Parámetros de Consulta
hotel: Nombre del hotel
tipoHabitacion: Tipo de habitación
numeroHuespedes: Número de huéspedes
fechaEntrada: Fecha de entrada (YYYY-MM-DD)
fechaSalida: Fecha de salida (YYYY-MM-DD)
estado: Estado de la reserva (confirmada, cancelada)
# Proyecto4
