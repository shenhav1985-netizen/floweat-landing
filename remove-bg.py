from PIL import Image, ImageFilter
import numpy as np

img = Image.open("images/hero2.png").convert("RGBA")
data = np.array(img)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Sample background color from corners
corners = [
    (r[0,0], g[0,0], b[0,0]),
    (r[0,-1], g[0,-1], b[0,-1]),
    (r[-1,0], g[-1,0], b[-1,0]),
    (r[-1,-1], g[-1,-1], b[-1,-1]),
]
bg_r = int(np.mean([c[0] for c in corners]))
bg_g = int(np.mean([c[1] for c in corners]))
bg_b = int(np.mean([c[2] for c in corners]))

print(f"צבע רקע שזוהה: RGB({bg_r},{bg_g},{bg_b})")

threshold = 40
mask = (
    (np.abs(r.astype(int) - bg_r) < threshold) &
    (np.abs(g.astype(int) - bg_g) < threshold) &
    (np.abs(b.astype(int) - bg_b) < threshold)
)

data[mask, 3] = 0

result = Image.fromarray(data)
result.save("images/hero2-nobg.png")
print("נשמר: images/hero2-nobg.png")
