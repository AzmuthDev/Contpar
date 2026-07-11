from PIL import Image, ImageEnhance, ImageFilter

# Open the image
img = Image.open('public/imagem_bosh.jpeg')

# 1. Upscale by 2x using Lanczos (high quality)
new_size = (img.width * 2, img.height * 2)
img = img.resize(new_size, Image.Resampling.LANCZOS)

# 2. Sharpening
# UnsharpMask can give better results than a simple SHARPEN filter
img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))

# 3. Enhance Contrast slightly
enhancer = ImageEnhance.Contrast(img)
img = enhancer.enhance(1.1)

# 4. Enhance Color slightly
color_enhancer = ImageEnhance.Color(img)
img = color_enhancer.enhance(1.1)

# Save the improved image, overwriting the old one (or we can save as _improved)
img.save('public/imagem_bosh_improved.jpeg', quality=95)
print("Image enhanced and saved to public/imagem_bosh_improved.jpeg")
