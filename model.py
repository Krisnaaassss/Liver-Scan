import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from imblearn.combine import SMOTEENN
from sklearn.pipeline import Pipeline
import pickle

# Load data
df = pd.read_csv("ILPD.csv")
df = df.rename(columns={'Dataset': 'liver disease'})
df['Gender'] = df['Gender'].apply(lambda x: 1 if x == 'Male' else 0)
df.loc[df['liver disease'] == 2, 'liver disease'] = 0
dfClean = df.drop_duplicates(inplace=False)
dfClean = dfClean.dropna()

def outlierDEL(column):
    q1 = dfClean[column].quantile(0.25)
    q3 = dfClean[column].quantile(0.75)
    IQR = q3 - q1
    lowBound = q1 - 1.5 * IQR
    upBound = q3 + 1.5 * IQR

    dfClean[column] = dfClean[column].apply(lambda x: lowBound if x < lowBound else (upBound if x > upBound else x))

outliersCOL = ['Total_Bilirubin', 'Direct_Bilirubin', 'Alkaline_Phosphotase',
              'Alamine_Aminotransferase', 'Aspartate_Aminotransferase', 'Total_Protiens',
              'Albumin_and_Globulin_Ratio']
for col in outliersCOL:
    outlierDEL(col)

X = dfClean.drop('liver disease', axis=1)
y = dfClean['liver disease']

smote_enn = SMOTEENN(random_state=42)
X_resampled, y_resampled = smote_enn.fit_resample(X, y)

X_train, X_test, y_train, y_test = train_test_split(X_resampled, y_resampled, test_size=0.2, random_state=42)

best_n_neighbors = 1

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('pca', PCA(n_components=0.97, whiten=True)),
    ('knn_model', KNeighborsClassifier(n_neighbors=best_n_neighbors, weights='distance'))
])

pipeline.fit(X_train, y_train)

# Predict with pipeline
y_pred = pipeline.predict(X_test)

# Calculate accuracy on test set
accuracy = accuracy_score(y_test, y_pred)
print("Test set accuracy:", accuracy)

# Perform cross-validation and calculate mean accuracy
cv_scores = cross_val_score(pipeline, X_test, y_test, cv=3)
mean_cv_score = cv_scores.mean()

# Print cross-validation scores and mean accuracy
print("Cross-validation scores:", cv_scores)
print("Mean cross-validation accuracy:", mean_cv_score)
print()

# Calculate confusion matrix
conf_matrix = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(conf_matrix)

# Generate classification report
class_report = classification_report(y_test, y_pred)
print("Classification Report:\n", class_report)


# Save the trained model as a pickle file
with open('trained_model.pkl', 'wb') as model_file:
    pickle.dump(pipeline, model_file)

print("Model saved as 'trained_model.pkl'")
