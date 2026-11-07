export default class User{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }
}