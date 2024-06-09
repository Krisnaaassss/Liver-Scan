from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np
import os
import joblib

app = Flask(__name__)
CORS(app)

# Load model
model_path = "model/liver_model.pkl"
model = joblib.load(model_path)

# Load dataset
csv_liver_path = "ILPD.csv"
df_liver = pd.read_csv(csv_liver_path)

@app.route("/dataset")
def dataset():
    df_cleaned = df_liver.fillna("NaN")
    data = df_cleaned.to_dict(orient="records")
    return jsonify(data)

@app.route('/submit', methods=['POST'])
def submit_form():
    try:
        data = request.json
        print("Received data:", data)
        
        required_fields = ['Age', 'Gender', 'Total_Bilirubin', 'Direct_Bilirubin', 'Alkaline_Phosphotase', 'Alamine_Aminotransferase', 'Aspartate_Aminotransferase', 'Total_Protiens', 'Albumin_and_Globulin_Ratio', 'Albumin']
        for field in required_fields:
            if field not in data:
                raise ValueError(f"Missing field: {field}")

        input_data = [
            float(data['Age']),
            float(data['Gender']),
            float(data['Total_Bilirubin']),
            float(data['Direct_Bilirubin']),
            float(data['Alkaline_Phosphotase']),
            float(data['Alamine_Aminotransferase']),
            float(data['Aspartate_Aminotransferase']),
            float(data['Total_Protiens']),
            float(data['Albumin_and_Globulin_Ratio']),
            float(data['Albumin']),
        ]
        
        data_array = np.asarray(input_data).reshape(1, -1)
        prediction = model.predict(data_array)
        result = int(prediction[0])
        return jsonify(result=result)
    except Exception as e:
        print("Error:", str(e))
        return jsonify(error=str(e)), 400

if __name__ == "__main__":
    app.run(debug=True)
