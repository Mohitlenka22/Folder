from django.shortcuts import render, HttpResponse

# Create your views here.


def index(request, *args, **kwargs):
    # return HttpResponse("Hello World")
    context = {
        "name": "mohit",
        "age":19
    }
    return render(request, 'index.html', status=200, context=context)

