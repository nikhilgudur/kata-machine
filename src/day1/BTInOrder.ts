export default function in_order_search(head: BinaryNode<number>): number[] {
    if (!head.left && !head.right) {
        return [head.value];
    }

    const leftValues = head.left ? in_order_search(head.left) : [];
    const curr = head.value;
    const rightValues = head.right ? in_order_search(head.right) : [];
    return [...leftValues, curr, ...rightValues];
}
