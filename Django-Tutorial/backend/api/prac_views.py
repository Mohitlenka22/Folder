# from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serilaizers import PersonSerializer
from api.models import Person
from rest_framework.views import APIView

# Create your views here.


"""
@api_view(['GET', 'DELETE'])
def index(request):    
    '''def index(request, pk):'''
    if request.method == 'GET':
        '''
        # query_set = Person.objects.all()
        query_set = Person.objects.get(pk=pk)
        # serialize = PersonSerializer(query_set, many=True)
        serialize = PersonSerializer(query_set)
        return Response(serialize.data)
        '''
        print(request.query_params) #we use request.GET to query in standard django -->https://xyz.com/?search=mohit
        return Response(request.query_params)
    elif request.method == 'DELETE':
        query_set = Person.objects.get(pk=pk)
        # serialize = PersonSerializer(query_set, many=True)
        serialize = PersonSerializer(query_set)
        # return Response(serialize.data)

@api_view(['GET', 'DELETE'])
def index(request):    
    '''def index(request, pk):'''
    if request.method == 'GET':
        # query_set = Person.objects.all()
        query_set = Person.objects.get(pk=pk)
        # serialize = PersonSerializer(query_set, many=True)
        serialize = PersonSerializer(query_set)
        return Response(serialize.data)
    elif request.method == 'DELETE':
        query_set = Person.objects.get(pk=pk)
        # serialize = PersonSerializer(query_set, many=True)
        serialize = PersonSerializer(query_set)
        # return Response(serialize.data)s


@api_view(['POST'])
def create(request):
    # query_set = Person.objects.all()
    serializer = PersonSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)
    # return Response(query_set)
"""