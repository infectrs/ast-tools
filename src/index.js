import fs from "fs";
import deobfuscate from "./deobfuscator/deobfuscator.js";

const inputPath = "assets/input.js";
const outputPath = "assets/output.js";

const inputCode = fs.readFileSync(inputPath, "utf-8");

console.log(`Deobfuscating source from ${inputPath}`)

const deobfuscatedCode = deobfuscate(inputCode);

fs.writeFileSync(outputPath, deobfuscatedCode);

console.log(`Succesfully deobfuscated! Saved to ${outputPath}`);