import { removeBackground } from '@imgly/background-removal-node';
import { readFileSync, writeFileSync } from 'fs';

const inputPath = './images/hero2.png';
const outputPath = './images/hero2-nobg.png';

console.log('מסיר רקע מהתמונה...');

const imgData = readFileSync(inputPath);
const blob = new Blob([imgData], { type: 'image/png' });

const result = await removeBackground(blob);
const arrayBuffer = await result.arrayBuffer();
writeFileSync(outputPath, Buffer.from(arrayBuffer));

console.log('נשמר:', outputPath);
