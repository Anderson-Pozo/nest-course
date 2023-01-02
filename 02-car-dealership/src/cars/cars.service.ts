import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {id: uuid(), brand: "Toyota", model: "Corolla"},
        {id: uuid(), brand: "Suzuki", model: "Civic"},
        {id: uuid(), brand: "Chevrolet", model: "Cheeroke"}
    ];

    findAll(){
        return this.cars;
    }

    findById(id: string){
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${ id } not found`);
        return car;
    }

    create(car: CreateCarDto){
        const newCar: Car = { id: uuid(), ...car}
        this.cars.push(newCar)
        return newCar
    }

    update(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findById(id);

        if (updateCarDto.id && updateCarDto.id !== id) 
            throw new BadRequestException(`Car id ${ updateCarDto.id } is not valid`);

        this.cars = this.cars.map( car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id }
                return carDB
            }
            return car
        })
        
        return carDB
    }

    delete(id:string) {
        const carDB = this.findById(id);
        this.cars = this.cars.filter(car => car.id !== carDB.id)
        return { ok: true, message: `Car with id ${ id  } was deleted` }
    }
}
