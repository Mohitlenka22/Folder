from package import module1 as m1, module2 as m2


try:
    x = m1.add(1, 2, 3, 4)
    print(x)
    y = m1.mult(4, 5, 7, 8, 9, 1)
    print(y)
    for i in m2.Details:
        print(i.get('Name'))
    z = m2.PI
    print(z)
except Exception as e:
    print(e)