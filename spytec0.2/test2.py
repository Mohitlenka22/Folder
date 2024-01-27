n,q=map(int,input().split())
l=list(map(int,input().split()))
qa=list(map(int,input().split()))
for i in range(len(qa)):
    a=[x for x in l]
    for j in range(len(a)):
        a[j]=(a[j]^qa[i])
    if i==0:
        print(sum(a))
    else:
        print(sum(a)+qa[i-1])     