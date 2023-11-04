

interface PigServices {
    add(p:Pig): number;

    delete(name: string): number;

    showAll(): Pig[];
}

class Controller implements PigServices{
    pigs: Pig[];

    constructor(){
        this.pigs = []
    }

    add (p: Pig): number{
        this.pigs.push(p);
        console.log("added piggggg")
        return this.pigs.length;
    }

    delete(name: string): number{
        //didnt' delete anything yet
        return this.pigs.length;
    }

    showAll(): Pig[]{
        return this.pigs
    }
}
