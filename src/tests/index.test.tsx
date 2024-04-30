function sum(a: number, b: number) {
    return a + b;
}

test('adds 1 + 3 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
