from PIL import Image, ImageDraw, ImageFont

img = Image.open('public/marcas-top.png').convert('RGB')
width, height = img.size

# We only care about the left part (Scania logo)
# Let's say left 15% (1080 * 0.15 = 162)
# Background is (10, 18, 48)

left_region = img.crop((0, 0, 160, height))
# Let's find where the non-background pixels are.
data = left_region.getdata()
w, h = left_region.size

bg = (10, 18, 48)
threshold = 10

min_y = h
max_y = 0
for y in range(h):
    for x in range(w):
        p = data[y * w + x]
        if abs(p[0]-bg[0]) + abs(p[1]-bg[1]) + abs(p[2]-bg[2]) > threshold:
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Scania content is between y={min_y} and y={max_y}")

# The logo is probably at the top, text at the bottom.
# Let's just output the pixel density by rows to find the gap.
for y in range(min_y, max_y + 1, 5):
    count = 0
    for x in range(w):
        p = data[y * w + x]
        if abs(p[0]-bg[0]) + abs(p[1]-bg[1]) + abs(p[2]-bg[2]) > threshold:
            count += 1
    print(f"y={y}: {count} pixels")
