from PIL import Image

# The image logobosch.jpeg has been cropped to bounds: 799x447 (from earlier run).
# The armature is on the left. The text "BOSCH" is on the right.
# Let's crop roughly the left 35% of the top part.
img = Image.open('public/logobosch.jpeg').convert('RGB')
w, h = img.size

# The blue block is at the bottom. We need to find the horizontal separator.
# Find where the blue block starts.
# Scan down the middle.
blue_start_y = h
for y in range(h):
    p = img.getpixel((w//2, y))
    if p[0] < 50 and p[1] < 150 and p[2] > 100: # blueish
        blue_start_y = y
        break

print(f"Blue starts at y={blue_start_y}")

# Now we have the top white section: y=0 to blue_start_y
top_section = img.crop((0, 0, w, blue_start_y))
tw, th = top_section.size

# The armature is on the left. Let's find its bounding box.
# Background is white.
min_x = tw
max_x = 0
min_y = th
max_y = 0

for x in range(tw//2): # Only look at left half
    for y in range(th):
        p = top_section.getpixel((x, y))
        # Not white
        if abs(p[0]-255) + abs(p[1]-255) + abs(p[2]-255) > 15:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Armature bounds: {min_x},{min_y} - {max_x},{max_y}")

# Let's add a small padding
pad = 10
crop_box = (max(0, min_x - pad), max(0, min_y - pad), min(tw, max_x + pad), min(th, max_y + pad))
armature = top_section.crop(crop_box)
armature.save('public/bosch-armature.png')
print("Saved bosch-armature.png")
