const fs = require('fs');
const path = require('path');

const src_html = path.join(__dirname, 'extracted', 'index.html');
const dst_html = path.join(__dirname, 'index.html');
const src_assets = path.join(__dirname, 'extracted', 'assets');
const dst_assets = path.join(__dirname, 'assets');

let content = fs.readFileSync(src_html, 'utf8');

// Strip bis_size
content = content.replace(/\s*bis_size='[^']*'/g, '');
content = content.replace(/\s*bis_size="[^"]*"/g, '');
content = content.replace(/\s*bis_id='[^']*'/g, '');
content = content.replace(/\s*bis_id="[^"]*"/g, '');

const old_config = `tailwind.config = {
theme: {
extend: {
colors: {
brand: {
yellow: '#FACC15', // Matches the industrial yellow
dark: '#0A0A0A',   // Deep black/gray
gray: '#171717',   // Slightly lighter dark
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}`;

const new_config = `tailwind.config = {
theme: {
extend: {
colors: {
brand: {
yellow: '#CC361E', // Sinopia
dark: '#122435',   // Prussian Blue
gray: '#1A334B',   // Lighter Prussian Blue
},
white: '#EFEFEF', // Anti-flash
gray: {
  50: '#EFEFEF', 
  100: '#B3B3B3', // Silver
  200: '#B3B3B3',
  300: '#B3B3B3',
  400: '#B3B3B3', 
  500: '#8c9fb1', 
  600: '#122435', // Prussian Blue
  700: '#1A334B',
  800: '#1A334B', 
  900: '#122435',
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}`;

content = content.replace(old_config, new_config);
content = content.replace(/background: #1a1a1a;/g, 'background: #122435;');
content = content.replace(/background: #333;/g, 'background: #1A334B;');
content = content.replace(/background: #444;/g, 'background: #B3B3B3;');
content = content.replace(/radial-gradient\(#333 1px/g, 'radial-gradient(#1A334B 1px');

fs.writeFileSync(dst_html, content, 'utf8');

function copyRecursiveSync(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(dst_assets)) {
  fs.rmSync(dst_assets, { recursive: true, force: true });
}
copyRecursiveSync(src_assets, dst_assets);

console.log("Generated HTML and copied assets successfully!");
