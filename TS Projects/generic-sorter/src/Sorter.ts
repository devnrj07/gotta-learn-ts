export class Sorter {
    constructor(private collection: number[] | string) { }

    /**
     * @function sort
     * @return bubble sort the provided array of numbers, strings or LinkedList
     */
    //Improper way to make a class library becasue It can't be extended easily
    sort(): void {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                //typescript guard : instanceof any kind of object value
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                //typescript typeguard : typeof only for primitive types
                if (typeof this.collection === 'string') {
                    //some different algo to sort string!
                }
            }
        }
    }

    /**
     * getter method for read-only access to private data member
     */
    get data(): (number[] | string) {
        return this.collection;
    }
}