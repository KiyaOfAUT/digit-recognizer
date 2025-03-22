from fastapi import FastAPI, File, UploadFile
import numpy as np
from PIL import Image
import tensorflow as tf
from .model_loader import model
from fastapi.staticfiles import StaticFiles

app = FastAPI()

def preprocess_image(image: Image.Image):
    image = image.convert("L")
    image = image.resize((28, 28))
    img_array = np.array(image) / 255.0
    img_array = img_array.reshape(1, 28, 28, 1) 
    return img_array

@app.post("/predict/")
async def predict_digit(file: UploadFile = File(...)):
    image = Image.open(file.file)
    img_array = preprocess_image(image)
    predictions = model.predict(img_array)
    confidence = {str(i): float(predictions[0][i]) for i in range(10)}
    print(confidence)
    return {"confidence": confidence}
app.mount("/", StaticFiles(directory="static", html=True), name="static")