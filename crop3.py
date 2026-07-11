from PIL import Image

img = Image.open('public/logobosch.jpeg').convert('RGB')
w, h = img.size

# The armature is basically a square on the left of the top section.
# We know the top section is 222 pixels high.
# Let's crop a 222x222 square from the top left.
armature = img.crop((0, 0, 222, 222))
# Convert to RGBA for transparent background
armature = armature.convert("RGBA")
data = armature.getdata()
new_data = []
for item in data:
    if item[0] > 230 and item[1] > 230 and item[2] > 230:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)
armature.putdata(new_data)
armature.save('public/bosch-armature.png')
print("Saved bosch-armature.png")
