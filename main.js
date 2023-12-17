var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    Stack.prototype.push = function (item) {
        this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
function checkExpression(expression) {
    var myStack = new Stack();
    for (var i = 0; i < expression.length; i++) {
        var currentElement = expression[i];
        if (currentElement === "(" || currentElement === "[" || currentElement === "{")
            myStack.push(currentElement);
        else if (currentElement === ")" || currentElement === "]" || currentElement === "}") {
            var openBracket = myStack.pop();
            if (openBracket === "(" && currentElement !== ")" ||
                openBracket === "[" && currentElement !== "]" ||
                openBracket === "{" && currentElement !== "}")
                return "Unbalanced expression!";
        }
    }
    return myStack.size() === 0 ? "Balanced expression!" : "Unbalanced expression!";
}
module.exports = checkExpression;
