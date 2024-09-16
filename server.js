const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const reservationRoutes = require('./routes/reservas');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.use(bodyParser.json());

    app.use('/api/reservas', reservationRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};
startServer();