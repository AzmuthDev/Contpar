from PIL import Image

def analyze(path):
    try:
        img = Image.open(path)
        print(f"{path}: size={img.size}, mode={img.mode}")
    except Exception as e:
        print(f"Error reading {path}: {e}")

analyze("logobosch.jpeg")
analyze("rodapé.jpeg")
