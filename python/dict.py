d = {0:1,"name":"mohit","grade":"9.77",'lst':[1,2,3]}
for key in d:
    print(d.get(key),sep='*')

print(d.keys())
print(d.values())
print(d.items())
d.update({"greet":"hello"})
print(d.items())

print(d[0])

dic  = dict([(1,'python'),(2,'java'),(3,'c++'),(4,'C')])
print(dic)