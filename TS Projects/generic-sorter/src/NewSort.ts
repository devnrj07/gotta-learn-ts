import { ArrayLikeData, Collection } from "./Collection";

export class NewSort {
    constructor(private data: ArrayLikeData) { }

    sort(): void {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.data.compare(j, j + 1)) {
                    this.data.swap(j, j + 1)
                }
            }
        }
    }
}
