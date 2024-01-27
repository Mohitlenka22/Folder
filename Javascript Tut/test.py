l=[]
d={}
class Toy:
    def __init__(self,name,brand,toy,category,quantity,price):
        self.s=[]
        self.s.append(name)
        self.s.append(brand)
        self.s.append(toy)
        self.s.append(category) 
        self.s.append(quantity)
        self.s.append(price) 
        l.append(self.s)
        d[name]=quantity
class Toystore:
    def __init__ (self,l):
        self.l=l
    def first(self,category):
       self.ans=[]
       for i in range(len(self.l)):
               if self.l[i][4]==category:
                   self.ans.append(self.l[i])   
       if len(self.ans)==0:
            print("Toy with matching condition is not available in the Toystore")
       else:
           print(*self.ans)
    def second(): 
        d.sort()
        for i in d:
            print(i,d[i]) 
for _ in range(int(input())): 
    name=input()
    brand=input()
    material=input()
    category=input()
    quantity=int(input())
    price=int(input())  
    cat1=input()     
    ob=Toy(name,brand,material,category,quantity,price)
    obj=Toystore(l)
    obj.first(cat1)   
    obj.second()     