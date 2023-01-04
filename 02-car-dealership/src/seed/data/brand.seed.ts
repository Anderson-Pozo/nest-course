import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";
import { Brand } from "src/brands/entities/brand.entity";

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: faker.vehicle.model(),
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: faker.vehicle.model(),
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: faker.vehicle.model(),
        createdAt: new Date().getTime()
    },

]