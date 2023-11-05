
//testing connections 

let message: string = ("hiiiiii peeepppssss");
console.log(message);


/////////////////////////// NEEDS TO DECLARE ALL TYPESSSSSS ///////////////////////////

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
    private static pigNum = 0;
    public name: string;
    public height: number;
    public weight: number;
    public category: keyof typeof PigType;
    public personality: string;

    public dynamicField: DynamicFieldMap[keyof typeof PigType];

    //ading an id???? based on the number of pigs -> private 

    constructor(n: string, h: number, w: number, c: keyof typeof PigType, p: string) {
        this.name = n;
        this.height = h;
        this.weight = w;
        this.category = c;
        this.personality = p;
        this.dynamicField = {} as DynamicFieldMap[keyof typeof PigType];
        Pig.pigNum++;
    }
}
