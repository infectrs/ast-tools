import _traverse from "@babel/traverse";
const traverse = _traverse.default;

const replaceHexadecimalVisitor = (ast) => {
    traverse(ast, {
        StringLiteral(path) {
            if (path.node.extra) {
                delete path.node.extra;
            } else {
                return;
            }
        },
        NumericLiteral(path) {
            if (path.node.extra) {
                delete path.node.extra;
            } else {
                return;
            }
        }
    })
}

export default replaceHexadecimalVisitor;