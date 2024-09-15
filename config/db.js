//importando bibliotecas
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//lector de variables del archivo env
dotenv.config();

//función asíncrona para conectar a la db
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
