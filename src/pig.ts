
// PIG Categories

export enum PigType{
    Grey = 'Grey',
    Chestnut = 'Chestnut',
    White = 'White',
    Black = 'Black'
}

// Interfaces for dynamic field (based on the categoroes)
export interface DynamicFieldMap {
    [PigType.Grey]: {
        Swimming: number;
    };
    [PigType.Chestnut]: {
        Language: string;
    };
    [PigType.White]: {
        Running: number;
    };
    [PigType.Black]: {
        Strength: number;
    };
}

// PIG Class
export class Pig {
    public id: number;
    public Name: string;
    public Height: number;
    public Weight: number;
    public Category: keyof typeof PigType;
    public Personality: string;
    public Breed: string;

    public dynamicField: DynamicFieldMap[keyof typeof PigType];

    //ading an id???? based on the number of pigs -> private 

    constructor(n: string, h: number, w: number, c: keyof typeof PigType, p: string, b: string, id: number) {
        this.Name = n;
        this.Height = h;
        this.Weight = w;
        this.Category = c;
        this.Personality = p;
        this.Breed = b;
        this.dynamicField = {} as DynamicFieldMap[keyof typeof PigType];
        this.id = id;
    }
}


/// BREEDSS

export const greyBreeds: string[] = ['grey'];
export const whiteBreeds: string[] = ['white'];
export const chestnutBreeds: string[] = ['chestnuttt'];
export const blackBreeds: string[] = ['blackk'];