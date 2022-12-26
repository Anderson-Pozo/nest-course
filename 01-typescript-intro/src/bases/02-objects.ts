
export const pokemonsId = [1,2,4,5,6,7,12,33];

let somePokemons : Pokemon[] ;


somePokemons = [
    {id: 12, name: 'Entei', age: 12}
]

interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
}

export const pichu : Pokemon = {
    id: 12,
    name: "Pichu"
}

console.log(pichu);