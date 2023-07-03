interface Duck {
    name : string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck : Duck = {
    name:'Huey',
    numLegs: 2,
    makeSound: (Sound : any) => console.log(Sound)
}

const duck2 : Duck = {
    name:'Huey',
    numLegs: 2,
    makeSound: (Sound : any) => console.log(Sound)
}