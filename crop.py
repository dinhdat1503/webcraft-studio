from PIL import Image
import os

img_path = r"C:\Users\ngodi\.gemini\antigravity\brain\3a7360cf-d9f5-436a-a8b5-32fd5a3f2ffd\catchie_logo_full_1775107514458.png"
output_path = r"d:\DOANTOTNGHIEP\project1\public\assets\catchie-logo.png"

try:
    img = Image.open(img_path).convert("RGB")
    width, height = img.size

    # The background color is a deep navy.
    sample_x = width - 100
    sample_y = 200
    base_color = img.getpixel((sample_x, sample_y))

    def is_bg(pixel):
        return all(abs(pixel[i] - base_color[i]) < 15 for i in range(3))

    min_x, min_y = width, height
    max_x, max_y = 0, 0

    for x in range(width):
        for y in range(height):
            if is_bg(img.getpixel((x, y))):
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y

    if max_x >= min_x and max_y >= min_y:
        print(f"Cropping bounds: {min_x}, {min_y}, {max_x}, {max_y}")
        cropped = img.crop((min_x, min_y, max_x, max_y))
        cropped.save(output_path)
        print("Logo cropped and saved successfully.")
    else:
        print("Could not detect bounds.")
except Exception as e:
    print(f"Error: {e}")
