from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import numpy as np
import matplotlib.pyplot as plt

mydict = {"name":"Mohit", "roll":"21131a05a4", "sgpa":9.77}

# Create your views here.
def Home(request):
    # return JsonResponse(mydict) 
    return HttpResponse("Hello Python")

def About(request, x, y):
    return HttpResponse(x + y)

def index(request):
    return render(request, 'index.html')

def calc(request):
    a = np.array([1, 2, 3, 4, 0, 1, 3, 4, 0])
    b = np.array([ [1, 2, 3],
                    [2, 3 ,5],
                    [1, 0, 3]           
    ])
    p = a.dot(b)
    return HttpResponse(p)