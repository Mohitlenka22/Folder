from sklearn import datasets
from sklearn.neighbors import KNeighborsClassifier
# import matplotlib.pyplot as plt

iris = datasets.load_iris()

features = iris.data
labels = iris.target

# Training Classifier
classifier = KNeighborsClassifier()
classifier.fit(features, labels)

predicted = classifier.predict([[1, 4, 5, 2]])

# print(iris.DESCR)

'''
 0 - Iris-Setosa
 1 - Iris-Versicolour
 2 - Iris-Virginica
'''

# plt.scatter(features, labels)
# plt.show()

print(predicted)