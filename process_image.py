from PIL import Image
import math

def replace_background(image_path, output_path, target_color, tolerance=80):
    img = Image.open(image_path).convert("RGBA")
    data = img.getdata()
    
    # Sample top-left pixel as background color
    bg_color = data[0]
    
    new_data = []
    for item in data:
        # Calculate distance between current pixel and background color
        diff = math.sqrt((item[0] - bg_color[0])**2 + (item[1] - bg_color[1])**2 + (item[2] - bg_color[2])**2)
        
        if diff < tolerance:
            # Calculate a blend factor for smooth edges (anti-aliasing)
            # if diff is 0, factor is 0 (fully target color)
            # if diff is tolerance, factor is 1 (fully original color)
            factor = diff / tolerance
            # To avoid halos, we can just snap to target_color if it's very close,
            # or blend if it's at the edge.
            if diff < tolerance * 0.5:
                new_data.append((target_color[0], target_color[1], target_color[2], 255))
            else:
                # blend
                r = int(target_color[0] * (1 - factor) + item[0] * factor)
                g = int(target_color[1] * (1 - factor) + item[1] * factor)
                b = int(target_color[2] * (1 - factor) + item[2] * factor)
                new_data.append((r, g, b, 255))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

# Target color is #0a1230 -> RGB(10, 18, 48)
replace_background("public/marcas-contpar.jpeg", "public/marcas-contpar.png", (10, 18, 48), tolerance=60)
print("Done")
