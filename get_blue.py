from PIL import Image
from collections import Counter

img = Image.open('public/bandeira-bosch-2.0.jpeg').convert('RGB')
w, h = img.size

# Let's sample pixels from the top half where "SEGURANÇA" is located
blues = []
for y in range(int(h*0.1), int(h*0.4)):
    for x in range(int(w*0.1), int(w*0.9)):
        r, g, b = img.getpixel((x, y))
        # The text is dark blue. Look for pixels where B > R and B > G and R < 100
        if b > r and b > g and r < 100:
            blues.append((r, g, b))

counter = Counter(blues)
most_common = counter.most_common(1)[0][0]
print(f"Most common blue: RGB{most_common}")
print(f"Hex: #{most_common[0]:02x}{most_common[1]:02x}{most_common[2]:02x}")
