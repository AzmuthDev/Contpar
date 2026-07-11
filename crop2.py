from PIL import Image

img = Image.open('public/logobosch.jpeg').convert('RGB')
w, h = img.size

# Let's print some rows/columns to see what's happening
print(f"Size: {w}x{h}")
# Find the grey border. Grey border is usually around (150,150,150) to (200,200,200).
# Let's find the first row from top that has a lot of non-white pixels.
def is_white(p):
    return p[0] > 240 and p[1] > 240 and p[2] > 240

min_y = 0
for y in range(h):
    non_white = sum(1 for x in range(w) if not is_white(img.getpixel((x, y))))
    if non_white > w * 0.1: # if more than 10% of pixels are non-white, it's a border or content
        min_y = y
        break

max_y = h - 1
for y in range(h-1, -1, -1):
    non_white = sum(1 for x in range(w) if not is_white(img.getpixel((x, y))))
    if non_white > w * 0.1:
        max_y = y
        break

min_x = 0
for x in range(w):
    non_white = sum(1 for y in range(h) if not is_white(img.getpixel((x, y))))
    if non_white > h * 0.1:
        min_x = x
        break

max_x = w - 1
for x in range(w-1, -1, -1):
    non_white = sum(1 for y in range(h) if not is_white(img.getpixel((x, y))))
    if non_white > h * 0.1:
        max_x = x
        break

print(f"Content bounds: {min_x},{min_y} - {max_x},{max_y}")

# Let's actually crop the image to this bound.
cropped = img.crop((min_x, min_y, max_x, max_y))
cropped.save('public/logobosch_cropped.jpeg')
