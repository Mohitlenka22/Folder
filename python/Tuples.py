from re import T


tuple_1  = (1,2,3,"python","java","c++")
tuple_2 = (2,4,5,90,4734 ,0,232,432,342)
print(*tuple_1)

# tuple_1[0]=2 tuples are immutable
tuple_3 = tuple_1 + tuple_2
print(*tuple_3)

string = "Java"
print(tuple(string))

print(tuple_1[2])
print(sorted(tuple_2))

obj = list(enumerate(tuple_2,start=5))
print(obj)