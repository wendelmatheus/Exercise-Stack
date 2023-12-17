const checkExpression = require('./main');

test('Testing balanced expression 1', () => {
    expect(checkExpression("(a+b)×c")).toBe("Balanced expression!");
});

test('Testing balanced expression 2', () => {
    expect(checkExpression("{[a+b]×c}")).toBe("Balanced expression!");
});

test('Testing unbalanced expression 1', () => {
    expect(checkExpression("(a+b×c")).toBe("Unbalanced expression!");
});

test('Testing unbalanced expression 2', () => {
    expect(checkExpression("{[a+b×c}")).toBe("Unbalanced expression!");
});

test('Testing unbalanced expression 3', () => {
    expect(checkExpression("{[(a+b×c})]")).toBe("Unbalanced expression!");
});