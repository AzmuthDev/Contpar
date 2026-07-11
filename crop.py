from PIL import Image

img = Image.open('public/logobosch.jpeg').convert('RGB')
w, h = img.size
bg = (255, 255, 255)

min_x, max_x = w, 0
min_y, max_y = h, 0

for y in range(h):
    for x in range(w):
        p = img.getpixel((x, y))
        if abs(p[0]-255) + abs(p[1]-255) + abs(p[2]-255) > 15: # Not purely white
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

if min_x < max_x and min_y < max_y:
    cropped = img.crop((min_x, min_y, max_x, max_y))
    cropped.save('public/logobosch.jpeg')
    print(f"Cropped to {min_x},{min_y} - {max_x},{max_y}")
else:
    print("No cropping done")
