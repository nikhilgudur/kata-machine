export default function two_crystal_balls(breaks: boolean[]): number {
    let i: number = 0;
    let len: number = breaks.length;
    let jump: number = Math.floor(Math.sqrt(len));

    for (; i < len; i += jump) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jump;

    for (; i <= i + jump && i < len; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
