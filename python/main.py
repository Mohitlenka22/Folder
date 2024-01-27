import module


try:
    a = module.add(1, 2, 3, 4)
    print(a)
    b = module.sub(1, 2)
    print(b)
    c = module.mult(1, 4, 5, 6)
    print(c)
    d = module.true_div(4, 6)
    print(d)
    e = module.div(1, 3)
    print(e)
    # print(module.isPrime(1))
except Exception as e:
    print(e)