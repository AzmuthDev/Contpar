const fs = require('fs');
const path = require('path');

const src_html = path.join(__dirname, 'extracted', 'index.html');
const dst_html = path.join(__dirname, 'index.html');

let content = fs.readFileSync(src_html, 'utf8');

// Strip bis_size and bis_id
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
fontFamily: {
  sans: ['Roboto', 'Arial', 'sans-serif'],
  geist: ['Roboto', 'Arial', 'sans-serif'],
  'space-grotesk': ['Roboto', 'Arial', 'sans-serif']
},
colors: {
brand: {
yellow: '#E20015', // Bosch Red (CTA)
dark: '#003B4C',   // Bosch Blue (Hero)
gray: '#191919',   // Antracite (Footer)
antracite: '#191919',
light: '#F8F9FA',
white: '#FFFFFF'
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}`;

content = content.replace(old_config, new_config);

// Backgrounds
content = content.replace(/background: #1a1a1a;/g, 'background: #003B4C;');
content = content.replace(/background: #333;/g, 'background: #191919;');
content = content.replace(/background: #444;/g, 'background: #2A2A2A;');
content = content.replace(/radial-gradient\(#333 1px/g, 'radial-gradient(#191919 1px');

// Border radius: Change rounded-full, rounded-2xl, rounded-3xl to rounded
content = content.replace(/rounded-full/g, 'rounded');
content = content.replace(/rounded-3xl/g, 'rounded');
content = content.replace(/rounded-2xl/g, 'rounded');
content = content.replace(/rounded-xl/g, 'rounded');

// Shadows: remove or reduce shadows
content = content.replace(/shadow-2xl/g, 'shadow-sm');
content = content.replace(/shadow-xl/g, 'shadow-sm');
content = content.replace(/shadow-lg/g, 'shadow-sm');
content = content.replace(/shadow-md/g, 'shadow-sm');

// Typography: use antracite for main text instead of gray-500/600/700
content = content.replace(/text-gray-400/g, 'text-gray-500'); 
content = content.replace(/text-gray-500/g, 'text-[#2A2A2A]');
content = content.replace(/text-gray-600/g, 'text-[#191919]');
content = content.replace(/text-gray-700/g, 'text-[#191919]');
content = content.replace(/text-brand-dark/g, 'text-[#191919]'); // Ensures headings are antracite too

// Backgrounds Claros: replace gray-50 with F8F9FA
content = content.replace(/bg-gray-50/g, 'bg-[#F8F9FA]');

fs.writeFileSync(dst_html, content, 'utf8');

console.log("Bosch theme applied successfully!");
