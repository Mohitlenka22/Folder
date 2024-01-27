import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-10 , 10, 100)
print(x)
y = 1 / (1 + np.exp(-x))

plt.plot(x, y)
plt.xlabel('x')
plt.ylabel('sigmoid(x)')
plt.show()
