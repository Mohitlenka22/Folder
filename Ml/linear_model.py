import matplotlib.pyplot as plt
import numpy as np
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error


# datasets are dictionaries in sklearn
diabetes = datasets.load_diabetes()

""" 

 Attributes/Features in diabetes_datasets
 print(diabetes.keys()) -> 
 ['data', 'target', 'frame', 'DESCR', 'feature_names','data_filename',           
 'target_filename', 'data_module']

  print(diabetes.DESCR)

"""
# diabetes_X = diabetes.data[:, np.newaxis, 2]  # one feature
diabetes_X = diabetes.data  # All feature
diabetes_X_train = diabetes_X[: 300]
diabetes_X_test = diabetes_X[-30:]

diabetes_Y_train = diabetes.target[: 300]
diabetes_Y_test = diabetes.target[-30:]

# model
model = linear_model.LinearRegression()

# Training Model
model.fit(diabetes_X_train, diabetes_Y_train)

diabetes_Y_Predict = model.predict(diabetes_X_test)

print("Mean Squared Error: ", mean_squared_error(
    diabetes_Y_test, diabetes_Y_Predict))

'''
    -> f(x1, x2, ..., x10) = w0 + w1x1 + w2x2 + ... + w10x10;
    -> [w1, w2, ..., w10] -> weights / coefficients
    -> w0 -> intercept
    -> Here f(x1, x2, ..., x10) is label/Dependent Variable
    -> x1, x2, ..., x10 are indepedent variables 
'''
print("Weights: ", model.coef_)
print("Intercept: ",  model.intercept_)

# plt.scatter(diabetes_X_test, diabetes_Y_test)
# plt.plot(diabetes_X_test, diabetes_Y_Predict)
# plt.show()

'''
if Features/Independent variables increases Error Decreases....

'''
