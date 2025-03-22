# digit-recognizer
Digit Recognizer is a machine learning project designed to classify handwritten digits (0-9) using a trained model. This project demonstrates the use of deep learning techniques to solve a classic computer vision problem. It is built with a focus on simplicity, scalability, and performance.

## Features
- Preprocessing of handwritten digit datasets.
- Training and evaluation of a deep learning model.
- Real-time digit recognition through a user-friendly interface.

## used technologies
The project leverages the following technologies:
- **Python**: Core programming language for development.
- **TensorFlow/Keras**: For building and training the deep learning model.
- **NumPy**: For data manipulation and preprocessing.
- **FastAPI**: To create a web-based interface for digit recognition.
- **HTML/CSS/JavaScript**: For the front-end interface.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites
Ensure you have the following installed:
- Python 3.8 or higher
- pip (Python package manager)
- Virtual environment tools (optional but recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KiyaOfAUT/digit-recognizer.git
   cd digit-recognizer
2. Create and activate a virtual environment (optional but recommended):
    ```bash
    python3 -m venv venv
    source venv/bin/activate
3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt

### Runing the Application
1. type the following command in the route of the project:
    ```bash
    uvicorn app.main:app --reload
2. then open the following address on your browser:
    ```bash
    http://127.0.0.1:8000/index.html

## Project Structure
   - static/: Contains static files like CSS and JavaScript.
   - model/: Directory for jupyter notebook and the trained model.
   - app/: directory for the FastAPI app

## Acknowledgments
The MNIST dataset is used for handwritten digits.

