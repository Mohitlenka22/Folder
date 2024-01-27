def add(*args):
    s = 0
    for i in args:
        s += i
    return s
def sub(a, b):
    return a - b
def mult(*args):
    prod = 1
    for i  in args:
        prod *= i
    return prod
def true_div(a, b):
    return a//b
