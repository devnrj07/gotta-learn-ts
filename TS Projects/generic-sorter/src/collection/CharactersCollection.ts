export class CharactersCollection {
    constructor(private input: string) { }

    get length(): number {
        return this.input.length;
    }

    get data(): string {
        return this.input;
    }

    compare(leftI: number, rightI: number): boolean {
        return this.input[leftI].toLowerCase() > this.input[rightI].toLowerCase();
    }

    swap(leftI: number, rightI: number): void {
        const characters = this.input.trim().split('');
        
        const tempchar = characters[leftI];
        characters[leftI] = characters[rightI];
        characters[rightI] = tempchar;

        //join back the string and assign it to input
        this.input = characters.join(''); 
    }
}