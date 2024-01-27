import math as m
n=int(input())
z=0
if n==1:
    z+=4
    print('1\n4\n2\n1')
else:
    while(True):
        print(n)
        if pow(2,m.floor(m.log(n,2))) == n:
           d=m.log(n,2) 
           z+=1
           break
        if n%2==0 :
           n//=2
           z+=1
        elif n%2!=0 :
           n=(3*n)+1
           z+=1
    z+=d+1
    v=d-1
    while d>0 :
      print(int(pow(2,v)))
      v=v-1
      d=d-1
    if n==2:
      print('4\n2')
      z+=1
    else:    
      print('4')
print('total count: '+ str(z))