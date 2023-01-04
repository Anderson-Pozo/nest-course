import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

export const CAR_SEED: Car[] = [
    {
        id: uuid(),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model()
    },
    {
        id: uuid(),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model()
    },
    {
        id: uuid(),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model()
    },
]