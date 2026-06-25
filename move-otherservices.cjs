const fs = require('fs');
const files = [
  'src/components/SolarPage.jsx',
  'src/components/BiogasPage.jsx',
  'src/components/EVPage.jsx',
  'src/components/SanitationPage.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const osMatch = content.match(/<OtherServices[^>]*\/>/);
  if (!osMatch) return;
  const osStr = osMatch[0];
  
  // Remove existing
  content = content.replace(/\s*<OtherServices[^>]*\/>/, '');
  
  // Find last section
  const sections = [...content.matchAll(/<section/g)];
  if (sections.length > 0) {
    const lastSectionIndex = sections[sections.length - 1].index;
    content = content.slice(0, lastSectionIndex) + osStr + '\n\n      ' + content.slice(lastSectionIndex);
    fs.writeFileSync(file, content);
  }
});
