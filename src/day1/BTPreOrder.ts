export default function pre_order_search(head: BinaryNode<number>): number[] {
    if (!head.left && !head.right) {
        return [head.value];
    }

    const leftValues = head.left ? pre_order_search(head.left) : [];
    const rightValues = head.right ? pre_order_search(head.right) : [];
    const curr = head.value;

    return [curr, ...leftValues, ...rightValues];
}
