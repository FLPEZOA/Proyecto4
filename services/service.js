// service.js

class Service {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const cleaningService = new Service('Limpieza diaria', 20);
const breakfastService = new Service('Desayuno incluido', 15);
const airportTransferService = new Service('Transfer al aeropuerto', 30);

// Lista de todos los servicios
const servicesList = [
    cleaningService,
    breakfastService,
    airportTransferService
];

// Método para obtener todos los servicios
const getAllServices = () => {
    return servicesList;
};

// Método para obtener un servicio específico por nombre (opcional)
const getServiceByName = (name) => {
    return servicesList.find(service => service.name.toLowerCase() === name.toLowerCase());
};

// Exportar los servicios y funciones
module.exports = {
    cleaningService,
    breakfastService,
    airportTransferService,
    getAllServices,
    getServiceByName,
    Service
};
// Exportar los servicios
module.exports = {
    cleaningService,
    breakfastService,
    Service
};
