from module import *

try:
    print(add(1, 2, 3))
    print(mult(3, 5, 9))
    print(hello("ABC"))
except Exception as e:
    print(e)

from module import add, mult, sub
try:
    print(add(1, 2, 3, 6))
    print(sub(1, 5))
    print(mult(1, 3, 8, 12))
except Exception as e:
    print(e)

'''import module as m
print(m.add(1, 2))'''

