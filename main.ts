interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
} 

class Stack<T> implements IStack<T> {

    private storage: T[] = []

    push(item: T): void {
        this.storage.push(item)
    }

    pop(): T | undefined {
        return this.storage.pop()
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1]
    }

    size(): number {
        return this.storage.length
    } 
}

function checkExpression(expression: string): string {
    const myStack = new Stack();

    for(let i = 0; i < expression.length; i++) {
        const currentElement = expression[i]

        if(currentElement === "(" || currentElement === "[" || currentElement === "{") myStack.push(currentElement)
        else if(currentElement === ")" || currentElement === "]" || currentElement === "}") {
            const openBracket = myStack.pop()

            if(openBracket === "(" && currentElement !== ")" ||
               openBracket === "[" && currentElement !== "]" ||
               openBracket === "{" && currentElement !== "}"
            ) return "Unbalanced expression!"
        }
    }
    return myStack.size() === 0 ? "Balanced expression!" : "Unbalanced expression!"  
}

module.exports = checkExpression;