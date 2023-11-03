
//testing connections 

let message: string = ("hiiiiii peeepppssss");
console.log(message);

// PIG Categories

enum PigType{
    Grey = 'Grey',
    Chestnut = 'Chestnut',
    White = 'White',
    Black = 'Black'
}

// Interfaces for dynamic field (based on the categoroes)
interface DynamicFieldMap {
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
class Pig {
    name: string;
    height: number;
    weight: number;
    category: keyof typeof PigType;
    personality: string;

    dynamicField: DynamicFieldMap[keyof typeof PigType];

    constructor(n: string, h: number, w: number, c: keyof typeof PigType, p: string) {
        this.name = n;
        this.height = h;
        this.weight = w;
        this.category = c;
        this.personality = p;
        this.dynamicField = {} as DynamicFieldMap[keyof typeof PigType];
    }
}