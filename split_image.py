from PIL import Image

img = Image.open('public/marcas-contpar.png')
width, height = img.size

mid = height // 2

top = img.crop((0, 0, width, mid))
top.save('public/marcas-top.png')

bottom = img.crop((0, mid, width, height))
bottom.save('public/marcas-bottom.png')
print("Split successful")
