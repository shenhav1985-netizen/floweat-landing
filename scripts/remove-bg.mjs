import { removeBackground } from '@imgly/background-removal-node';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const images = [
  {
    src: 'C:/Users/גאיה/OneDrive/Desktop/KjuZtKJqgcs1q62rUj0SN_49a2298d43a5417598296f10821b350f.jpg',
    dst: 'C:/Users/גאיה/floweat-landing/public/images/hero.png',
    label: 'תמונה ראשית (הירו)',
  },
  {
    src: 'C:/Users/גאיה/OneDrive/Desktop/r6XvNXyyKXHM1EgD5IH8w_99410f800cf443e19edc05ac0821493b.jpg',
    dst: 'C:/Users/גאיה/floweat-landing/public/images/about.png',
    label: 'תמונת עלי',
  },
];

for (const img of images) {
  console.log(`מעבד: ${img.label}...`);
  const blob = await removeBackground(img.src);
  const buffer = Buffer.from(await blob.arrayBuffer());
  await writeFile(img.dst, buffer);
  console.log(`✓ נשמר: ${img.dst}`);
}

console.log('\nהושלם! כל הרקעים הוסרו.');
