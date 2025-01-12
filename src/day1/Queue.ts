export default class Queue<T> {
    public length: number;
    public queue: T[];

    constructor() {
        this.queue = [];
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length = this.queue.unshift(item);
    }

    deque(): T | undefined {
        if (this.length) {
            this.length -= 1;
            return this.queue.pop();
        }
        return undefined;
    }

    peek(): T | undefined {
        return this.queue[0];
    }
}
