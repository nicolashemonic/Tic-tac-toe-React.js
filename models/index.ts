export class Option {
    public readonly value: string;
    public readonly symbol: string;
    public readonly isWinner: boolean;
    
    constructor(value: string) {
        this.value = value;
        this.symbol = "";
        this.isWinner = false;
    }
}

export class Player {
    public readonly id: number;
    public readonly symbol: string;

    constructor(id: number, symbol: string) {
        this.id = id;
        this.symbol = symbol;
    }
}