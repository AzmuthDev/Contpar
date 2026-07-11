from PIL import Image

img = Image.open('public/logobosch.jpeg').convert('RGB')
w, h = img.size

blue_start_y = 222
top_section = img.crop((0, 0, w, blue_start_y))
tw, th = top_section.size

# Find the armature bounds by scanning from left to right.
# We look for the first column with non-white pixels (start of armature).
# Then we look for the first column with NO non-white pixels (end of armature).

start_x = -1
end_x = -1

for x in range(tw):
    non_white = sum(1 for y in range(th) if (abs(top_section.getpixel((x, y))[0]-255) + abs(top_section.getpixel((x, y))[1]-255) + abs(top_section.getpixel((x, y))[2]-255)) > 15)
    if non_white > 0 and start_x == -1:
        start_x = x
    elif non_white == 0 and start_x != -1 and end_x == -1:
        end_x = x

# Find vertical bounds of just the armature
min_y = th
max_y = 0
for x in range(start_x, end_x):
    for y in range(th):
        p = top_section.getpixel((x, y))
        if abs(p[0]-255) + abs(p[1]-255) + abs(p[2]-255) > 15:
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Armature tight bounds: {start_x},{min_y} - {end_x},{max_y}")

pad = 5
crop_box = (max(0, start_x - pad), max(0, min_y - pad), min(tw, end_x + pad), min(th, max_y + pad))
armature = top_section.crop(crop_box)

# We want the background to be transparent.
# Let's make it a PNG with alpha channel.
armature = armature.convert("RGBA")
data = armature.getdata()
new_data = []
for item in data:
    # change white to transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append(item)
armature.putdata(new_data)

armature.save('public/bosch-armature.png')
print("Saved transparent bosch-armature.png")
