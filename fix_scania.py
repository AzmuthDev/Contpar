from PIL import Image, ImageDraw, ImageFont
import os

img = Image.open('public/marcas-top.png').convert('RGB')
draw = ImageDraw.Draw(img)

bg_color = (10, 18, 48)

# Erase the corrupted text
draw.rectangle([(20, 160), (160, 190)], fill=bg_color)

# Draw ESCANIA
try:
    font = ImageFont.truetype("arialbd.ttf", 18)
except IOError:
    try:
        font = ImageFont.truetype("arial.ttf", 18)
    except IOError:
        font = ImageFont.load_default()

text = "SCANIA"
bbox = draw.textbbox((0, 0), text, font=font, stroke_width=1)
text_w = bbox[2] - bbox[0]

# Scania logo is roughly between x=40 and x=120, let's say center is 85.
center_x = 85
x = center_x - (text_w / 2)
y = 164

draw.text((x, y), text, font=font, fill=(200, 210, 230), stroke_width=1, stroke_fill=(200, 210, 230)) # Light blue-gray to match metallic logos

img.save('public/marcas-top.png')
print("Fixed text")
