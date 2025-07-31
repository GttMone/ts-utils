export function getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
    return Math.hypot(x2 - x1, y2 - y1, z2 - z1);
}
