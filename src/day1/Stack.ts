export default class Stack<T> {
    public length: number;
    public stack: T[];

    constructor() {
        this.stack = [];
        this.length = 0;
    }

    push(item: T): void {
        this.stack[this.length] = item;
        this.length++;
    }
    pop(): T | undefined {
        if (this.length) {
            this.length--;
            return this.stack.pop();
        }

        return undefined;
    }
    peek(): T | undefined {
        return this.stack[this.length - 1];
    }
}
