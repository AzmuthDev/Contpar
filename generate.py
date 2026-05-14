import re
import os
import shutil

src_html = r"c:\Users\JEduardo\OneDrive\Documentos\Contpar\extracted\index.html"
dst_html = r"c:\Users\JEduardo\OneDrive\Documentos\Contpar\index.html"
src_assets = r"c:\Users\JEduardo\OneDrive\Documentos\Contpar\extracted\assets"
dst_assets = r"c:\Users\JEduardo\OneDrive\Documentos\Contpar\assets"

with open(src_html, 'r', encoding='utf-8') as f:
    content = f.read()

# Strip bis_size
content = re.sub(r"\s*bis_size='[^']*'", '', content)
content = re.sub(r'\s*bis_size="[^"]*"', '', content)
content = re.sub(r"\s*bis_id='[^']*'", '', content)
content = re.sub(r'\s*bis_id="[^"]*"', '', content)

old_config = """tailwind.config = {
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
}"""

new_config = """tailwind.config = {
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
}"""

content = content.replace(old_config, new_config)
content = content.replace('background: #1a1a1a;', 'background: #122435;')
content = content.replace('background: #333;', 'background: #1A334B;')
content = content.replace('background: #444;', 'background: #B3B3B3;')
content = content.replace('radial-gradient(#333 1px', 'radial-gradient(#1A334B 1px')

with open(dst_html, 'w', encoding='utf-8') as f:
    f.write(content)

if os.path.exists(dst_assets):
    shutil.rmtree(dst_assets)
shutil.copytree(src_assets, dst_assets)

print("Generated HTML and copied assets successfully!")
