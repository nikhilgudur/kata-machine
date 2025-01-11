export default function in_order_search(head: BinaryNode<number>): number[] {
    return search(head);
}

function search(node: BinaryNode<number>): number[] {
    if (!node.left && !node.right) {
        return [node.value];
    }

    const leftValues = node.left ? search(node.left) : [];
    const curr = node.value;
    const rightValues = node.right ? search(node.right) : [];
    return [...leftValues, curr, ...rightValues];
}
