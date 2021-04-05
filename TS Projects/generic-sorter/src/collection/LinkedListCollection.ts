class Node {
    next: Node | null = null;
    constructor(public value: number | string | object) { }

}

export class LinkedList {
    head: Node | null = null;

    get length(): number {
        let length = 1;
        if (!this.head) {
            return 0;
        }
        let temp = this.head
        while (temp.next) {
            temp = temp.next;
            length++;
        }
        return length;
    }

    at(index: Number): Node {
        if (!this.head) throw new Error('Index out of bound!')
        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index does not exist')
    }
    add(data: any) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return
        }
        let ptr = this.head;
        while (ptr.next) {
            ptr = ptr.next;
        }
        ptr.next = node; // add Node as next to last node
    }

    compare(leftI: number, rightI: number): boolean {
        if (!this.head) throw new Error('nothing to cover');
        return this.at(leftI).value > this.at(rightI).value
    }

    swap(leftIndex: number, rightIndex: number): void {
        let leftNode = this.at(leftIndex);
        let rightNode = this.at(rightIndex);

        const tempNode = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = tempNode;

    }

    print(): void {
        if (!this.head) {
            return;
        }
        let node: Node | null = this.head
        while (node) {
            console.log(node.value)
            node = node.next;
        }
    }
}