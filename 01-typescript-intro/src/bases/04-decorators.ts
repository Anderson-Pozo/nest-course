class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`NO QUIERO GRITAR`);
    }
    
    speak(){
        console.log(`NO QUIERO HABLAR PUTOS!`);
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        console.log(target);
        return NewPokemon
    }
}

@MyDecorator()
class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase() }!!`);
    }
    
    speak(){
        console.log(`${ this.name } ${ this.name }!`);
    }

    // walk(){
    //     console.log("Im walking");
    // }

}

export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();
// charmander.walk();