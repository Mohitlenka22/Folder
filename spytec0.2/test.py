for _ in range(int(input())):
    n=int(input())
    l=list(map(int,input().split()))
    o=l.count(1)
    z=l.count(0)
    o1,z1=o,z
    ans1,ans2 =[],[]
    i=0
    while z>0 or o>0:
        if i&1 and z>0:
            ans1.append(0)
            z-=1
        elif o>0:
            ans1.append(1)
            o-=1
        i+=1    
    c=0 
    while z1>0 or o1>0:
        if c%2==0 and z1>0:
            ans2.append(0)
            z1-=1
        elif o1>0:
            ans2.append(1)
            o1-=1
        c+=1          
    c1,c2=0,0
    for i in range(len(ans1)-1):
        if ans1[i]+ans1[i+1]==1:
            c1+=1
    for i in range(len(ans2)-1):
        if ans2[i]+ans2[i+1]==1:
           c2+=1                            
    if c1==len(ans1)-1 or c2==len(ans2)-1:
        print("YES")
    else:
        print("NO")             
        