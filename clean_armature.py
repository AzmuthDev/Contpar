from PIL import Image

img = Image.open('public/bosch-armature.png').convert("RGBA")
w, h = img.size
data = img.load()

# Let's erase the outer 15 pixels of the image (which contain the border and blue line)
# Wait, let's just make the outer 15 pixels transparent.
margin = 15
for x in range(w):
    for y in range(h):
        if x < margin or x > w - margin or y < margin or y > h - margin:
            data[x, y] = (255, 255, 255, 0)

img.save('public/bosch-armature.png')
print("Cleaned bosch-armature.png")
