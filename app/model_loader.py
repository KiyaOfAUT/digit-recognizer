import tensorflow as tf

model = tf.keras.models.load_model("model/mnist_model.h5")
print(model.summary())
