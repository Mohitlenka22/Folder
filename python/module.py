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

def isPrime(n):
    flag = False
    if n == 2:
        return True
    for i in range(2, int(n**(1/2)) + 1):
        if n % i == 0:
            return False
    return True
