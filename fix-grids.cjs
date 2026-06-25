const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

let changed = 0;
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  
  const original = content;
  content = content.replace(/<div style=\{\{[\s\S]*?\}\} className="about-hero-grid">/g, '<div className="about-hero-grid">');
  
  if (content !== original) {
    fs.writeFileSync(p, content);
    changed++;
    console.log(`Updated ${f}`);
  }
});
console.log(`Done, updated ${changed} files`);
