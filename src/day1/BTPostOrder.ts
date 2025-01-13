export default function post_order_search(head: BinaryNode<number>): number[] {
    if (!head.left && !head.right) {
        return [head.value];
    }

    const leftValues = head.left ? post_order_search(head.left) : [];
    const rightValues = head.right ? post_order_search(head.right) : [];
    const curr = head.value;

    return [...leftValues, ...rightValues, curr];
}
