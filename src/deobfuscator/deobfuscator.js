import replaceHexadecimalVisitor from "../visitors/replaceHexadecimalVisitor.js";
import beautify from "js-beautify";
import * as parser from "@babel/parser";
import _generate from "@babel/generator";
const generate = _generate.default;


const defaultVisitors = [
    replaceHexadecimalVisitor,
]

const deobfuscate = (src) => {
    const ast = parser.parse(src);
    
    defaultVisitors.map((visitor => visitor(ast)));

    let deobfuscatedCode = generate(ast, {
        comments: false,
    }).code;

    return beautify(deobfuscatedCode, {
        indent_size: 2,
        space_in_empty_paren: true,
    });
};

export default deobfuscate;