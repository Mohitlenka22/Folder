for _ in range(int(input())):
    n=int(input())
    if n%7==0:
        print(n)
        continue
    else:
        h,l=n-n%7+7,n-n%7
        x,y=abs(n-int(h)),abs(n-int(l))
        m=min(x,y)
        h,l=str(h),str(l)
        if x==m and len(h)==len(str(n)):
            print(int(h))
        else:
            print(int(l))     