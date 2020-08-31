export const MathUtils = {
    lerp: (a, b, n) => Math.round(((1 - n) * a + n * b) * 1e3) / 1e3,
    smoothstep: (x, a, b) => (x - a) / (b - a),
    cycle: (cur, min, max, step) => (cur + step > max) ? min : cur + step,
    map: (val, a, b, c, d) => (val - a) * (d - c) / (b - a) + c,
    clamp: (min, val, max) => Math.min(Math.max(min, val), max)
}