export class Option {
    public readonly value: string;
    public readonly owner: Player;
    public readonly isWinner: boolean;
    
    constructor(value: string) {
        this.value = value;
        this.owner = null;
        this.isWinner = false;
    }
}

export class Player {
    public readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}

export enum Difficulty {
    Easy = 3,
    Medium = 4,
    Hard = 5
}