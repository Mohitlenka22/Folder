# 1
import datetime
now = datetime.datetime.now()
print ("Current date and time : ")
print (now.strftime("%Y-%m-%d %H:%M:%S"))

# 2
import sys
print("Version of python: ",sys.version)


# 3
n =int(input('Enter a number: '))
print('value of n+nn+nnn',n+(n*2)+(n*3))

# 4
a = 1
print(a,type(a)) #int

a = 2.0
print(a,type(a)) #float

a = 1+2j
print(a,type(a)) #complex

a ="Hello"
print(a,type(a)) #string

a =[1,2,"cse"]
print(a,type(a)) #list

a =('array',2,3.0)
print(a,type(a)) #tuple

a={'Name':'sandeep','language':'python'} 
print(a,type(a)) #dictionary

a ={'world',3,'red'}
print(a,type(a)) #sets

# 5
import calendar
yy = int(input('Enter a year: ')) # year
mm = int(input('Enter a month: '))    # month
# display the calendar
print('calendar',calendar.month(yy, mm))

# 6
import math as m
n = int(input('Enter a number: '))
print('square root of number:',m.sqrt(n))

# 7
# circle 
import math as m
radius = int(input ('Enter a radius: '))
print('area of circle',m.pi*(radius**2))
print('perimeter of circle',2*(m.pi)*radius)
#triangle 
import math as m
a=int(input('Enter the length of side a: '))
b=int(input('Enter the length of side b: '))
c=int(input('Enter the length of side c: '))
s=(a+b+c)/2
print ('perimeter of triangle',a+b+c)
print('area of triangle',m.sqrt(s*(s-a)*(s-b)*(s-c)))

# 8
a=int(input('Enter a number: '))
b=int(input('Enter a number: '))
print('before swapping',a,b) #before swapping
a,b = b,a
print('After swapping',a,b) # after swapping

# 9
Km= int(input('Enter kilometers: '))
mile =Km/(1.609)
print('miles = ',mile)


# 10
celsius = float(input('Enter temperature in celsius: '))  
# calculate fahrenheit
fahrenheit = (celsius * 1.8) + 32
print('%0.1f degree Celsius is equal to %0.1f degree Fahrenheit' %(celsius,fahrenheit))