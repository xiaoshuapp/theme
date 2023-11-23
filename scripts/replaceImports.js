import {globby} from 'globby';
import fs from 'fs';

const replaceImports = async () => {
  const files = await globby(['dist/**/*.mjs', 'dist/**/*.cjs']);

  files.forEach(async (file) => {
    const content = fs.readFileSync(file, 'utf8');
    let replacedContent = content.replace(/import\s+["'](.+?)\.scss["']/g, 'import "$1.css"');
    replacedContent = replacedContent.replace(/require\s*\(["'](.+?)\.scss["']\)/g, 'require("$1.css")');

    await fs.promises.writeFile(file, replacedContent, 'utf8');
  });
};

replaceImports();