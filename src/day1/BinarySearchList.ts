export default function bs_list(haystack: number[], needle: number): boolean {
    let start: number = 0;
    let end: number = haystack.length - 1;

    while (start <= end) {
        let mid: number = Math.floor((start + end) / 2);

        if (haystack[mid] === needle) {
            return true;
        }

        if (haystack[mid] > needle) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}
