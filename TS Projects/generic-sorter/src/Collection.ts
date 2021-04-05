export interface ArrayLikeData {
    length: number;
    compare(leftI: number, rightI: number): boolean;
    swap(leftI: number, rightI: number): void;
}

export class Collection {
    constructor(private collection: number[]) {

    }
    get data() {
        return this.collection;
    }

    get length(): number {
        return this.collection.length;

    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.collection[leftIndex] > this.collection[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = temp;
    }
}