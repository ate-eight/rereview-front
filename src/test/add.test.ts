function add(...args: number[]) {
    return args.reduce((a, b) => a + b, 0);
}

import { describe, it, expect } from 'vitest';

describe('test', () => {
    test('adds two numbers together', () => {
        expect(add(1, 2)).toBe(3);
    }),
        test('does not add anything when no numbers are provided', () => {
            expect(add()).toBe(0);
        });
});
